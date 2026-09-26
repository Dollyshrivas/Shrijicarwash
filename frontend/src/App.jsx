import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Bookingpage from "./pages/Bookingpage";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";

// WhatsApp expects the country code and number as digits only, with no leading +.
const WHATSAPP_NUMBER = "919911514503";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to book a car wash service."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)] transition duration-200 hover:scale-105 hover:bg-[#20BD5A] hover:shadow-[0_7px_22px_rgba(37,211,102,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <svg viewBox="0 0 32 32" className="h-10 w-10" aria-hidden="true">
          <path
            d="M16 3.5a12.2 12.2 0 0 0-10.5 18.4L4 27.7l6-1.6A12.2 12.2 0 1 0 16 3.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M12.1 10.4c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.2-1.3 2.9 1.3 3.3 1.5 3.5c.2.2 2.6 4.1 6.4 5.6 3.2 1.2 3.8 1 4.5.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5s-2.3-1.1-2.7-1.2c-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-1.9-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7l-1.2-2.9Z"
            fill="currentColor"
          />
        </svg>

        <span className="pointer-events-none absolute right-full mr-3 translate-x-1 whitespace-nowrap rounded-lg bg-[#111] px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
          Chat on WhatsApp
        </span>
      </a>

      <Footer />
    </div>
  );
};

export default App;
