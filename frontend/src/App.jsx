import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Bookingpage from "./pages/Bookingpage";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";

const WHATSAPP_NUMBER = "+919911514503";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to book a car wash service.");
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
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_12px_30px_rgba(37,211,102,0.55)]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.88 11.88 0 0 0 12.1 1.8C6.15 1.8 1.3 6.64 1.3 12.59c0 2.1.55 4.15 1.6 5.97L1.1 22.7l4.27-1.4a10.76 10.76 0 0 0 6.73 2.2h.01c6 0 10.9-4.84 10.9-10.8 0-2.9-1.14-5.63-3.2-7.62zm-8.42 16.57h-.01c-1.72 0-3.42-.46-4.9-1.33l-.35-.2-2.54.84.85-2.48-.23-.37A8.86 8.86 0 0 1 3.3 12.6c0-4.9 3.98-8.87 8.88-8.87 2.37 0 4.6 0.92 6.27 2.6a8.82 8.82 0 0 1 2.6 6.27c0 4.9-3.97 8.88-8.86 8.88zm4.88-6.66c-.27-.13-1.58-.78-1.82-.87-.24-.08-.42-.13-.6.13-.18.25-.7.87-.86 1.04-.16.18-.32.2-.6.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.35-1.59-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.65 1.12 2.83c.13.18 1.93 2.95 4.68 4.13.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.58-.64 1.8-1.27.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default App;