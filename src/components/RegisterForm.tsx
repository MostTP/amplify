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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  }

  async function handlePayment(reference: string) {
    const res = await fetch("/api/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reference }),
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

  const total =
    5000 + (formData.wantsCertificate ? 1000 : 0);

  const inputStyles = `
    w-full rounded-2xl
    border border-slate-200
    bg-white/80
    px-5 py-4
    text-slate-900
    placeholder:text-slate-400
    shadow-sm
    backdrop-blur-xl
    outline-none
    transition-all duration-300
    focus:border-blue-400
    focus:ring-4
    focus:ring-blue-100
    hover:border-slate-300
  `;

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-[36px] border border-emerald-200 bg-white p-12 text-center shadow-[0_20px_80px_rgba(16,185,129,0.12)]">
        
        {/* glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />

        <div className="relative">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-4xl text-white shadow-xl">
            ✓
          </div>

          <h2 className="mt-8 text-4xl font-black text-slate-900">
            Registration Complete
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
            {registerContent.successMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)] md:p-10">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0">
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        {/* glows */}
        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative space-y-10"
      >
        {/* HEADER */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Media Week 2026
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
            Register For The Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Join creatives, media professionals, and believers
            for an immersive training experience.
          </p>
        </div>

        {/* PERSONAL INFO */}
        <div className="space-y-5">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Personal Information
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="firstName"
                placeholder="First Name"
                className={inputStyles}
                onChange={handleChange}
                required
              />

              <input
                name="lastName"
                placeholder="Last Name"
                className={inputStyles}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className={inputStyles}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className={inputStyles}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* DEPARTMENT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Training Details
            </p>

            <div className="space-y-5">
              <select
                name="department"
                className={inputStyles}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Department
                </option>

                {registerContent.departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <input
                name="church"
                placeholder="Church Name (Optional)"
                className={inputStyles}
                onChange={handleChange}
              />

              <textarea
                name="notes"
                placeholder="Additional Notes..."
                className={`${inputStyles} min-h-[140px] resize-none`}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* PAYMENT CARD */}
        <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-5">
            
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Registration Package
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Training access includes all sessions and
                workshop materials.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">
                Total
              </p>

              <p className="text-2xl font-black text-slate-900">
                ₦{total.toLocaleString()}
              </p>
            </div>
          </div>

          {/* CERTIFICATE */}
          <label className="mt-6 flex cursor-pointer items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300">
            <input
              type="checkbox"
              name="wantsCertificate"
              checked={formData.wantsCertificate}
              onChange={handleChange}
              className="mt-1 h-5 w-5 accent-blue-500"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Add Certificate
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Receive an official certificate after training completion.
              </p>
            </div>
          </label>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-fuchsia-500
            px-8 py-5
            text-lg font-semibold text-white
            shadow-[0_15px_50px_rgba(59,130,246,0.35)]
            transition-all duration-500
            hover:scale-[1.02]
            hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)]
          "
        >
          Pay ₦{total.toLocaleString()} & Register
        </button>
      </form>
    </div>
  );
}