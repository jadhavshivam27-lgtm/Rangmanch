import Link from "next/link";
import {
  Instagram,
  Twitter,
  Youtube,
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
                { icon: <Instagram size={16} />, label: "Instagram", href: "#" },
                { icon: <Twitter size={16} />, label: "Twitter", href: "#" },
                { icon: <Youtube size={16} />, label: "YouTube", href: "#" },
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
