"use client";

import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-fuchsia-500" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-white">
              {site.fullTitle}
            </p>

            <p className="mt-2 text-sm font-medium text-cyan-400">
              {site.date}
            </p>

            <p className="text-sm text-slate-400">
              {site.locationShort}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navigate
            </p>

            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Contact
            </p>

            <div className="mt-4 space-y-2">
              <p className="text-sm text-slate-300">
                {site.contactEmail}
              </p>

              <p className="text-sm text-slate-300">
                {site.contactPhone}
              </p>
            </div>

            <p className="mt-6 border-l-2 border-cyan-500/40 pl-4 text-sm italic leading-relaxed text-slate-400">
              {footer.verse}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-[2rem] border border-slate-800 bg-slate-900/80 px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Ready to amplify your media ministry?
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Join hundreds of media ministers, creatives, and storytellers
              for a transformative experience.
            </p>
          </div>

          <Link
            href="/register"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_50px_rgba(6,182,212,0.35)] sm:mt-0"
          >
            Register Now
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.fullTitle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}