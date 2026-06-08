"use client";

import { useState, useRef } from "react";
import { register as registerContent } from "@/data/content";
import { RegisterData } from "./formtypes";
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
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofError, setProofError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const MAX_PROOF_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_PROOF_TYPES = ["image/jpeg", "image/png", "application/pdf"];

  const [formData, setFormData] = useState<RegisterData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    church: "",
    notes: "",
    attendanceType: "outsider",
    certificateRequired: false,
    isPaid: true, // ✅ NEW
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "attendanceType" && value === "outsider"
        ? { isPaid: true }
        : {}),
    }));
  }

  // async function handlePayment(reference: string) {
  //   const res = await fetch("/api/verify-payment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       reference,
  //       formData,
  //     }),
  //   });

  //   const data = await res.json();

  //   if (data.success) {
  //     setSubmitted(true);
  //   } else {
  //     alert(data.message || "Registration failed");
  //   }
  // }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.isPaid) {
      const res = await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.message || "Registration failed");
      }

      return;
    }

    // 💳 PAID FLOW — offline-proof upload flow
    const proceed = window.confirm(
      "Online payments are temporarily suspended. If you have already paid, upload proof of payment now. Press OK to continue."
    );

    if (!proceed) return;

    if (!proofFile) {
      // prompt user to select a file
      fileInputRef.current?.click();
      alert("Please select a proof of payment file, then click Submit Proof.");
      return;
    }

    await uploadProof();
  }

  async function readFileAsDataUrl(file: File) {
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function uploadProof() {
    if (!proofFile) return;

    try {
      setUploading(true);

      const dataUrl = await readFileAsDataUrl(proofFile);

      const res = await fetch("/api/offline-proof", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          proofBase64: dataUrl,
          proofFilename: proofFile.name,
          amountPaid: total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setProofError(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setProofError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  const baseFee =
    formData.attendanceType === "inhouse" ? 5000 : 3000;

  const certificateFee = formData.certificateRequired ? 1000 : 0;

  const total = baseFee + certificateFee;

  const isGuestParticipant = formData.attendanceType === "outsider";

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
            M.E.P CONFERENCE 2026
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
              <input
                type="radio"
                name="attendanceType"
                value="inhouse"
                checked={formData.attendanceType === "inhouse"}
                onChange={handleChange}
                className="h-5 w-5 accent-blue-500"
              />
              <div>
                <p className="font-semibold text-slate-900">In-House Participant</p>
                <p className="text-sm text-slate-500">₦5,000 registration fee</p>
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 transition">
              <input
                type="radio"
                name="attendanceType"
                value="outsider"
                checked={formData.attendanceType === "outsider"}
                onChange={handleChange}
                className="h-5 w-5 accent-blue-500"
              />
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

        {/* OPTIONS */}
        <div className="space-y-4">

          {/* PAYMENT TOGGLE */}
          <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
            <div>
              <p className="font-semibold text-slate-900">Make Payment Now</p>
              {isGuestParticipant ? (
                <p className="text-xs text-slate-500">
                  Guest participants must complete payment now.
                </p>
              ) : null}
            </div>
            <input
              type="checkbox"
              checked={formData.isPaid}
              disabled={isGuestParticipant}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  isPaid: e.target.checked,
                }))
              }
              className="h-5 w-5 accent-blue-600"
            />
          </label>

          {/* CERTIFICATE OPTION */}
          <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
            <input
              type="checkbox"
              checked={formData.certificateRequired}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  certificateRequired: e.target.checked,
                }))
              }
              className="mt-1 h-5 w-5 accent-blue-600"
            />

            <div>
              <p className="font-semibold text-slate-900">
                Add Participation Certificate (+₦1,000)
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Optional certificate for participants
              </p>
            </div>
          </label>
        </div>

        {/* PAYMENT SUMMARY */}
        {formData.isPaid && (
          <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  AMPLIFY.26 Package
                </h3>

                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  <p>Registration Fee: ₦{baseFee.toLocaleString()}</p>
                  {formData.certificateRequired && (
                    <p>Certificate Fee: ₦1,000</p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-white px-5 py-3 shadow-sm">
                <p className="text-sm text-slate-500">Total</p>
                <p className="text-2xl font-black text-slate-900">
                  ₦{total.toLocaleString()}
                </p>
              </div>
            </div>
            {/* OFFLINE PAYMENT DETAILS */}
            <div className="mt-4 rounded-xl border border-dashed border-slate-200 bg-white/80 p-4">
              <p className="text-sm font-semibold text-slate-900">Offline Payment (Bank / OPAY)</p>
              <p className="mt-2 text-sm text-slate-600">Account: <span className="font-mono">8056366057</span> — OPAY</p>
              <p className="text-sm text-slate-600">Account name: OLASUNKANMI STEPHEN</p>
              <p className="mt-2 text-sm text-slate-500">Please send a proof of payment to 08056366057</p>

              <div className="mt-3 flex items-center gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0] ?? null;

                    if (!f) {
                      setProofFile(null);
                      setProofError(null);
                      return;
                    }

                    if (!ALLOWED_PROOF_TYPES.includes(f.type)) {
                      setProofFile(null);
                      setProofError("Only JPEG, PNG, or PDF proof files are allowed.");
                      return;
                    }

                    if (f.size > MAX_PROOF_SIZE) {
                      setProofFile(null);
                      setProofError("File too large. Please upload a proof under 5MB.");
                      return;
                    }

                    setProofError(null);
                    setProofFile(f);
                  }}
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-700 border border-blue-100"
                >
                  {proofFile ? "Change proof" : "Select proof"}
                </button>

                <button
                  type="button"
                  disabled={!proofFile || uploading}
                  onClick={uploadProof}
                  className="rounded-md bg-green-600 px-3 py-2 text-sm text-white disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Submit Proof"}
                </button>

                {proofFile && (
                  <span className="text-sm text-slate-500">{proofFile.name}</span>
                )}
              </div>

              {proofError ? (
                <p className="mt-2 text-sm text-red-600">{proofError}</p>
              ) : (
                <p className="mt-2 text-sm text-slate-500">Accepted formats: JPEG, PNG, PDF. Max size: 5MB.</p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-[0_15px_50px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]"
        >
          {formData.isPaid
            ? `Pay & Register • ₦${total.toLocaleString()}`
            : "Register And Pay Later / I paid already "}
        </button>
      </form>
    </div>
  );
}