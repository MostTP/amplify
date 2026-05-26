import Link from "next/link";
import { footer, navLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              {site.fullTitle}
            </p>
            <p className="mt-2 text-sm text-royal-300">{site.date}</p>
            <p className="mt-1 text-sm">{site.locationShort}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-royal-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-royal-400">
              Contact
            </p>
            <p className="mt-4 text-sm">{site.contactEmail}</p>
            <p className="text-sm">{site.contactPhone}</p>
            <p className="mt-6 text-sm italic text-slate-400">{footer.verse}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">{footer.copyright}</p>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-royal-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Media Ministry · KWASU
          </div>
        </div>
      </div>
    </footer>
  );
}
