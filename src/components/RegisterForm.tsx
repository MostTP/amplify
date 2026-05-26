"use client";

import { useState } from "react";
import { register as registerContent } from "@/data/content";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-12 text-center backdrop-blur-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl text-white shadow-[0_0_40px_rgba(34,211,238,0.45)]">
          ✓
        </div>

        <p className="mt-8 font-display text-3xl font-bold text-white">
          You're on the list!
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          {registerContent.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* HEADER */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Media Week 2026
        </p>

        <h2 className="mt-4 font-display text-4xl font-black text-white">
          Register Now
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Join creatives, storytellers, editors, photographers,
          designers, and digital ministers for a transformative
          media experience.
        </p>
      </div>

      {/* NAMES */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-slate-300"
          >
            First Name *
          </label>

          <input
            id="firstName"
            name="firstName"
            required
            className={inputStyles}
            placeholder="Stephen"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-slate-300"
          >
            Last Name *
          </label>

          <input
            id="lastName"
            name="lastName"
            required
            className={inputStyles}
            placeholder="Ola"
          />
        </div>
      </div>

      {/* CONTACT */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-300"
          >
            Email Address *
          </label>

          <input
            id="email"
            type="email"
            required
            className={inputStyles}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium text-slate-300"
          >
            Phone Number *
          </label>

          <input
            id="phone"
            type="tel"
            required
            className={inputStyles}
            placeholder="+234 812 345 6789"
          />
        </div>
      </div>

      {/* DEPARTMENT */}
      <div>
        <label
          htmlFor="department"
          className="text-sm font-medium text-slate-300"
        >
          Department / Interest *
        </label>

        <select
          id="department"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled className="bg-[#02040F]">
            Select a department
          </option>

          {registerContent.departments.map((d) => (
            <option
              key={d}
              value={d}
              className="bg-[#02040F]"
            >
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* CHURCH */}
      <div>
        <label
          htmlFor="church"
          className="text-sm font-medium text-slate-300"
        >
          Church / Fellowship
        </label>

        <input
          id="church"
          className={inputStyles}
          placeholder="RCF KWASU"
        />
      </div>

      {/* NOTES */}
      <div>
        <label
          htmlFor="notes"
          className="text-sm font-medium text-slate-300"
        >
          Why do you want to attend?
        </label>

        <textarea
          id="notes"
          rows={5}
          className={`${inputStyles} resize-none`}
          placeholder="Tell us about your passion for media ministry..."
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          group relative inline-flex w-full items-center justify-center gap-3
          overflow-hidden rounded-full
          bg-gradient-to-r from-blue-500 via-cyan-400 to-fuchsia-500
          px-10 py-5
          text-lg font-semibold text-white
          shadow-[0_15px_60px_rgba(59,130,246,0.35)]
          transition-all duration-500
          hover:scale-[1.02]
          hover:shadow-[0_20px_80px_rgba(59,130,246,0.45)]
        "
      >
        <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="absolute inset-0 bg-white/10" />
        </span>

        <span className="relative z-10">
          Submit Registration
        </span>

        <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}