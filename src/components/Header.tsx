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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-royal-500 to-royal-600 shadow-glow">
            <span className="font-display text-lg font-bold text-white">M</span>
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <IconRec className="h-2.5 w-2.5 animate-pulse" />
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-royal-300">
              {site.name}
            </p>
            <p className="font-display text-sm font-semibold text-white">
              {site.eventTitle} {site.year}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-royal-500/20 text-royal-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Waveform />
          <Link
            href="/register"
            className="rounded-full bg-gradient-to-r from-royal-500 to-royal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-200 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-royal-500 px-4 py-3 text-center font-semibold text-white"
          >
            Register
          </Link>
        </nav>
      )}
    </header>
  );
}
