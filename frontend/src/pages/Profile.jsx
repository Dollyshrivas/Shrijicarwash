import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../lib/api";

function Profile() {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("carwash_user") || "null")
  );
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("carwash_token");
    if (!token) {
      navigate("/auth");
      return;
    }

    apiRequest("/api/auth/profile/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        setUser(data.user);
        setBookings(data.bookings || []);
        setMessages(data.messages || []);
        localStorage.setItem("carwash_user", JSON.stringify(data.user));
      })
      .catch((requestError) => {
        localStorage.removeItem("carwash_token");
        localStorage.removeItem("carwash_user");
        setError(requestError.message);
        navigate("/auth");
      });
  }, [navigate]);

  // Keep the rest of the existing Profile component unchanged.
}
