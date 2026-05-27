"use client";

import { useState } from "react";
import { register as registerContent } from "@/data/content";
import { RegisterData } from "./formtypes";
import { payWithPaystack } from "./paystack";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);



  const [formData, setFormData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    church: "",
    notes: "",
    wantsCertificate: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handlePayment(reference: string) {
    const res = await fetch("/api/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      alert("Payment verification failed");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    payWithPaystack(formData, handlePayment);
  }

  const inputStyles = `
    mt-3 w-full rounded-2xl
    border border-white/10
    bg-white/[0.04]
    px-5 py-4
    text-white
    placeholder:text-slate-500
    backdrop-blur-xl
    outline-none
    transition-all duration-300
    focus:border-cyan-400/40
    focus:bg-white/[0.06]
    focus:ring-4
    focus:ring-cyan-400/10
  `;
  return (
    <>

      {submitted ? (
        <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-12 text-center backdrop-blur-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl text-white shadow-[0_0_40px_rgba(34,211,238,0.45)]">
            ✓
          </div>

          <p className="mt-8 font-display text-3xl font-bold text-white">
            You&apos;re on the list!
          </p>

          <p className="mt-4 text-lg text-slate-300">
            {registerContent.successMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* HEADER */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Media Week 2026
            </p>

            <h2 className="mt-4 text-4xl font-black text-white">
              Register Now
            </h2>
          </div>

          {/* FIRST NAME */}
          <input
            name="firstName"
            placeholder="First Name"
            className={inputStyles}
            onChange={handleChange}
            required
          />

          {/* LAST NAME */}
          <input
            name="lastName"
            placeholder="Last Name"
            className={inputStyles}
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={inputStyles}
            onChange={handleChange}
            required
          />

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Phone"
            className={inputStyles}
            onChange={handleChange}
            required
          />

          {/* DEPARTMENT */}
          <select
            name="department"
            className={inputStyles}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>

            {registerContent.departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <input
  name="church"
  placeholder="Church Name"
  className={inputStyles}
  onChange={handleChange}
/>
<textarea
  name="notes"
  placeholder="Additional Notes (Optional)"
  className={`${inputStyles} min-h-[140px] resize-none`}
  onChange={handleChange}
/>

          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
            <input
              type="checkbox"
              checked={formData.wantsCertificate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  wantsCertificate: e.target.checked,
                })
              }
              className="h-5 w-5 accent-cyan-400"
            />

            <div>
              <p className="font-semibold">
                Add Certificate
              </p>

              <p className="text-sm text-slate-400">
                Optional — ₦1000
              </p>
            </div>
          </label>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 py-5 font-semibold text-white"
          >
            Pay & Register
          </button>
        </form>
      )}
    </>
  );
}