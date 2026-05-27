import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <p className="text-xl font-bold text-slate-900">
              {site.fullTitle}
            </p>
            <p className="mt-2 text-sm text-blue-600">{site.date}</p>
            <p className="text-sm text-slate-600">{site.locationShort}</p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navigate
            </p>

            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Contact
            </p>

            <p className="mt-4 text-sm">{site.contactEmail}</p>
            <p className="text-sm text-slate-600">{site.contactPhone}</p>

            <p className="mt-6 text-sm italic text-slate-500">
              {footer.verse}
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Media Ministry · KWASU
          </div>
        </div>

      </div>
    </footer>
  );
}