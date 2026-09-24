import os
from datetime import datetime, timezone

from bson import ObjectId
from django.conf import settings
from django.contrib.auth.hashers import check_password, make_password
from django.core import signing
from pymongo.errors import DuplicateKeyError, PyMongoError

from .mongo import get_mongo_client


def get_users_collection():
    collection = get_mongo_client()[os.getenv("MONGODB_DB_USERS", "carwash_users")][
        os.getenv("MONGODB_USERS_COLLECTION", "users")
    ]
    collection.create_index("email", unique=True)
    return collection


def create_token(user):
    signer = signing.TimestampSigner(salt="carwash-auth")
    return signer.sign_object({"id": str(user["_id"]), "email": user["email"]})


def get_user_from_request(request):
    authorization = request.headers.get("Authorization", "")
    if not authorization.startswith("Bearer "):
        return None

    try:
        signer = signing.TimestampSigner(salt="carwash-auth")
        payload = signer.unsign_object(
            authorization.removeprefix("Bearer "),
            max_age=60 * 60 * 24 * 7,
        )
        return get_users_collection().find_one({"_id": ObjectId(payload["id"])})
    except (ValueError, KeyError, signing.BadSignature, signing.SignatureExpired):
        return None


def serialize_user(user):
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "created_at": user["created_at"].isoformat(),
    }


def signup_user(name, email, password):
    user = {
        "name": name,
        "email": email.lower(),
        "password": make_password(password),
        "created_at": datetime.now(timezone.utc),
    }
    try:
        result = get_users_collection().insert_one(user)
    except DuplicateKeyError:
        return None

    user["_id"] = result.inserted_id
    return user


def get_or_create_social_user(provider, email, name):
    normalized_email = str(email or "").strip().lower()
    normalized_name = str(name or "").strip() or "User"
    if not normalized_email or "@" not in normalized_email:
        return None

    existing_user = get_users_collection().find_one({"email": normalized_email})
    if existing_user:
        return existing_user

    user = {
        "name": normalized_name,
        "email": normalized_email,
        "password": make_password(f"social::{provider}::{normalized_email}"),
        "created_at": datetime.now(timezone.utc),
    }
    try:
        result = get_users_collection().insert_one(user)
    except DuplicateKeyError:
        return get_users_collection().find_one({"email": normalized_email})

    user["_id"] = result.inserted_id
    return user


def authenticate_user(email, password):
    user = get_users_collection().find_one({"email": email.lower()})
    if user and check_password(password, user["password"]):
        return user
    return None
