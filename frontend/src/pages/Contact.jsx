import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("");
    setIsSubmitting(true);

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"}/api/contact-messages/`,
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
        throw new Error(data.error || "Unable to send message.");
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
    <div className="bg-[#d00000] text-white min-h-screen px-4 sm:px-6 md:px-10 py-16">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Contact Info */}
        <div className="bg-[#f48c06] p-6 sm:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <p className="text-gray-200 mb-4">
            📍 Address: Delhi, India
          </p>

          <p className="text-gray-200 mb-4">
            📞 Phone: +91 9971018840
          </p>

          <p className="text-gray-200 mb-4">
            📧 Email: support@shrivasgroups.com
          </p>

          <p className="text-gray-200">
            We are available 7 days a week for your service.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f4d58d] p-6 sm:p-8 rounded-2xl">
          <h2 className="text-2xl text-black font-bold mb-6">Send Message</h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-3 rounded-lg bg-zinc-700 border border-gray-700 outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-3 rounded-lg bg-zinc-700 border border-gray-700 outline-none"
            />

            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-zinc-700 border border-gray-700 outline-none"
            ></textarea>

            <button disabled={isSubmitting} className="bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center text-sm text-black">{status}</p>}

          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
