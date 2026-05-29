"use client";

import { useState } from "react";
import { register as registerContent } from "@/data/content";
import { RegisterData } from "./formtypes";
import { payWithPaystack } from "./paystack";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

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
    attendanceType: "outsider",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  const baseFee = formData.attendanceType === "inhouse" ? 5000 : 3000;
  const certificateFee = 1000;
  const total = baseFee + certificateFee;

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
      <div className="relative overflow-hidden rounded-[36px] border border-emerald-200 bg-white p-6 sm:p-10 md:p-12 text-center shadow-[0_20px_80px_rgba(16,185,129,0.12)]">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />

        <div className="relative">
          <div className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-3xl sm:text-4xl text-white shadow-xl">
            ✓
          </div>

          <h2 className="mt-8 text-3xl sm:text-4xl font-black text-slate-900">
            Registration Complete
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-slate-600">
            {registerContent.successMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] sm:border sm:border-slate-200 sm:bg-white sm:shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-0 sm:p-6 md:p-8 lg:p-10">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute hidden sm:block inset-0">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-10">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Media Week 2026
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Register For The Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
            Join creatives, media professionals, and believers for an immersive training experience.
          </p>
        </div>

        {/* PERSONAL INFO */}
        <div className="space-y-6">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Personal Information
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <input name="firstName" placeholder="First Name" className={inputStyles} onChange={handleChange} required />
            <input name="lastName" placeholder="Last Name" className={inputStyles} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email Address" className={inputStyles} onChange={handleChange} required />
            <input name="phone" placeholder="Phone Number" className={inputStyles} onChange={handleChange} required />
          </div>
        </div>

        {/* PARTICIPATION */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Participation Type
          </p>

          <div className="grid gap-4 xl:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 transition">
              <input type="radio" name="attendanceType" value="inhouse" checked={formData.attendanceType === "inhouse"} onChange={handleChange} className="h-5 w-5 accent-blue-500" />
              <div>
                <p className="font-semibold text-slate-900">In-House Participant</p>
                <p className="text-sm text-slate-500">₦5,000 registration fee</p>
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 transition">
              <input type="radio" name="attendanceType" value="outsider" checked={formData.attendanceType === "outsider"} onChange={handleChange} className="h-5 w-5 accent-blue-500" />
              <div>
                <p className="font-semibold text-slate-900">Guest Participant</p>
                <p className="text-sm text-slate-500">₦3,000 registration fee</p>
              </div>
            </label>
          </div>
        </div>

        {/* TRAINING DETAILS */}
        <div className="space-y-5">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Training Details
          </p>

          <Select
            value={formData.department}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, department: value }))
            }
          >
            <SelectTrigger className="w-full rounded-2xl border border-slate-200 bg-white/90 px-5 py-6 text-slate-900 shadow-sm backdrop-blur-xl transition hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>

            <SelectContent className="rounded-2xl border-slate-200 bg-white/95 backdrop-blur-xl">
              <SelectGroup>
                {registerContent.departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <input name="church" placeholder="Church Name (Optional)" className={inputStyles} onChange={handleChange} />

          <textarea name="notes" placeholder="Share expectations or goals for AMPLIFY.26" className={`${inputStyles} min-h-[140px]`} onChange={handleChange} />
        </div>

        {/* CERTIFICATE INFO (MANDATORY) */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="flex p-3 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              ₦
            </div>

            <div>
              <p className="font-semibold text-slate-900">
                Certificate Fee Included
              </p>
              <p className="mt-1 text-sm text-slate-600">
                ₦1,000 compulsory certificate fee covers official documentation, verification, and issuance of your AMPLIFY.26 participation certificate.
              </p>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                AMPLIFY.26 Package
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Includes training access, workshop sessions, and official certificate issuance.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">Total</p>
              <p className="text-2xl font-black text-slate-900">
                ₦{total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* SUBMIT */}
        <button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-[0_15px_50px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]">
          Secure My Spot • ₦{total.toLocaleString()}
        </button>
      </form>
    </div>
  );
}