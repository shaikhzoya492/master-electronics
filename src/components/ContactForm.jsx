import { useState } from "react";
import React from "react";

export default function ContactForm() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz1kxn7QF5LNwM6IAHiajvsg-Q4ulxcQ9cNmnHRJ-XZ5C0rhG1rfo9MkB--iXmtv8d-VA/exec";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

 async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
  method: "POST",
  mode: "no-cors", // This is necessary for Google Apps Script URLs
  headers: {
    "Content-Type": "text/plain", // Use text/plain to avoid complex CORS preflights
  },
  body: JSON.stringify({
    ...form,
    page_url: window.location.href,
  }),
});

      // Because 'no-cors' doesn't allow reading the response, 
      // we assume success if no network error occurred.
      setSuccess(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && (
          <p className="text-green-600 text-center mt-2">
            Form submitted successfully ✅
          </p>
        )}
      </form>
    </div>
  );
}
