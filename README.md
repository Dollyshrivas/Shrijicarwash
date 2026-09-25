# 🚗 Car Wash Management & Booking System

A modern full-stack **Car Wash Management and Online Booking System** built with **React.js** and **Django REST Framework**.

The platform allows customers to explore car wash services, create accounts, book services, manage their bookings, and communicate with the car wash business through an easy-to-use web interface.

---

## 🌐 Live Project

**Frontend:** Add your Vercel/Render URL here

**Backend API:** Add your Django backend URL here

---

## ✨ Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* User profile management
* Secure session handling
* View booking history
* View booking status
* Customer messages/communication

### 🚘 Car Wash Services

* Browse available car wash services
* View service details and pricing
* Select preferred service
* Choose booking date and time
* Submit service bookings

### 📅 Booking Management

* Create new bookings
* View upcoming bookings
* View previous bookings
* Track booking status
* Cancel/manage bookings

### 💬 Communication

* Customer-to-business messaging
* Display customer messages
* Backend API for communication management

### 🔐 Security

* Django authentication
* JWT authentication
* Protected API endpoints
* CORS configuration
* Environment-variable based configuration
* Secure handling of sensitive credentials

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Fetch API**
* **React Router**

### Backend

* **Python**
* **Django**
* **Django REST Framework**
* **JWT Authentication**

### Database

* **MongoDB**

### Deployment

* **Vercel** — Frontend
* **Render** — Backend
* **MongoDB Atlas** — Database

---

## 📂 Project Structure

```text
car-wash/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── manage.py
│   ├── config/
│   ├── api/
│   ├── requirements.txt
│   └── ...
│
└── README.md
```

> The exact folder structure may vary depending on your current project organization.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd car-wash
```

---

# 🔹 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
SECRET_KEY=your_secret_key
DEBUG=True

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_jwt_secret
```

**Never commit your `.env` file to GitHub.**

Make sure it is included in `.gitignore`:

```gitignore
.env
venv/
__pycache__/
*.pyc
```

---

## 🗄️ Database Configuration

The project uses **MongoDB** for storing application data.

You can use:

* Local MongoDB
* MongoDB Atlas

Add your MongoDB connection string to the environment variables.

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/carwash
```

---

## ▶️ Run the Backend

Start the Django development server:

```bash
python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000/
```

---

# 🔹 Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

## 🔗 Configure Backend API

Create a `.env` file in the frontend directory.

Example:

```env
REACT_APP_API_URL=http://127.0.0.1:8000
```

For production, replace the local URL with your deployed backend URL.

Example:

```env
REACT_APP_API_URL=https://your-backend.onrender.com
```

---


## 📡 API Features

The backend provides APIs for:

| Feature      | Method   | Purpose                       |
| ------------ | -------- | ----------------------------- |
| Register     | POST     | Create a new user             |
| Login        | POST     | Authenticate user             |
| Profile      | GET      | Retrieve user information     |
| Book Service | POST     | Create a booking              |
| Bookings     | GET      | Retrieve user's bookings      |
| Messages     | GET/POST | Manage customer communication |

> Exact endpoint names may vary depending on the current backend implementation.

---

## 🚀 Deployment

### Frontend — Vercel

1. Push the frontend code to GitHub.
2. Import the repository into Vercel.
3. Configure the production environment variable:

```env
REACT_APP_API_URL=https://your-backend.onrender.com
```

4. Deploy the project.

### Backend — Render

1. Push the Django backend to GitHub.
2. Create a new Web Service on Render.
3. Configure the Python environment.
4. Add the required environment variables.
5. Configure the production start command.

Example:

```bash
gunicorn config.wsgi:application
```

6. Deploy the backend.

### Database — MongoDB Atlas

The production backend connects to MongoDB Atlas using the configured connection string.

---

## 🧪 Development

For local development:

**Backend**

```bash
python manage.py runserver
```

**Frontend**

```bash
npm start
```

Make sure the frontend API URL points to the running Django server.


---

## 🎯 Project Goals

The main goal of this project is to provide a complete digital platform for car wash businesses where customers can:

* Discover services
* Check pricing
* Schedule car washes
* Manage bookings
* Track their service history
* Communicate with the business

The project also demonstrates practical experience in **full-stack web development, REST APIs, authentication, database integration, and deployment**.

---

## 🔮 Future Improvements

Planned improvements may include:

* Online payment integration
* Admin dashboard
* Real-time booking updates
* Email/SMS notifications
* Google Maps integration
* Service availability management
* Customer reviews and ratings
* Coupon and discount system
* Automated booking reminders
* Analytics dashboard
* Cloud image storage

---

## 👩‍💻 Author

**Dolly **

Full-Stack Developer

### Skills Demonstrated

`React.js` · `JavaScript` · `Python` · `Django` · `REST API` · `MongoDB` · `JWT` · `Git` · `GitHub` · `Deployment`

---



⭐ **If you find this project useful, consider giving the repository a star!**
