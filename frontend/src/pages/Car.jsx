import React from "react";
import { Link } from "react-router-dom";
import basicWashImage from "../assets/Basic car wash.jpg";
import premiumWashImage from "../assets/Primium wash.jpg";
import interiorWashImage from "../assets/interior wash.jpg";
import PressurecWashImage from "../assets/Pressure Wash.jpg";
import BucketWashImage from "../assets/Bucket Wash.jpg";
import DeepWashImage from "../assets/Deep wash.jpg";
import InteriorOnlyImage from "../assets/Interior Only.jpg";
import ExteriorOnlyImage from "../assets/Exterior only.jpg";

const services = [
  {
    title: "Basic Wash",
    bookingName: "Basic Cleaning",
    price: "₹399",
    desc: "Exterior wash with premium foam cleaning, tire cleaning and professional drying.",
    image: basicWashImage,
    features: ["Foam Wash", "Tire Cleaning", "Exterior Drying"],
  },
  {
    title: "Interior Cleaning",
    bookingName: "Interior Cleaning",
    price: "₹899",
    desc: "Deep interior cleaning with vacuuming, dashboard polishing and sanitization.",
    image: interiorWashImage,
    features: ["Deep Vacuum", "Dashboard Polish", "Interior Sanitization"],
  },
  {
    title: "Premium Wash",
    bookingName: "Premium Cleaning",
    price: "₹1499",
    desc: "Complete car care package with exterior wash, interior cleaning and waxing.",
    icon: "🏆",
    image: premiumWashImage,
    features: ["Full Wash", "Interior Cleaning", "Premium Wax"],
    popular: true,
  },
];

const additionalServices = [
  {
    title: "Pressure Wash",
    bookingName: "Pressure Wash",
    price: "₹200",
    desc: "Powerful exterior rinse for dirt, mud and hard-to-reach areas.",
    image: PressurecWashImage,
  },
  {
    title: "Bucket Wash",
    bookingName: "Bucket Wash",
    price: "₹199",
    desc: "A careful hand wash for a clean finish with less water usage.",
    image: BucketWashImage,
  },
  {
    title: "Deep Cleaning",
    bookingName: "Deep Cleaning",
    price: "₹1299",
    desc: "Detailed cleaning for stubborn dust, stains and built-up grime.",
    image: DeepWashImage,
  },
  {
    title: "Interior Only",
    bookingName: "Interior Only",
    price: "₹499",
    desc: "Focused cabin cleaning with vacuuming, polish and sanitization.",
    image: InteriorOnlyImage,
  },
  {
    title: "Exterior Only Wash",
    bookingName: "Exterior Only Wash",
    price: "₹399",
    desc: "Exterior foam wash, tire cleaning and professional drying.",
    image: ExteriorOnlyImage,
  },
];

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    review:
      "Excellent service! My car looks almost brand new. The team was professional, quick and very careful with the interiors.",
    service: "Premium Wash",
  },
  {
    name: "Priya Verma",
    rating: 5,
    review:
      "Very impressed with the quality of cleaning. The interior was spotless and the staff was extremely polite and professional.",
    service: "Interior Cleaning",
  },
  {
    name: "Amit Gupta",
    rating: 5,
    review:
      "Great experience from booking to delivery. The car was cleaned perfectly and the pricing was reasonable.",
    service: "Basic Wash",
  },
];

const Car = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#d00000] via-[#b00000] to-[#6a040f] text-white px-4 sm:px-6 md:px-12 py-16 sm:py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-sm font-semibold text-red-100 mb-4">
            Professional Car Care
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
            Cleaning Services
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-red-50 leading-relaxed mb-10">
            Give your car the care it deserves. Professional cleaning,
            premium products and expert service — all in one place.
          </p>

          <Link
            to="/booking"
            className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:scale-105 transition duration-300 shadow-xl"
          >
            Book Your Service →
          </Link>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20">

        <div className="text-center mb-14">
          <p className="text-[#d00000] uppercase tracking-widest font-bold text-sm mb-3">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your Car Care Package
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            From a quick exterior wash to complete premium detailing,
            choose the service that fits your car's needs.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 ${
                service.popular
                  ? "ring-2 ring-[#d00000]"
                  : ""
              }`}
            >

              <img
                src={service.image}
                alt={`${service.title} car wash service`}
                className="h-48 w-full rounded-2xl object-cover mb-6"
              />

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d00000] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Price */}
              <div className="mb-7">
                <span className="text-4xl font-extrabold text-[#d00000]">
                  {service.price}
                </span>

                <span className="text-gray-400 ml-2">
                  / service
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">

                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-[#d00000] text-sm font-bold">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}

              </div>

              {/* Button */}
              <Link
                to={`/booking?service=${encodeURIComponent(service.bookingName)}`}
                className={`block w-full py-3.5 rounded-xl text-center font-bold transition ${
                  service.popular
                    ? "bg-[#d00000] text-white hover:bg-[#a80000]"
                    : "bg-black text-white hover:bg-[#d00000]"
                }`}
              >
                Book Now
              </Link>

            </div>

          ))}

        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="bg-[#fff7f5] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#d00000] uppercase tracking-widest font-bold text-sm mb-3">Additional Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Care Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Need something specific? Choose a focused service for your car.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 border border-red-100 shadow-md flex flex-col">
                <img
                  src={service.image}
                  alt={`${service.title} car wash service`}
                  className="h-40 w-full rounded-xl object-cover mb-5"
                />
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-5">{service.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-4">
                  <span className="text-2xl font-extrabold text-[#d00000]">{service.price}</span>
                  <Link to={`/booking?service=${encodeURIComponent(service.title)}`} className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-[#d00000] transition">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= REVIEWS ================= */}
      <section className="bg-[#111111] text-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-red-400 uppercase tracking-widest font-bold text-sm mb-3">
              Customer Reviews
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Thousands of car owners trust us for reliable and professional
              car cleaning services.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {reviews.map((review, index) => (

              <div
                key={index}
                className="bg-[#1c1c1c] border border-gray-800 rounded-2xl p-7 hover:border-red-600 transition duration-300"
              >

                {/* Stars */}
                <div className="flex gap-1 mb-5 text-yellow-400 text-lg">
                  {"★".repeat(review.rating)}
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-relaxed mb-7">
                  "{review.review}"
                </p>


                {/* Customer */}
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-[#d00000] flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h4 className="font-bold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {review.service}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Rating Summary */}
          <div className="text-center mt-14">

            <div className="text-5xl font-extrabold">
              4.9<span className="text-2xl text-gray-500">/5</span>
            </div>

            <div className="text-yellow-400 text-xl mt-2">
              ★★★★★
            </div>

            <p className="text-gray-500 mt-2">
              Based on customer feedback
            </p>

          </div>

        </div>

      </section>


      
    </div>
  );
};

export default Car;
