"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/content";
import { Waveform } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
      <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/10 bg-white/60 backdrop-blur-2xl">
      {/* BACKGROUND LAYER */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* soft gradient wash */}
  <div className="absolute -top-24 left-1/2 h-[200px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-fuchsia-500/10 blur-[80px]" />

  {/* diagonal mesh pattern */}
  <div className="absolute inset-0 opacity-[0.04] [background-image:repeating-linear-gradient(135deg,rgba(0,0,0,0.6)_0px,rgba(0,0,0,0.6)_1px,transparent_1px,transparent_12px)]" />

  {/* subtle noise grain */}
  <div className="absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.4%22/%3E%3C/svg%3E')]">
  </div>
</div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image 
            src="/Tenurenameb.png" 
            width={48} 
            height={48}
            className="h-10 w-auto sm:h-12" 
            alt="RCF KWASU" 
          />

          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              {site.theme}
            </p>
            <p className="text-xs text-slate-500">
              {site.eventTitle} • {site.year}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1 shadow-sm">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative rounded-full px-4 py-2 text-sm font-medium transition
                  ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
            <Waveform />
            <span className="text-xs font-medium text-slate-500">
              Live • Media Week
            </span>
          </div>

          <Link
            href="/register"
            className="
              rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500
              px-6 py-2.5 text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(59,130,246,0.35)]
              transition hover:scale-[1.03]
            "
          >
            Secure Your Spot
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
        >
          <svg
            className="h-6 w-6 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block rounded-xl px-4 py-3 text-sm font-medium transition
                    ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="
                mt-3 block rounded-full
                bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500
                px-4 py-3 text-center text-sm font-semibold text-white
              "
            >
              Secure Your Spot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}