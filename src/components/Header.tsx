"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* FLOATING GLASS CONTAINER */}
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/75 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
          
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative flex items-center justify-between px-5 py-4 sm:px-6">
            
            {/* BRAND */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-xl transition group-hover:bg-blue-500/25" />

                <Image
                  src="/Tenurenameb.png"
                  width={52}
                  height={52}
                  className="relative h-11 w-auto sm:h-12"
                  alt="RCF KWASU"
                />
              </div>

              <div className="leading-tight">
                <p className="font-display text-sm font-bold text-slate-950">
                  {site.theme}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {site.eventTitle} • {site.year}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-sm md:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative rounded-full px-5 py-2.5 text-sm font-semibold
                      transition-all duration-300
                      ${
                        active
                          ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 text-white shadow-lg"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ACTION */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/register"
                className="
                  relative overflow-hidden rounded-full
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500
                  px-6 py-3 text-sm font-bold text-white
                  shadow-[0_15px_50px_rgba(59,130,246,0.35)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:scale-105
                "
              >
                <span className="relative z-10">Secure Your Spot</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 transition hover:opacity-100" />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                rounded-2xl border border-slate-200
                bg-white/80 p-2.5
                shadow-sm backdrop-blur-xl
                transition hover:bg-white
                md:hidden
              "
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
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-100 bg-white/80 backdrop-blur-2xl md:hidden">
          <nav className="space-y-2 px-4 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    block rounded-2xl px-4 py-3.5 text-sm font-semibold
                    transition-all duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-fuchsia-500 text-white shadow-lg"
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
                px-4 py-3 text-center text-sm font-bold text-white
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