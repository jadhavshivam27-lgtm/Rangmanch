"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // On homepage, the left-panel and bottom section handle the footer
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0c] text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="font-editorial text-2xl tracking-[0.2em] uppercase text-white font-light block">
              RANGMANCH
            </Link>
            <p className="text-xs font-light leading-relaxed text-neutral-400 max-w-xs">
              National Casting &amp; Audition Network. Connecting extraordinary talent with the stories that matter.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              EST. 2024 • CINTAA FAIR-PLAY
            </p>
          </div>

          {/* Directory Links */}
          <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest">
            <p className="text-white font-semibold mb-2">DIRECTORY</p>
            <p><Link href="/casting-calls" className="hover:text-white transition-colors">CURRENT CASTINGS</Link></p>
            <p><Link href="/talent" className="hover:text-white transition-colors">TALENT ROSTER</Link></p>
            <p><Link href="/verification" className="hover:text-white transition-colors">GOVT KYC &amp; GUILD</Link></p>
          </div>

          {/* Organization */}
          <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest">
            <p className="text-white font-semibold mb-2">PLATFORM</p>
            <p><Link href="/login" className="hover:text-white transition-colors">ARTIST LOGIN</Link></p>
            <p><Link href="/signup?role=casting_director" className="hover:text-white transition-colors">DIRECTOR PORTAL</Link></p>
            <p><Link href="/signup" className="hover:text-white transition-colors">REGISTER</Link></p>
          </div>

          {/* Regions & Standards */}
          <div className="space-y-3 font-mono text-[11px]">
            <p className="text-white font-semibold uppercase tracking-widest mb-2">STANDARDS</p>
            <p className="text-neutral-400 leading-normal">
              DPDP Act 2023 Compliant. Escrow protected payments. Zero registration fees for performers.
            </p>
            <p className="text-neutral-500 uppercase tracking-widest text-[10px] pt-2">
              MUMBAI • DELHI • BENGALURU
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          <div>© 2024 RANGMANCH. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <Link href="/safety" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link href="/help" className="hover:text-white transition-colors">TERMS</Link>
            <Link href="/help" className="hover:text-white transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
