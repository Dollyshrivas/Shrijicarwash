import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function AuthPage() {
  const [mode, setMode] = useState("login");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${API_URL}/api/auth/${mode}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Authentication failed.");

      localStorage.setItem("carwash_token", data.token);
      localStorage.setItem("carwash_user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("auth-changed"));
      navigate("/profile");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex gap-2 mb-8">
          <button type="button" onClick={() => { setMode("login"); setStatus(""); }} className={`flex-1 py-3 rounded-lg font-bold ${mode === "login" ? "bg-[#d00000] text-white" : "bg-gray-100 text-gray-700"}`}>Login</button>
          <button type="button" onClick={() => { setMode("signup"); setStatus(""); }} className={`flex-1 py-3 rounded-lg font-bold ${mode === "signup" ? "bg-[#d00000] text-white" : "bg-gray-100 text-gray-700"}`}>Sign Up</button>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
        <p className="text-gray-500 mb-6">{mode === "login" ? "Login to manage your bookings." : "Create an account to view your profile."}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "signup" && <input name="name" required placeholder="Your name" className="p-3 rounded-lg border border-gray-300 text-gray-900 outline-none focus:border-[#d00000]" />}
          <input name="email" type="email" required placeholder="Email address" className="p-3 rounded-lg border border-gray-300 text-gray-900 outline-none focus:border-[#d00000]" />
          <input name="password" type="password" required minLength={8} placeholder="Password (8+ characters)" className="p-3 rounded-lg border border-gray-300 text-gray-900 outline-none focus:border-[#d00000]" />
          <button disabled={isSubmitting} className="py-3 rounded-lg bg-black text-white font-bold hover:bg-[#d00000] transition disabled:opacity-60">{isSubmitting ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}</button>
          {status && <p className="text-center text-sm text-red-700">{status}</p>}
        </form>

        <p className="text-center text-gray-600 mt-6">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setStatus(""); }}
            className="font-bold text-[#d00000] hover:underline"
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>

        {mode === "login" && status === "Incorrect email or password." && (
          <button
            type="button"
            onClick={() => { setMode("signup"); setStatus(""); }}
            className="block mx-auto mt-3 text-sm text-gray-500 hover:text-[#d00000]"
          >
            New here? Create an account
          </button>
        )}
        <Link to="/" className="block text-center text-gray-500 hover:text-[#d00000] mt-6">Back to home</Link>
      </div>
    </main>
  );
}

export default AuthPage;
