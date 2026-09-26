import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

function Profile() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("carwash_user") || "null"));
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

    apiRequest("/api/auth/profile/", { headers: { Authorization: `Bearer ${token}` } })
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

  function logout() {
    localStorage.removeItem("carwash_token");
    localStorage.removeItem("carwash_user");
    window.dispatchEvent(new Event("auth-changed"));
    navigate("/");
  }

  return (
    <main className="min-h-screen bg-[#f4f4f2] px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {user && (
          <>
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#d00000] via-[#a90000] to-[#51030b] text-white p-6 sm:p-10 shadow-xl">
              <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-white/10" />
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white text-[#d00000] flex items-center justify-center text-3xl sm:text-4xl font-extrabold shadow-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="uppercase tracking-[3px] text-xs sm:text-sm text-red-100 font-bold mb-2">Member account</p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold">Welcome, {user.name}</h1>
                    <p className="text-red-100 mt-2">Your car care dashboard</p>
                  </div>
                </div>
                <Link to="/booking" className="inline-flex justify-center bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition">
                  Book a wash
                </Link>
              </div>
            </section>

            <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 mt-6">
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <p className="text-[#d00000] uppercase tracking-widest text-xs font-bold mb-2">Personal details</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Account information</h2>
                  </div>
                  <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-bold">Active</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Full name</p>
                    <p className="text-lg font-bold text-gray-900 break-words">{user.name}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Email address</p>
                    <p className="text-lg font-bold text-gray-900 break-all">{user.email}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-5 sm:col-span-2">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Member since</p>
                    <p className="text-lg font-bold text-gray-900">{new Date(user.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
                  </div>
                </div>
              </section>

              <aside className="bg-black rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col justify-between">
                <div>
                  <p className="text-yellow-400 uppercase tracking-widest text-xs font-bold mb-3">Quick actions</p>
                  <h2 className="text-2xl font-bold mb-3">Keep your car looking its best.</h2>
                  <p className="text-gray-400 leading-relaxed">Choose a professional wash package and let our team handle the details.</p>
                </div>
                <div className="mt-8 space-y-3">
                  <Link to="/booking" className="block text-center bg-[#d00000] px-5 py-3 rounded-xl font-bold hover:bg-red-700 transition">Schedule service</Link>
                  <button type="button" onClick={logout} className="w-full border border-gray-700 px-5 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition">Log out</button>
                </div>
              </aside>
            </div>

            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 mt-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
                <div>
                  <p className="text-[#d00000] uppercase tracking-widest text-xs font-bold mb-2">Service history</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your bookings</h2>
                </div>
                <p className="text-gray-500"><span className="text-2xl font-extrabold text-[#d00000]">{bookings.length}</span> total booking{bookings.length === 1 ? "" : "s"}</p>
              </div>

              {bookings.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                  <p className="text-gray-500 mb-4">You have not booked a service yet.</p>
                  <Link to="/booking" className="inline-block bg-black text-white px-5 py-3 rounded-xl font-bold hover:bg-[#d00000] transition">Make your first booking</Link>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {bookings.map((booking) => (
                    <article key={booking.id} className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h3 className="font-bold text-lg text-gray-900">{booking.service}</h3>
                        <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-bold">Booked</span>
                      </div>
                      <p className="text-gray-600"><span className="font-semibold">Date:</span> {new Date(`${booking.date}T00:00:00`).toLocaleDateString()}</p>
                      <p className="text-gray-600 mt-1"><span className="font-semibold">Shift:</span> {booking.shift || "Not specified"}</p>
                      <p className="text-gray-600 mt-1"><span className="font-semibold">Time:</span> {booking.time || "Not specified"}</p>
                      <p className="text-gray-600 mt-1"><span className="font-semibold">Price:</span> {booking.price || "Not specified"}</p>
                      <p className="text-gray-600 mt-1"><span className="font-semibold">Booked on:</span> {new Date(booking.created_at).toLocaleDateString()}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 mt-6">
              <div className="flex items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-[#d00000] uppercase tracking-widest text-xs font-bold mb-2">Contact activity</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your messages</h2>
                </div>
                <p className="text-gray-500"><span className="text-2xl font-extrabold text-[#d00000]">{messages.length}</span> sent</p>
              </div>

              {messages.length === 0 ? (
                <p className="rounded-2xl bg-gray-50 p-6 text-gray-500">You have not sent a contact message yet.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <article key={message.id} className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
                      <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                      <p className="text-sm text-gray-400 mt-3">Sent {new Date(message.created_at).toLocaleDateString()}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
        {error && <p className="text-red-700 mt-4">{error}</p>}
      </div>
    </main>
  );
}

export default Profile;
