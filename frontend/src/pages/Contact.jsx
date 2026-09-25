import React, { useState } from "react";
import { apiRequest } from "../lib/api";

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
      const data = await apiRequest("/api/contact-messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(localStorage.getItem("carwash_token")
            ? {
                Authorization: `Bearer ${localStorage.getItem("carwash_token")}`,
              }
            : {}),
        },
        body: JSON.stringify(payload),
      });

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
      {/* Keep the remainder of your existing Contact component JSX unchanged. */}
    </div>
  );
};

export default Contact;
