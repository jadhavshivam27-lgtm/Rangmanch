import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--charcoal-950)",
        borderColor: "var(--border-subtle)",
      }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-500), var(--gold-400))",
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--charcoal-900)" }}
                >
                  R
                </span>
              </div>
              <div>
                <div
                  className="font-display font-bold text-xl"
                  style={{ color: "var(--ivory)" }}
                >
                  Rangmanch
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--gold-400)", letterSpacing: "0.04em" }}
                >
                  Where Talent Meets Opportunity
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              India&apos;s trusted AI-assisted casting and talent discovery
              platform. Connecting aspiring performers with authentic
              opportunities across the entertainment industry.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  label: "X (Twitter)",
                  href: "#",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  label: "YouTube",
                  href: "#",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: "var(--charcoal-700)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Platform
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/casting-calls", label: "Explore Casting Calls" },
                { href: "/discover-talent", label: "Discover Talent" },
                { href: "/industry-connect", label: "Industry Connect" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--gold-400)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For you links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              For You
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/signup?role=talent", label: "Join as Talent" },
                { href: "/signup?role=casting_director", label: "Join as Casting Director" },
                { href: "/signup?role=guardian", label: "Guardian Accounts" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--gold-400)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Legal */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Safety & Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/safety", label: "Safety Centre" },
                { href: "/help", label: "Help Centre" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--gold-400)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-4 pt-4 border-t"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Shield size={12} style={{ color: "var(--emerald-400)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--emerald-400)" }}>
                  Safe Platform
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                All casting professionals go through a verification process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2024 Rangmanch. All rights reserved. Made with ♥ in India.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Registered in India &bull; For entertainment industry use only
          </p>
        </div>
      </div>
    </footer>
  );
}
