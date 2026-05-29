"use client";
import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white text-slate-700">
      <div className="pointer-events-none absolute inset-0 opacity-70">
      </div>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-fuchsia-500" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <p className="text-xl font-bold text-slate-100">{site.fullTitle}</p>
            <p className="mt-2 text-sm text-blue-200">{site.date}</p>
            <p className="text-sm text-slate-100">{site.locationShort}</p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-50">
              Navigate
            </p>

            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-100 hover:text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-100">
              Contact
            </p>

            <p className="mt-4 text-sm text-slate-100">{site.contactEmail}</p>
            <p className="text-sm text-slate-100">{site.contactPhone}</p>

            <p className="mt-6 text-sm italic text-slate-100">{footer.verse}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-6 text-center shadow-sm sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-semibold text-slate-900">
            Ready to amplify your media ministry?
          </p>
          <Link
            href="/register"
            className="mt-4 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition hover:bg-slate-900 sm:mt-0"
          >
            Register Now
          </Link>
        </div>
      </div>
    </footer>
  );
}
