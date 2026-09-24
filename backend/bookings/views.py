import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo.errors import PyMongoError

from .auth import (
    authenticate_user,
    create_token,
    get_user_from_request,
    serialize_user,
    signup_user,
)
from .mongo import get_bookings_collection, get_contact_collection

SERVICES = {
    "Basic Cleaning",
    "Interior Cleaning",
    "Premium Cleaning",
    "Pressure Wash",
    "Bucket Wash",
    "Deep Cleaning",
    "Interior Only",
    "Exterior Only Wash",
}

SHIFTS = {
    "Morning": {"08:00", "09:00", "10:00", "11:00"},
    "Afternoon": {"12:00", "13:00", "14:00", "15:00"},
    "Evening": {"16:00", "17:00", "18:00", "19:00"},
}


@csrf_exempt
def booking_list_create(request):
    try:
        if request.method == "GET":
            bookings = []
            for service in SERVICES:
                collection = get_bookings_collection(service)
                for booking in collection.find().sort([("date", 1), ("created_at", 1)]):
                    booking["id"] = str(booking.pop("_id"))
                    booking["created_at"] = booking["created_at"].isoformat()
                    bookings.append(booking)
            return JsonResponse({"bookings": bookings})

        if request.method != "POST":
            return JsonResponse({"error": "Method not allowed"}, status=405)

        payload = json.loads(request.body)
        booking = {
            "name": str(payload.get("name", "")).strip(),
            "email": str(payload.get("email", "")).strip(),
            "date": str(payload.get("date", "")).strip(),
            "shift": str(payload.get("shift", "")).strip(),
            "time": str(payload.get("time", "")).strip(),
            "service": str(payload.get("service", "")).strip(),
            "price": str(payload.get("price", "")).strip(),
        }

        if (
            not all(booking.values())
            or booking["service"] not in SERVICES
            or booking["shift"] not in SHIFTS
            or booking["time"] not in SHIFTS[booking["shift"]]
        ):
            return JsonResponse({"error": "Please provide valid booking details."}, status=400)

        collection = get_bookings_collection(booking["service"])
        authenticated_user = get_user_from_request(request)

        from datetime import datetime, timezone

        booking["created_at"] = datetime.now(timezone.utc)
        if authenticated_user:
            booking["user_id"] = str(authenticated_user["_id"])
            booking["user_email"] = authenticated_user["email"]
        result = collection.insert_one(booking)
    except (TypeError, ValueError, json.JSONDecodeError):
        return JsonResponse({"error": "Please provide valid booking details."}, status=400)
    except PyMongoError:
        return JsonResponse(
            {"error": "MongoDB is unavailable. Start MongoDB or check MONGODB_URI."},
            status=503,
        )

    return JsonResponse(
        {
            "message": "Booking created successfully.",
            "booking": {
                "id": str(result.inserted_id),
                "name": booking["name"],
                "email": booking["email"],
                "date": booking["date"],
                "shift": booking["shift"],
                "time": booking["time"],
                "service": booking["service"],
                "price": booking.get("price", ""),
                "created_at": booking["created_at"].isoformat(),
            },
        },
        status=201,
    )


@csrf_exempt
def contact_message_create(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    try:
        payload = json.loads(request.body)
        message = {
            "name": str(payload.get("name", "")).strip(),
            "email": str(payload.get("email", "")).strip(),
            "message": str(payload.get("message", "")).strip(),
        }

        if not all(message.values()) or "@" not in message["email"]:
            return JsonResponse({"error": "Please provide valid contact details."}, status=400)

        from datetime import datetime, timezone

        message["created_at"] = datetime.now(timezone.utc)
        authenticated_user = get_user_from_request(request)
        if authenticated_user:
            message["user_id"] = str(authenticated_user["_id"])
            message["user_email"] = authenticated_user["email"]
        result = get_contact_collection().insert_one(message)
    except (TypeError, ValueError, json.JSONDecodeError):
        return JsonResponse({"error": "Please provide valid contact details."}, status=400)
    except PyMongoError:
        return JsonResponse(
            {"error": "MongoDB is unavailable. Start MongoDB or check MONGODB_URI."},
            status=503,
        )

    return JsonResponse(
        {
            "message": "Message sent successfully.",
            "id": str(result.inserted_id),
        },
        status=201,
    )


@csrf_exempt
def signup(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    try:
        payload = json.loads(request.body)
        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        password = str(payload.get("password", ""))
        if not name or "@" not in email or len(password) < 8:
            return JsonResponse(
                {"error": "Name, valid email, and an 8-character password are required."},
                status=400,
            )
        user = signup_user(name, email, password)
        if user is None:
            return JsonResponse({"error": "An account with this email already exists."}, status=409)
        return JsonResponse(
            {"token": create_token(user), "user": serialize_user(user)}, status=201
        )
    except (TypeError, ValueError, json.JSONDecodeError):
        return JsonResponse({"error": "Please provide valid signup details."}, status=400)
    except PyMongoError:
        return JsonResponse({"error": "MongoDB is unavailable."}, status=503)


@csrf_exempt
def login(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    try:
        payload = json.loads(request.body)
        user = authenticate_user(
            str(payload.get("email", "")).strip(), str(payload.get("password", ""))
        )
        if user is None:
            return JsonResponse({"error": "Incorrect email or password."}, status=401)
        return JsonResponse({"token": create_token(user), "user": serialize_user(user)})
    except (TypeError, ValueError, json.JSONDecodeError):
        return JsonResponse({"error": "Please provide valid login details."}, status=400)
    except PyMongoError:
        return JsonResponse({"error": "MongoDB is unavailable."}, status=503)


@csrf_exempt
def social_login(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    try:
        payload = json.loads(request.body)
        provider = str(payload.get("provider", "")).strip().lower()
        email = str(payload.get("email", "")).strip()
        name = str(payload.get("name", "")).strip()

        if provider not in {"google", "facebook"} or "@" not in email:
            return JsonResponse({"error": "Please provide a valid social login account."}, status=400)

        user = get_or_create_social_user(provider, email, name)
        if user is None:
            return JsonResponse({"error": "Unable to continue with social login."}, status=400)
        return JsonResponse({"token": create_token(user), "user": serialize_user(user)})
    except (TypeError, ValueError, json.JSONDecodeError):
        return JsonResponse({"error": "Please provide valid social login details."}, status=400)
    except PyMongoError:
        return JsonResponse({"error": "MongoDB is unavailable."}, status=503)


def profile(request):
    try:
        user = get_user_from_request(request)
        if user is None:
            return JsonResponse({"error": "Authentication required."}, status=401)

        user_id = str(user["_id"])
        bookings = []
        for service in SERVICES:
            collection = get_bookings_collection(service)
            query = {
                "$or": [
                    {"user_id": user_id},
                    {"user_email": user["email"]},
                    {"email": user["email"]},
                ]
            }
            for booking in collection.find(query).sort([("date", -1), ("created_at", -1)]):
                bookings.append(
                    {
                        "id": str(booking["_id"]),
                        "name": booking["name"],
                        "email": booking["email"],
                        "date": booking["date"],
                        "shift": booking.get("shift", "Not specified"),
                        "time": booking.get("time", "Not specified"),
                        "service": booking["service"],
                        "price": booking.get("price", "Not specified"),
                        "created_at": booking["created_at"].isoformat(),
                    }
                )

        messages = []
        message_query = {
            "$or": [
                {"user_id": user_id},
                {"user_email": user["email"]},
                {"email": user["email"]},
            ]
        }
        for message in get_contact_collection().find(message_query).sort("created_at", -1):
            messages.append(
                {
                    "id": str(message["_id"]),
                    "message": message["message"],
                    "created_at": message["created_at"].isoformat(),
                }
            )

        return JsonResponse(
            {"user": serialize_user(user), "bookings": bookings, "messages": messages}
        )
    except PyMongoError:
        return JsonResponse({"error": "MongoDB is unavailable."}, status=503)
