"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Eye,
  Lock,
  Smartphone,
  Building2,
  Trash2,
  Download,
  Laptop,
  CheckCircle2,
  AlertTriangle,
  LogOut,
  Sparkles,
  Key,
  Globe,
  Radio,
  FileCheck,
  Check,
  X,
  RefreshCw,
} from "lucide-react";
import { useAuthStore } from "@/lib/auth";

export default function AccountSettingsPage() {
  const { user } = useAuthStore();

  const [activeTab, setActiveTab] = useState<
    "privacy" | "twoFactor" | "agency" | "dpdp" | "sessions"
  >("privacy");

  // M006: Privacy State
  const [profileVisibility, setProfileVisibility] = useState<"public" | "agents_only" | "incognito">(
    "public"
  );
  const [hideContactDetails, setHideContactDetails] = useState(true);
  const [allowAIAnalysis, setAllowAIAnalysis] = useState(true);

  // M007: 2FA State
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [twoFactorMethod, setTwoFactorMethod] = useState<"whatsapp" | "sms">("whatsapp");
  const [phoneNumber, setPhoneNumber] = useState("+91 98201 49281");
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const backupCodes = ["RM-9481-22", "RM-8192-44", "RM-3910-88", "RM-7721-05", "RM-4491-33"];

  // M008: Agency Linkage State
  const [agencyStatus, setAgencyStatus] = useState<"represented" | "independent">("represented");
  const [selectedAgency, setSelectedAgency] = useState("Matrix India Entertainment");
  const [agentName, setAgentName] = useState("Rohan Varma");
  const [agentEmail, setAgentEmail] = useState("rohan.v@matrixindia.in");
  const [commissionSplit, setCommissionSplit] = useState(15);
  const [territory, setTerritory] = useState<"India" | "Pan-Asia" | "Worldwide">("India");
  const [isExclusive, setIsExclusive] = useState(true);

  // M009: Data Export & Deletion State
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // M010: Active Sessions State
  const [sessions, setSessions] = useState([
    {
      id: "sess-1",
      device: "Windows 11 PC (Chrome 128)",
      location: "Mumbai, Maharashtra, India",
      ip: "103.21.144.92",
      current: true,
      lastActive: "Active Now",
    },
    {
      id: "sess-2",
      device: "Apple iPhone 15 Pro (Safari iOS)",
      location: "Bengaluru, Karnataka, India",
      ip: "49.207.212.18",
      current: false,
      lastActive: "2 hours ago",
    },
    {
      id: "sess-3",
      device: "Apple MacBook Pro (Firefox)",
      location: "New Delhi, India",
      ip: "182.74.88.104",
      current: false,
      lastActive: "Yesterday at 6:45 PM",
    },
  ]);

  const handleRevokeOtherSessions = () => {
    setSessions((prev) => prev.filter((s) => s.current));
    alert("Successfully revoked all other device sessions!");
  };

  const handleExportData = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => setExportComplete(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--charcoal-900)] text-[var(--ivory)] pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="badge badge-gold">ACCOUNT GOVERNANCE</span>
              <span className="badge badge-purple text-[10px] font-mono">PILLAR 1 COMPLETE</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ivory)]">
              Account Security, Privacy &amp; Agency Hub
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Manage your visibility (M006), 2FA WhatsApp verification (M007), agency linkage (M008),
              DPDP 2023 compliance (M009), and device sessions (M010).
            </p>
          </div>

          {/* Settings Tabs Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/5 text-xs font-semibold">
            {[
              { id: "privacy", label: "M006: Profile Privacy", icon: Eye },
              { id: "twoFactor", label: "M007: WhatsApp 2FA", icon: Smartphone },
              { id: "agency", label: "M008: Agency Linkage", icon: Building2 },
              { id: "dpdp", label: "M009: DPDP Data Privacy", icon: FileCheck },
              { id: "sessions", label: "M010: Active Sessions", icon: Laptop },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-[var(--gold-500)] text-[var(--charcoal-900)] font-bold shadow-lg shadow-[var(--gold-500)]/20"
                      : "text-[var(--text-secondary)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: M006 Profile Privacy Controls */}
          {activeTab === "privacy" && (
            <div
              className="p-6 sm:p-8 rounded-3xl border space-y-6 animate-fadeIn"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(201, 168, 76, 0.2)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    M006: Granular Profile Privacy Controls
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Choose how casting directors and public audiences discover your comp card
                  </p>
                </div>
                <span className="badge badge-gold text-[10px]">VISIBILITY MATRIX</span>
              </div>

              {/* 3 Visibility Modes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    id: "public",
                    title: "Public Directory",
                    sub: "Discoverable by all casting directors, producers, and public audiences.",
                    badge: "Maximum Audition Invites",
                  },
                  {
                    id: "agents_only",
                    title: "Verified Agents Only",
                    sub: "Only KYC-verified casting directors & licensed agencies can view your comp card.",
                    badge: "Industry Protected",
                  },
                  {
                    id: "incognito",
                    title: "Incognito Stealth Mode",
                    sub: "Your profile is completely unlisted. Only visible to projects you actively apply to.",
                    badge: "Private Mode",
                  },
                ].map((mode) => (
                  <div
                    key={mode.id}
                    onClick={() => setProfileVisibility(mode.id as any)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      profileVisibility === mode.id
                        ? "bg-[var(--gold-500)]/15 border-[var(--gold-500)] shadow-lg shadow-[var(--gold-500)]/15"
                        : "bg-black/30 border-white/5 hover:border-white/15"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-sm text-[var(--ivory)]">{mode.title}</span>
                      {profileVisibility === mode.id && (
                        <CheckCircle2 className="w-4 h-4 text-[var(--gold-400)]" />
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                      {mode.sub}
                    </p>
                    <span className="badge badge-gold text-[10px]">{mode.badge}</span>
                  </div>
                ))}
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-4 border-t border-white/5 text-xs">
                <label className="flex items-center justify-between p-4 rounded-2xl bg-black/30 border border-white/5 cursor-pointer">
                  <div>
                    <span className="font-bold text-white block">Mask Direct Contact Information</span>
                    <span className="text-[var(--text-muted)]">
                      Routes all inquiries through Rangmanch encrypted relay (keeps personal phone private).
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hideContactDetails}
                    onChange={(e) => setHideContactDetails(e.target.checked)}
                    className="accent-[var(--gold-500)] w-4 h-4 rounded"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-2xl bg-black/30 border border-white/5 cursor-pointer">
                  <div>
                    <span className="font-bold text-white block">AI Casting Fit Analysis Opt-in</span>
                    <span className="text-[var(--text-muted)]">
                      Permits our neural casting model to surface your profile to directors seeking your archetype.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={allowAIAnalysis}
                    onChange={(e) => setAllowAIAnalysis(e.target.checked)}
                    className="accent-[var(--gold-500)] w-4 h-4 rounded"
                  />
                </label>
              </div>
            </div>
          )}

          {/* TAB 2: M007 WhatsApp / SMS 2FA */}
          {activeTab === "twoFactor" && (
            <div
              className="p-6 sm:p-8 rounded-3xl border space-y-6 animate-fadeIn"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(5, 150, 105, 0.3)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    M007: Two-Factor Authentication (2FA)
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Protect your digital audition tapes and casting contracts with instant OTP security
                  </p>
                </div>
                <span className="badge badge-green text-[10px]">256-BIT ENCRYPTION</span>
              </div>

              {/* 2FA Status Switch */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Two-Factor Authentication is ACTIVE</div>
                    <div className="text-xs text-emerald-200">
                      Dispatched via {twoFactorMethod === "whatsapp" ? "WhatsApp Business API" : "SMS Gateway"}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                  className="px-3.5 py-1.5 rounded-lg border border-white/20 text-xs font-semibold hover:bg-white/10"
                >
                  {is2FAEnabled ? "Deactivate" : "Activate"}
                </button>
              </div>

              {/* Method Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div
                  onClick={() => setTwoFactorMethod("whatsapp")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    twoFactorMethod === "whatsapp"
                      ? "bg-emerald-950/40 border-emerald-500 text-white"
                      : "bg-black/30 border-white/5 text-[var(--text-muted)]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-emerald-400">WhatsApp OTP (Recommended)</span>
                    {twoFactorMethod === "whatsapp" && <Check className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Instant 6-digit cryptographic security code sent to your verified WhatsApp chat.
                  </p>
                </div>

                <div
                  onClick={() => setTwoFactorMethod("sms")}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    twoFactorMethod === "sms"
                      ? "bg-emerald-950/40 border-emerald-500 text-white"
                      : "bg-black/30 border-white/5 text-[var(--text-muted)]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-emerald-400">Standard Cellular SMS</span>
                    {twoFactorMethod === "sms" && <Check className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Traditional carrier SMS OTP delivery across all Indian telecom circles.
                  </p>
                </div>
              </div>

              {/* Backup Recovery Codes */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Offline Emergency Recovery Codes</span>
                    <span className="text-[var(--text-muted)]">
                      Use these one-time codes if you lose access to your mobile phone.
                    </span>
                  </div>
                  <button
                    onClick={() => setShowBackupCodes(!showBackupCodes)}
                    className="text-xs text-[var(--gold-300)] font-semibold hover:underline"
                  >
                    {showBackupCodes ? "Hide Codes" : "View 5 Codes"}
                  </button>
                </div>

                {showBackupCodes && (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-white/5 font-mono text-xs">
                    {backupCodes.map((c, i) => (
                      <div key={i} className="p-2 rounded-lg bg-white/5 text-center text-emerald-400 font-bold">
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: M008 Talent Representation & Agency Linkage */}
          {activeTab === "agency" && (
            <div
              className="p-6 sm:p-8 rounded-3xl border space-y-6 animate-fadeIn"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(139, 92, 246, 0.3)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    M008: Talent Representation &amp; Agency Linkage
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Connect your professional talent agency or manage independent freelance status
                  </p>
                </div>
                <span className="badge badge-purple text-[10px]">AGENCY CRM</span>
              </div>

              {/* Representation Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAgencyStatus("represented")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    agencyStatus === "represented"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "bg-black/30 text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  Represented by Agency
                </button>
                <button
                  onClick={() => setAgencyStatus("independent")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    agencyStatus === "independent"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                      : "bg-black/30 text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  Independent / Self-Managed
                </button>
              </div>

              {agencyStatus === "represented" && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                        Talent Agency / Management House:
                      </label>
                      <select
                        value={selectedAgency}
                        onChange={(e) => setSelectedAgency(e.target.value)}
                        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)] focus:outline-none focus:border-purple-500 cursor-pointer"
                      >
                        <option>Matrix India Entertainment</option>
                        <option>YRF Talent Management (Yash Raj)</option>
                        <option>KWAN / Collective Artists Network</option>
                        <option>Bling! Entertainment Solutions</option>
                        <option>Dharma Cornerstone Agency (DCA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                        Lead Talent Manager / Booking Agent:
                      </label>
                      <input
                        type="text"
                        value={agentName}
                        onChange={(e) => setAgentName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)]"
                      />
                    </div>

                    <div>
                      <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                        Official Agency Inquiries Email:
                      </label>
                      <input
                        type="email"
                        value={agentEmail}
                        onChange={(e) => setAgentEmail(e.target.value)}
                        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-[var(--ivory)]"
                      />
                    </div>

                    <div>
                      <label className="text-[var(--text-muted)] block mb-1 font-semibold">
                        Standard Commission Split (%):
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          value={commissionSplit}
                          onChange={(e) => setCommissionSplit(parseInt(e.target.value))}
                          className="w-24 p-3 rounded-xl bg-black/40 border border-white/10 text-center font-mono font-bold text-[var(--ivory)]"
                        />
                        <span className="text-xs text-[var(--text-muted)]">
                          Actor: {100 - commissionSplit}% • Agency: {commissionSplit}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">Exclusive Representation Contract</span>
                      <span className="text-[var(--text-muted)]">
                        All incoming audition requests are automatically routed to your agency manager.
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isExclusive}
                      onChange={(e) => setIsExclusive(e.target.checked)}
                      className="accent-purple-500 w-4 h-4 rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: M009 DPDP 2023 & GDPR Compliance */}
          {activeTab === "dpdp" && (
            <div
              className="p-6 sm:p-8 rounded-3xl border space-y-6 animate-fadeIn"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(201, 168, 76, 0.2)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    M009: Data Privacy &amp; DPDP 2023 Compliance
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Exercise your statutory rights under the Digital Personal Data Protection Act of India
                  </p>
                </div>
                <span className="badge badge-gold text-[10px]">LEGAL RIGHTS</span>
              </div>

              {/* Data Export Box */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-[var(--gold-400)]" />
                    <span>Download Complete Personal Data Archive (Right to Portability)</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] max-w-lg">
                    Export a portable ZIP containing your high-res comp card headshots, monologue audio clips,
                    audition submission logs, and signed casting contracts.
                  </p>
                </div>

                <button
                  onClick={handleExportData}
                  disabled={isExporting}
                  className="btn-primary text-xs py-2.5 px-5 font-bold shrink-0 flex items-center gap-2"
                >
                  <Download className={`w-4 h-4 ${isExporting ? "animate-bounce" : ""}`} />
                  <span>{isExporting ? "Preparing ZIP..." : exportComplete ? "Archive Exported!" : "Export My Data"}</span>
                </button>
              </div>

              {/* Account Deletion (Right to be Forgotten) */}
              <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-red-400 flex items-center gap-1.5">
                    <Trash2 className="w-4 h-4" />
                    <span>Right to be Forgotten (Account Deletion)</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] max-w-lg">
                    Permanently purge your digital comp card, biometric vectors, and audition tapes from
                    Rangmanch servers with a 30-day statutory grace period.
                  </p>
                </div>

                <button
                  onClick={() => alert("Account deletion request initiated under DPDP Act 2023. A confirmation email has been dispatched.")}
                  className="px-4 py-2.5 rounded-xl bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600 hover:text-white text-xs font-bold transition-all shrink-0"
                >
                  Request Account Purge
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: M010 Session Activity & Multi-Device Management */}
          {activeTab === "sessions" && (
            <div
              className="p-6 sm:p-8 rounded-3xl border space-y-6 animate-fadeIn"
              style={{
                background: "var(--charcoal-800)",
                borderColor: "rgba(201, 168, 76, 0.2)",
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ivory)]">
                    M010: Active Sessions &amp; Device Footprint
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Monitor logged-in hardware, IP geolocation, and revoke suspicious sessions
                  </p>
                </div>
                <button
                  onClick={handleRevokeOtherSessions}
                  className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-400" />
                  <span>Log Out All Other Devices</span>
                </button>
              </div>

              {/* Sessions List */}
              <div className="space-y-3">
                {sessions.map((sess) => (
                  <div
                    key={sess.id}
                    className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--gold-400)]">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-white">{sess.device}</span>
                          {sess.current && (
                            <span className="badge badge-green text-[9px] font-mono">THIS DEVICE</span>
                          )}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] font-mono">
                          {sess.location} • IP: {sess.ip}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[11px] font-mono text-[var(--gold-300)]">
                        {sess.lastActive}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
