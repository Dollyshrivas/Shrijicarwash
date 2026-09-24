import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const servicePriceMap = {
  "Basic Cleaning": "₹399",
  "Interior Cleaning": "₹899",
  "Premium Cleaning": "₹1499",
  "Pressure Wash": "₹200",
  "Bucket Wash": "₹199",
  "Deep Cleaning": "₹1299",
  "Interior Only": "₹599",
  "Exterior Only Wash": "₹399",
};

function Bookingpage() {
  const [searchParams] = useSearchParams();
  const loggedUser = JSON.parse(localStorage.getItem("carwash_user") || "null");
  const requestedService = searchParams.get("service");
  const availableServices = Object.keys(servicePriceMap);
  const shifts = {
    Morning: ["08:00", "09:00", "10:00", "11:00"],
    Afternoon: ["12:00", "13:00", "14:00", "15:00"],
    Evening: ["16:00", "17:00", "18:00", "19:00"],
  };
  const [selectedShift, setSelectedShift] = useState("Morning");
  const [selectedTime, setSelectedTime] = useState(shifts.Morning[0]);
  const [selectedService, setSelectedService] = useState(
    availableServices.includes(requestedService) ? requestedService : availableServices[0]
  );
  const selectedPrice = servicePriceMap[selectedService] || "₹0";
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      price: servicePriceMap[selectedService] || selectedPrice,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"}/api/bookings/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(localStorage.getItem("carwash_token")
              ? { Authorization: `Bearer ${localStorage.getItem("carwash_token")}` }
              : {}),
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create booking.");
      }

      form.reset();
      setStatus(data.message);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#420000] via-[#160000] to-black text-white min-h-screen px-4 py-10 flex justify-center items-center">
      <div className="bg-gradient-to-br from-[#241010] to-[#090909] border border-red-900/70 p-6 sm:p-8 rounded-2xl w-full max-w-[400px] shadow-2xl shadow-red-950/40">
        
          <h2 className="text-white text-3xl font-bold mb-2 text-center">
          Book Cleaning
        </h2>

        <p className="text-red-200/70 text-center mb-6">Choose a service and reserve your preferred date.</p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            required
            defaultValue={loggedUser?.name || ""}
            placeholder="Your Name"
            className="p-3 rounded-lg bg-black/60 text-white border border-red-900 outline-none placeholder:text-gray-400 focus:border-red-400"
          />

          <input
            type="email"
            name="email"
            required
            defaultValue={loggedUser?.email || ""}
            placeholder="Email"
            className="p-3 rounded-lg bg-black/60 text-white border border-red-900 outline-none placeholder:text-gray-400 focus:border-red-400"
          />

          <input
            type="date"
            name="date"
            required
            className="p-3 rounded-lg bg-black/60 text-white border border-red-900 outline-none focus:border-red-400"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="shift"
              value={selectedShift}
              onChange={(event) => {
                const nextShift = event.target.value;
                setSelectedShift(nextShift);
                setSelectedTime(shifts[nextShift][0]);
              }}
              required
              className="p-3 rounded-lg bg-black/60 border text-white border-red-900 outline-none focus:border-red-400"
            >
              {Object.keys(shifts).map((shift) => <option key={shift}>{shift}</option>)}
            </select>

            <select
              name="time"
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
              required
              className="p-3 rounded-lg bg-black/60 border text-white border-red-900 outline-none focus:border-red-400"
            >
              {shifts[selectedShift].map((time) => <option key={time} value={time}>{time}</option>)}
            </select>
          </div>

          <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required className="p-3 rounded-lg bg-black/60 border text-white border-red-900 outline-none focus:border-red-400">
            {availableServices.map((service) => <option key={service}>{service}</option>)}
          </select>

          <div className="rounded-lg border border-red-900 bg-black/40 p-3">
            <p className="text-xs uppercase tracking-[2px] text-red-200/80">Selected price</p>
            <p className="text-2xl font-extrabold text-white">{selectedPrice}</p>
          </div>

          <button disabled={isSubmitting} className="bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-600 hover:scale-105 transition disabled:opacity-60">
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </button>

          {status && <p className="text-center text-sm text-red-300">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default Bookingpage;