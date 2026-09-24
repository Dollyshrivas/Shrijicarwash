import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#d00000] via-[#b00000] to-[#6a040f] text-white px-4 sm:px-6 md:px-12 py-16 sm:py-24">

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-black/10 rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-sm font-semibold text-red-100 mb-5">
            About Our Company
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
            We Care About
            <span className="block text-white">
              Your Car.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-red-50 leading-relaxed">
            At <span className="font-bold text-white">ShrijiVCarWash</span>,
            we combine professional expertise, premium products and attention
            to detail to give every vehicle the care it deserves.
          </p>

        </div>
      </section>


      {/* ================= COMPANY STORY ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <p className="text-[#d00000] uppercase tracking-widest font-bold text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              More Than Just
              <span className="text-[#d00000]"> Car Cleaning.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              ShrijiVCarWash was created with a simple goal — to provide
              professional car cleaning and detailing services that vehicle
              owners can trust.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We understand that your car is more than just a vehicle.
              That's why our team focuses on every detail, from exterior
              cleaning and interior care to finishing and shine.
            </p>

            

          </div>


          {/* Right - Visual Card */}
          <div className="relative">

            <div className="bg-[#111111] rounded-3xl p-8 sm:p-10 md:p-14 text-white shadow-2xl">

              <div className="text-6xl mb-8">
                🚗
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Driven By Quality
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Every service is performed with attention to detail,
                professional techniques and a commitment to customer
                satisfaction.
              </p>

              <div className="h-1 w-20 bg-[#d00000] mt-8 rounded-full" />

            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-5 md:-left-8 bg-[#d00000] text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-extrabold">
                100%
              </p>
              <p className="text-sm text-red-100">
                Care & Attention
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="bg-[#111111] text-white py-16 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-[#d00000]">
              500+
            </p>
            <p className="text-gray-400 mt-2">
              Cars Serviced
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-[#d00000]">
              4.9★
            </p>
            <p className="text-gray-400 mt-2">
              Customer Rating
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-[#d00000]">
              100%
            </p>
            <p className="text-gray-400 mt-2">
              Quality Focus
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-extrabold text-[#d00000]">
              24/7
            </p>
            <p className="text-gray-400 mt-2">
              Booking Available
            </p>
          </div>

        </div>

      </section>


      


      {/* ================= WHY US ================= */}
      <section className="bg-[#f1f1f1] py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-[#d00000] uppercase tracking-widest font-bold text-sm mb-4">
                Why ShrijiVCarWash
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional Service.
                <span className="block text-[#d00000]">
                  Every Single Time.
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We believe your car deserves more than a basic wash.
                Our approach combines careful cleaning, attention to detail
                and a customer-focused experience.
              </p>

            </div>


            <div className="space-y-5">

              <div className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#d00000] text-white flex items-center justify-center text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Professional Cleaning
                  </h3>

                  <p className="text-gray-500">
                    Detailed cleaning for both your vehicle's exterior and
                    interior.
                  </p>
                </div>

              </div>


              <div className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#d00000] text-white flex items-center justify-center text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Experienced Team
                  </h3>

                  <p className="text-gray-500">
                    Skilled professionals focused on delivering consistent
                    results.
                  </p>
                </div>

              </div>


              <div className="bg-white rounded-2xl p-6 flex gap-5 items-start shadow-sm">

                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#d00000] text-white flex items-center justify-center text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Convenient Booking
                  </h3>

                  <p className="text-gray-500">
                    Simple online booking makes it easy to schedule your
                    preferred service.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#d00000] to-[#6a040f] text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-sm font-semibold text-red-100 mb-4">
            Give Your Car The Care It Deserves
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Ready for a Cleaner, Better Looking Car?
          </h2>

          <p className="text-red-100 text-lg mb-9">
            Choose your service and book your appointment today.
          </p>

          <Link
            to="/booking"
            className="inline-block bg-black text-white px-9 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 hover:scale-105 transition duration-300 shadow-xl"
          >
            Book a Service →
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;
