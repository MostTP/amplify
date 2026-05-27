"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/content";
import { IconRec, Waveform } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* BRAND */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-sm">
            <span className="font-bold text-white">M</span>
            <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
              <IconRec className="h-2.5 w-2.5 text-red-500 animate-pulse" />
            </span>
          </div>

          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
              {site.name}
            </p>
            <p className="text-sm font-semibold text-slate-900">
              {site.eventTitle} {site.year}
            </p>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  rounded-full px-4 py-2 text-sm font-medium transition
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
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
        <div className="hidden lg:flex items-center gap-4">
          <Waveform />
          <Link
            href="/register"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border border-slate-200 bg-white p-2"
        >
          <svg className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-blue-600 px-4 py-3 text-center font-semibold text-white"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}