import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/shrijicarwashlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("carwash_token"))
  );

  useEffect(() => {
    const updateAuthState = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("carwash_token")));
    };
    window.addEventListener("auth-changed", updateAuthState);
    return () => window.removeEventListener("auth-changed", updateAuthState);
  }, []);

  return (
      <nav className="sticky top-0 z-50 bg-black text-black px-4 sm:px-6 lg:px-10 py-3 shadow-lg border-b-7 border-black">
      <div className="flex justify-between items-center gap-4">
      <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-white">
        <img src={logo} alt="ShrijiCarWash" className="h-14 w-14 rounded-full border-2 border-yellow-300 object-cover" />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-widest">
          Shriji<span className="text-yellow-500">CarWash</span>
        </h1>
      </Link>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="lg:hidden text-white text-3xl leading-none p-2"
      >
        {isMenuOpen ? "×" : "☰"}
      </button>
      </div>

      <div className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-0 text-white font-bold text-sm sm:text-base uppercase tracking-wider justify-center items-center`}>
        <a href="/#home" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 cursor-pointer">Home</a>
        <a href="/#services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 cursor-pointer">Services</a>
        <a href="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 cursor-pointer">About</a>
        <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 cursor-pointer">Contact</a>
        <Link to={isLoggedIn ? "/profile" : "/auth"} onClick={() => setIsMenuOpen(false)} className="text-yellow-400 hover:text-white">
          {isLoggedIn ? "Profile" : "Login"}
        </Link>
      </div>
    </nav>
    
  )
  
}

export default Navbar
