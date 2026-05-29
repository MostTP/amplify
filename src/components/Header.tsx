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

          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">{site.theme}</p>

            <p className="text-xs text-slate-600">
              {site.eventTitle} • {site.year}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur-xl">
            <Waveform />

            <span className="text-xs font-medium text-slate-600">
              Live • Media Week
            </span>
          </div>

          <Link
            href="/register"
            className="
              rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500
              px-6 py-2.5 text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(59,130,246,0.35)]
              transition-all duration-300 hover:scale-[1.03]
            "
          >
            Secure Your Spot
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur-xl md:hidden"
        >
          <svg
            className="h-6 w-6 text-slate-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-2xl md:hidden">
          <nav className="space-y-2 px-4 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
                shadow-lg
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
