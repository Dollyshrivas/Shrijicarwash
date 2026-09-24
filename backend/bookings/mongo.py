import os
from urllib.parse import quote

from pymongo import MongoClient

_client = None

SERVICE_DATABASE_ENV = {
    "Basic Cleaning": "MONGODB_DB_BASIC",
    "Interior Cleaning": "MONGODB_DB_INTERIOR",
    "Premium Cleaning": "MONGODB_DB_PREMIUM",
    "Pressure Wash": "MONGODB_DB_PRESSURE",
    "Bucket Wash": "MONGODB_DB_BUCKET",
    "Deep Cleaning": "MONGODB_DB_DEEP",
    "Interior Only": "MONGODB_DB_INTERIOR_ONLY",
    "Exterior Only Wash": "MONGODB_DB_EXTERIOR_ONLY",
}

SERVICE_DATABASE_DEFAULTS = {
    "Basic Cleaning": "carwash_basic",
    "Interior Cleaning": "carwash_interior",
    "Premium Cleaning": "carwash_premium",
    "Pressure Wash": "carwash_pressure",
    "Bucket Wash": "carwash_bucket",
    "Deep Cleaning": "carwash_deep",
    "Interior Only": "carwash_interior_only",
    "Exterior Only Wash": "carwash_exterior_only",
}


def normalize_mongodb_uri(uri):
    scheme, separator, remainder = uri.partition("://")
    if not separator or "@" not in remainder:
        return uri

    userinfo, host = remainder.rsplit("@", 1)
    username, separator, password = userinfo.partition(":")
    if not separator:
        return uri

    encoded_userinfo = f"{quote(username, safe='')}:{quote(password, safe='')}"
    return f"{scheme}://{encoded_userinfo}@{host}"


def get_bookings_collection(service):
    database_name = os.getenv(
        SERVICE_DATABASE_ENV[service], SERVICE_DATABASE_DEFAULTS[service]
    )
    database = get_mongo_client()[database_name]
    return database[os.getenv("MONGODB_COLLECTION", "bookings")]


def get_contact_collection():
    database = get_mongo_client()[os.getenv("MONGODB_DB_CONTACT", "carwash_contact")]
    return database[os.getenv("MONGODB_CONTACT_COLLECTION", "messages")]


def get_mongo_client():
    global _client

    if _client is None:
        _client = MongoClient(
            normalize_mongodb_uri(
                os.getenv("MONGODB_URI", "mongodb://127.0.0.1:27017")
            ),
            serverSelectionTimeoutMS=3000,
        )
    return _client
