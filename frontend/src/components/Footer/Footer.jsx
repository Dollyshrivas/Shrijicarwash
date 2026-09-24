import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shrijicarwashlogo.png";

function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 sm:px-8 lg:px-12 border-t border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="ShrijiCarWash" className="h-12 w-12 rounded-full border-2 border-yellow-300 object-cover" />
              <h1 className="text-2xl font-bold tracking-widest">
                Shriji<span className="text-yellow-400">CarWash</span>
              </h1>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Your car deserves a best shine ✨ Professional car wash and detailing premium car pressure wash as bucket wash at your door step ✌🏻

            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="/#home" className="hover:text-yellow-400 transition-colors">Home</a>
              <a href="/#services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="/#about" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="mailto:shrijicarwash@gmail.com" className="flex items-start gap-2 hover:text-yellow-400 transition-colors">
                <span>✉</span>
                <span>shrijicarwash@gmail.com</span>
              </a>
              <a href="tel:+919911514503" className="flex items-start gap-2 hover:text-yellow-400 transition-colors">
                <span>📞</span>
                <span>+91 9911514503</span>
              </a>
              <p className="flex items-start gap-2 text-gray-300">
                <span>📍</span>
                <span>Ghaziabad, New Delhi</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Monday - Sunday</p>
              <p>8:00 AM - 7:00 PM</p>
              <div className="pt-3 flex gap-3 text-lg">
                <a
                  href="https://instagram.com/shrijicarwash"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@Shrijicarwash"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M21.58 7.2a2.9 2.9 0 0 0-2.05-2.05C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.53.45A2.9 2.9 0 0 0 2.42 7.2C2 9.05 2 12 2 12s0 2.95.42 4.8a2.9 2.9 0 0 0 2.05 2.05C6.3 19.3 12 19.3 12 19.3s5.7 0 7.53-.45a2.9 2.9 0 0 0 2.05-2.05C22 14.95 22 12 22 12s0-2.95-.42-4.8zM10 15.5v-7l6 3.5-6 3.5z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61566228466333" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-white transition-colors hover:border-yellow-400 hover:text-yellow-400" aria-label="Facebook" > <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"> <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.33-.13-2.54-.13-2.52 0-4.25 1.54-4.25 4.37V10H7.2v3h2.76v8h3.54z" /> </svg> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 ShrijiCarWash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;