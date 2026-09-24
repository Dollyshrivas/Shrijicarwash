# Django backend

## Setup

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example ..\.env
python manage.py runserver
```

The API runs at `http://127.0.0.1:8000`.

Set `MONGODB_URI` in `.env` to your local MongoDB or MongoDB Atlas connection string.
Bookings are stored in separate MongoDB databases by wash type:

- `MONGODB_DB_BASIC` for Basic Cleaning
- `MONGODB_DB_INTERIOR` for Interior Cleaning
- `MONGODB_DB_PREMIUM` for Premium Cleaning

The API still uses one endpoint and selects the database from the submitted service.

Contact messages are stored in `MONGODB_DB_CONTACT` using the `MONGODB_CONTACT_COLLECTION` collection.

- `GET /api/bookings/` lists bookings
- `POST /api/bookings/` creates a booking
- `/admin/` provides the Django admin
