"use client";

import { useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle,
  Loader2,
  CreditCard,
  Globe,
  Award,
  Building2,
  MapPin,
  FileSignature,
  Lock,
  ShieldCheck,
  Calendar,
  Zap,
} from "lucide-react";
import type {
  PANVerificationRecord,
  PassportOverseasRecord,
  GuildCredentialsRecord,
  EscrowBankRecord,
  LocationPermitRecord,
  AgencyContractRecord,
  BrandSafetyRecord,
  ScreenTestRecord,
  StuntSafetyCertRecord,
} from "@/lib/types";

// ─── Shared Styled Components ───────────────────────────────────────────────

function ModalShell({
  isOpen,
  onClose,
  title,
  module,
  accentColor = "#d4af61",
  icon: Icon,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  module: string;
  accentColor?: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-panel" style={{ maxWidth: "600px" }}>
        {/* Header */}
        <div
          className="modal-header"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: accentColor,
                flexShrink: 0,
              }}
            >
              <Icon size={20} />
            </div>
            <div>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#5a5a68",
                  display: "block",
                }}
              >
                {module}
              </span>
              <h2
                className="font-cinema"
                style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}
              >
                {title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#9a9aa8",
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontSize: "10px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#5a5a68",
          fontWeight: 600,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "10px 14px",
        backgroundColor: "#050508",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        color: "#f5f5f7",
        fontSize: "13px",
        outline: "none",
        fontFamily: "inherit",
        boxSizing: "border-box",
        ...props.style,
      }}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      style={{
        width: "100%",
        padding: "10px 14px",
        backgroundColor: "#050508",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        color: "#f5f5f7",
        fontSize: "13px",
        outline: "none",
        fontFamily: "inherit",
        boxSizing: "border-box",
        ...props.style,
      }}
    />
  );
}

function SuccessScreen({
  title,
  refId,
  items,
  onClose,
  accentColor = "#d4af61",
}: {
  title: string;
  refId: string;
  items: { label: string; value: string }[];
  onClose: () => void;
  accentColor?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
        padding: "8px 0",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: `${accentColor}20`,
          border: `2px solid ${accentColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: accentColor,
        }}
      >
        <CheckCircle size={28} />
      </div>
      <div>
        <h3
          className="font-cinema"
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "6px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            fontFamily: "monospace",
            color: accentColor,
          }}
        >
          REF: {refId}
        </p>
      </div>
      <div
        style={{
          width: "100%",
          background: "#050508",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 16px",
              borderBottom:
                i < items.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              fontSize: "12px",
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "#5a5a68" }}>{item.label}</span>
            <span style={{ color: "#f5f5f7", fontWeight: 600 }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <button onClick={onClose} className="btn-cinema-gold" style={{ width: "100%" }}>
        Done <ArrowRight size={14} />
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M011 — PAN Card Verification for TDS Compliance
// ═══════════════════════════════════════════════════════════════════

export function PANVerificationModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: PANVerificationRecord) => void;
}) {
  const [pan, setPan] = useState("ABCDE1234F");
  const [name, setName] = useState("Priya Sharma");
  const [category, setCategory] = useState("individual");
  const [form15AB, setForm15AB] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<PANVerificationRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: PANVerificationRecord = {
        recordId: `PAN-${Date.now()}`,
        panNumber: pan.toUpperCase(),
        verifiedName: name,
        panStatus: "active",
        tdsCategory: category as "individual",
        tdsRate: form15AB ? 2 : 10,
        form15AB,
        verifiedAt: new Date().toISOString(),
        status: "verified",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 1800);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="PAN Verification — TDS"
      module="MODULE M011"
      accentColor="#f59e0b"
      icon={CreditCard}
    >
      {done && record ? (
        <SuccessScreen
          title="PAN Verified for TDS"
          refId={record.recordId}
          accentColor="#f59e0b"
          items={[
            { label: "PAN", value: record.panNumber },
            { label: "Name", value: record.verifiedName },
            { label: "TDS Rate", value: `${record.tdsRate}%` },
            { label: "Form 15A/B", value: record.form15AB ? "Attached" : "Not Attached" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Link your PAN to enable compliant TDS deduction (Section 194J) for
            all casting fees and compensations above ₹30,000.
          </p>
          <Field label="PAN Number">
            <Input
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              maxLength={10}
              placeholder="ABCDE1234F"
            />
          </Field>
          <Field label="Name as per PAN">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label="Assessee Category">
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="individual">Individual</option>
              <option value="huf">HUF</option>
              <option value="company">Company / LLP</option>
            </Select>
          </Field>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input
              type="checkbox"
              checked={form15AB}
              onChange={(e) => setForm15AB(e.target.checked)}
              style={{ accentColor: "#f59e0b", width: "16px", height: "16px" }}
            />
            Attach Form 15A/B (Lower TDS Deduction Certificate — 2%)
          </label>
          <div
            style={{
              padding: "12px 16px",
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: "10px",
              fontSize: "11px",
              color: "#f59e0b",
              fontFamily: "monospace",
            }}
          >
            ✦ Without Form 15A/B, TDS deducted at 10% (Sec 194J)
          </div>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#fde68a,#f59e0b,#d97706)" }}
            onClick={submit}
            disabled={loading || pan.length !== 10}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <CheckCircle size={15} />}
            {loading ? "Verifying with NSDL…" : "Verify PAN"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M012 — Passport & Overseas Shoot Clearance
// ═══════════════════════════════════════════════════════════════════

export function PassportOverseasModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: PassportOverseasRecord) => void;
}) {
  const [passport, setPassport] = useState("J1234567");
  const [country, setCountry] = useState("United Arab Emirates");
  const [visaType, setVisaType] = useState("work");
  const [startDate, setStartDate] = useState("2025-02-15");
  const [endDate, setEndDate] = useState("2025-03-01");
  const [insurance, setInsurance] = useState("POL-ICICI-20250001");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<PassportOverseasRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: PassportOverseasRecord = {
        recordId: `PASS-${Date.now()}`,
        passportNumber: passport,
        countryOfIssue: "India",
        expiryDate: "2030-08-22",
        visaType: visaType as "work",
        destinationCountry: country,
        shootStartDate: startDate,
        shootEndDate: endDate,
        mhaClearance: true,
        insurancePolicyRef: insurance,
        status: "approved",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 2000);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Passport & Overseas Clearance"
      module="MODULE M012"
      accentColor="#60a5fa"
      icon={Globe}
    >
      {done && record ? (
        <SuccessScreen
          title="Overseas Shoot Approved"
          refId={record.recordId}
          accentColor="#60a5fa"
          items={[
            { label: "Destination", value: record.destinationCountry },
            { label: "Visa Type", value: record.visaType.toUpperCase() },
            { label: "Shoot Period", value: `${record.shootStartDate} → ${record.shootEndDate}` },
            { label: "MHA Clearance", value: "Granted" },
            { label: "Insurance", value: record.insurancePolicyRef },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Required for international location shoots. MHA clearance and travel
            insurance are mandatory for all overseas productions.
          </p>
          <Field label="Passport Number">
            <Input value={passport} onChange={(e) => setPassport(e.target.value.toUpperCase())} />
          </Field>
          <Field label="Destination Country">
            <Input value={country} onChange={(e) => setCountry(e.target.value)} />
          </Field>
          <Field label="Visa Category">
            <Select value={visaType} onChange={(e) => setVisaType(e.target.value)}>
              <option value="work">Work Visa</option>
              <option value="business">Business Visa</option>
              <option value="tourist">Tourist Visa</option>
            </Select>
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Shoot Start Date">
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Field>
            <Field label="Shoot End Date">
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </Field>
          </div>
          <Field label="Travel Insurance Policy Ref">
            <Input value={insurance} onChange={(e) => setInsurance(e.target.value)} />
          </Field>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#bfdbfe,#60a5fa,#3b82f6)", color: "#040406" }}
            onClick={submit}
            disabled={loading}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Globe size={15} />}
            {loading ? "Checking MHA Database…" : "Submit for Clearance"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M013 — CINTAA / Casting Guild Credentials
// ═══════════════════════════════════════════════════════════════════

export function GuildCredentialsModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: GuildCredentialsRecord) => void;
}) {
  const [guild, setGuild] = useState("CINTAA");
  const [memberId, setMemberId] = useState("CINTAA-2024-00821");
  const [tier, setTier] = useState("full");
  const [expiry, setExpiry] = useState("2025-12-31");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<GuildCredentialsRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: GuildCredentialsRecord = {
        recordId: `GUILD-${Date.now()}`,
        guildName: guild as "CINTAA",
        membershipId: memberId,
        membershipExpiry: expiry,
        membershipTier: tier as "full",
        unionClearance: true,
        blacklistCheck: true,
        verifiedAt: new Date().toISOString(),
        status: "verified",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 1800);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Guild & Union Credentials"
      module="MODULE M013"
      accentColor="#a78bfa"
      icon={Award}
    >
      {done && record ? (
        <SuccessScreen
          title="Guild Membership Verified"
          refId={record.recordId}
          accentColor="#a78bfa"
          items={[
            { label: "Guild", value: record.guildName },
            { label: "Member ID", value: record.membershipId },
            { label: "Tier", value: record.membershipTier.toUpperCase() },
            { label: "Expiry", value: record.membershipExpiry },
            { label: "Blacklist Check", value: "Clean ✓" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Verify your CINTAA, FWICE, or AIFEC guild membership. Reduces audit
            risk for productions and grants union fair-pay protections.
          </p>
          <Field label="Guild / Union">
            <Select value={guild} onChange={(e) => setGuild(e.target.value)}>
              <option value="CINTAA">CINTAA — Cine & TV Artists Association</option>
              <option value="FWICE">FWICE — Film Workers Federation</option>
              <option value="AIFEC">AIFEC — All India Film Employees Confederation</option>
              <option value="BCAS">BCAS — Bollywood Casting Association</option>
              <option value="Other">Other Union</option>
            </Select>
          </Field>
          <Field label="Membership ID">
            <Input value={memberId} onChange={(e) => setMemberId(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Membership Tier">
              <Select value={tier} onChange={(e) => setTier(e.target.value)}>
                <option value="associate">Associate</option>
                <option value="full">Full Member</option>
                <option value="life">Life Member</option>
              </Select>
            </Field>
            <Field label="Expiry Date">
              <Input type="date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
            </Field>
          </div>
          <div style={{ padding: "12px 16px", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: "10px", fontSize: "11px", color: "#a78bfa", fontFamily: "monospace" }}>
            ✦ Cross-referenced against industry blacklist registry
          </div>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#ddd6fe,#a78bfa,#7c3aed)", color: "#fff" }}
            onClick={submit}
            disabled={loading || !memberId}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Award size={15} />}
            {loading ? "Verifying Membership…" : "Verify Guild Credentials"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M014 — Bank Account & Escrow Linkage
// ═══════════════════════════════════════════════════════════════════

export function EscrowBankModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: EscrowBankRecord) => void;
}) {
  const [holder, setHolder] = useState("Priya Sharma");
  const [bank, setBank] = useState("HDFC Bank");
  const [account, setAccount] = useState("50200012345678");
  const [ifsc, setIfsc] = useState("HDFC0001234");
  const [provider, setProvider] = useState("Razorpay");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<EscrowBankRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: EscrowBankRecord = {
        recordId: `ESC-${Date.now()}`,
        accountHolderName: holder,
        bankName: bank,
        maskedAccountNumber: "XXXX" + account.slice(-4),
        ifscCode: ifsc.toUpperCase(),
        escrowProvider: provider as "Razorpay",
        escrowAccountRef: `ESC-REF-${Math.random().toString(36).slice(2, 10).toUpperCase()}`,
        pennyDropVerified: true,
        linkedAt: new Date().toISOString(),
        status: "active",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 2200);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Bank & Escrow Linkage"
      module="MODULE M014"
      accentColor="#34d399"
      icon={Building2}
    >
      {done && record ? (
        <SuccessScreen
          title="Escrow Account Linked"
          refId={record.recordId}
          accentColor="#34d399"
          items={[
            { label: "Bank", value: record.bankName },
            { label: "Account", value: record.maskedAccountNumber },
            { label: "IFSC", value: record.ifscCode },
            { label: "Escrow Provider", value: record.escrowProvider },
            { label: "Penny Drop", value: "Verified ✓" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Link a bank account for escrow-protected compensation. All casting
            payments are held in escrow and released post-contract milestones.
          </p>
          <Field label="Account Holder Name">
            <Input value={holder} onChange={(e) => setHolder(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Bank Name">
              <Input value={bank} onChange={(e) => setBank(e.target.value)} />
            </Field>
            <Field label="IFSC Code">
              <Input value={ifsc} onChange={(e) => setIfsc(e.target.value.toUpperCase())} maxLength={11} />
            </Field>
          </div>
          <Field label="Account Number">
            <Input value={account} onChange={(e) => setAccount(e.target.value)} type="password" />
          </Field>
          <Field label="Escrow Provider">
            <Select value={provider} onChange={(e) => setProvider(e.target.value)}>
              <option value="Razorpay">Razorpay Escrow</option>
              <option value="Cashfree">Cashfree Escrow</option>
              <option value="HDFC Escrow">HDFC Escrow Services</option>
              <option value="Custom">Custom / Direct</option>
            </Select>
          </Field>
          <div style={{ padding: "12px 16px", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "10px", fontSize: "11px", color: "#34d399", fontFamily: "monospace" }}>
            ✦ ₹1 penny drop test will be initiated to confirm account ownership
          </div>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#a7f3d0,#34d399,#059669)", color: "#040406" }}
            onClick={submit}
            disabled={loading || !account || !ifsc}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Building2 size={15} />}
            {loading ? "Initiating Penny Drop…" : "Link Escrow Account"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M015 — Studio / Location Shoot Permit
// ═══════════════════════════════════════════════════════════════════

export function LocationPermitModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: LocationPermitRecord) => void;
}) {
  const [locationName, setLocationName] = useState("Mehboob Studio, Bandra");
  const [city, setCity] = useState("Mumbai");
  const [state, setState] = useState("Maharashtra");
  const [permitType, setPermitType] = useState("private");
  const [permitNo, setPermitNo] = useState("MH/FILM/2025/00192");
  const [from, setFrom] = useState("2025-02-01");
  const [to, setTo] = useState("2025-02-28");
  const [issuedBy, setIssuedBy] = useState("Maharashtra Film, Stage & Cultural Development Corporation");
  const [insurance, setInsurance] = useState("LIC-COMM-20250001");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<LocationPermitRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: LocationPermitRecord = {
        recordId: `LOC-${Date.now()}`,
        locationName, city, state,
        permitType: permitType as "private",
        permitNumber: permitNo,
        validFrom: from,
        validTo: to,
        issuedBy,
        liabilityInsuranceRef: insurance,
        status: "approved",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 1800);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Shoot Location Permit"
      module="MODULE M015"
      accentColor="#fb923c"
      icon={MapPin}
    >
      {done && record ? (
        <SuccessScreen
          title="Location Permit Verified"
          refId={record.recordId}
          accentColor="#fb923c"
          items={[
            { label: "Location", value: record.locationName },
            { label: "Permit No.", value: record.permitNumber },
            { label: "Valid", value: `${record.validFrom} → ${record.validTo}` },
            { label: "Issued By", value: record.issuedBy.slice(0, 30) + "…" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Register your shoot location permit for government, heritage, forest, or public spaces.
          </p>
          <Field label="Location / Studio Name">
            <Input value={locationName} onChange={(e) => setLocationName(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="City">
              <Input value={city} onChange={(e) => setCity(e.target.value)} />
            </Field>
            <Field label="State">
              <Input value={state} onChange={(e) => setState(e.target.value)} />
            </Field>
          </div>
          <Field label="Permit Type">
            <Select value={permitType} onChange={(e) => setPermitType(e.target.value)}>
              <option value="private">Private Studio / Property</option>
              <option value="government">Government Location</option>
              <option value="forest">Forest / National Park</option>
              <option value="heritage">Heritage Monument / ASI Site</option>
              <option value="public">Public Road / Space</option>
            </Select>
          </Field>
          <Field label="Permit Number">
            <Input value={permitNo} onChange={(e) => setPermitNo(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Valid From">
              <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
            </Field>
            <Field label="Valid To">
              <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
            </Field>
          </div>
          <Field label="Issued By Authority">
            <Input value={issuedBy} onChange={(e) => setIssuedBy(e.target.value)} />
          </Field>
          <Field label="Liability Insurance Ref">
            <Input value={insurance} onChange={(e) => setInsurance(e.target.value)} />
          </Field>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#fed7aa,#fb923c,#ea580c)", color: "#040406" }}
            onClick={submit}
            disabled={loading}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <MapPin size={15} />}
            {loading ? "Registering Permit…" : "Register Location Permit"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M016 — Talent Agency Contract & Exclusivity
// ═══════════════════════════════════════════════════════════════════

export function AgencyContractModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: AgencyContractRecord) => void;
}) {
  const [agencyName, setAgencyName] = useState("Star Cast Management");
  const [regNo, setRegNo] = useState("MCA-LLP-20240001");
  const [contractType, setContractType] = useState("non_exclusive");
  const [commission, setCommission] = useState("15");
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");
  const [arbitration, setArbitration] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<AgencyContractRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: AgencyContractRecord = {
        recordId: `AGC-${Date.now()}`,
        agencyName,
        agencyRegNumber: regNo,
        contractType: contractType as "non_exclusive",
        commissionRate: Number(commission),
        contractStart: startDate,
        contractEnd: endDate,
        digitalSignatureHash: `sha256-${Math.random().toString(16).slice(2, 34)}`,
        arbitrationClause: arbitration,
        status: "active",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 2000);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Agency Contract & Exclusivity"
      module="MODULE M016"
      accentColor="#f472b6"
      icon={FileSignature}
    >
      {done && record ? (
        <SuccessScreen
          title="Agency Contract Registered"
          refId={record.recordId}
          accentColor="#f472b6"
          items={[
            { label: "Agency", value: record.agencyName },
            { label: "Contract Type", value: record.contractType.replace("_", " ").toUpperCase() },
            { label: "Commission", value: `${record.commissionRate}%` },
            { label: "Period", value: `${record.contractStart} → ${record.contractEnd}` },
            { label: "Arbitration", value: record.arbitrationClause ? "Included" : "Not Included" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Register your talent agency agreement to prevent commission fraud and
            establish legally binding exclusivity terms.
          </p>
          <Field label="Agency Name">
            <Input value={agencyName} onChange={(e) => setAgencyName(e.target.value)} />
          </Field>
          <Field label="Agency Registration No. (MCA/ROC)">
            <Input value={regNo} onChange={(e) => setRegNo(e.target.value)} />
          </Field>
          <Field label="Contract Type">
            <Select value={contractType} onChange={(e) => setContractType(e.target.value)}>
              <option value="exclusive">Exclusive (Single Agency)</option>
              <option value="non_exclusive">Non-Exclusive (Multiple Agencies)</option>
              <option value="project_specific">Project Specific</option>
            </Select>
          </Field>
          <Field label="Commission Rate (%)">
            <Input
              type="number"
              min="0"
              max="40"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Contract Start">
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Field>
            <Field label="Contract End">
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </Field>
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={arbitration} onChange={(e) => setArbitration(e.target.checked)} style={{ accentColor: "#f472b6", width: "16px", height: "16px" }} />
            Include Arbitration Clause (Disputes via ICC India)
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ accentColor: "#f472b6", width: "16px", height: "16px" }} />
            I confirm this contract has been reviewed and both parties consent to digital signing
          </label>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#fbcfe8,#f472b6,#db2777)", color: "#fff" }}
            onClick={submit}
            disabled={loading || !agreed}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <FileSignature size={15} />}
            {loading ? "Registering Contract…" : "Register & Sign Contract"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M018 — Brand Safety Check for Commercial Shoots
// ═══════════════════════════════════════════════════════════════════

export function BrandSafetyModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: BrandSafetyRecord) => void;
}) {
  const [brandName, setBrandName] = useState("Surf Excel");
  const [productCat, setProductCat] = useState("FMCG / Home Care");
  const [conflicts, setConflicts] = useState("Tide, Ariel, Rin");
  const [ndaRequired, setNdaRequired] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<BrandSafetyRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: BrandSafetyRecord = {
        recordId: `BSC-${Date.now()}`,
        brandName,
        productCategory: productCat,
        conflictBrands: conflicts.split(",").map((s) => s.trim()),
        socialMediaAuditScore: 87,
        controversyFlags: [],
        ndaRequired,
        ndaSignedAt: ndaRequired ? new Date().toISOString() : undefined,
        clearanceGrantedAt: new Date().toISOString(),
        status: "cleared",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 2000);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Brand Safety Clearance"
      module="MODULE M018"
      accentColor="#e879f9"
      icon={ShieldCheck}
    >
      {done && record ? (
        <SuccessScreen
          title="Brand Safety Cleared"
          refId={record.recordId}
          accentColor="#e879f9"
          items={[
            { label: "Brand", value: record.brandName },
            { label: "Category", value: record.productCategory },
            { label: "Social Audit Score", value: `${record.socialMediaAuditScore}/100` },
            { label: "Controversy Flags", value: record.controversyFlags.length === 0 ? "None ✓" : record.controversyFlags.join(", ") },
            { label: "NDA", value: record.ndaRequired ? "Signed" : "Not Required" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Commercial shoots require brand safety clearance to prevent conflict-of-interest
            issues and protect both talent and advertiser reputations.
          </p>
          <Field label="Brand / Advertiser Name">
            <Input value={brandName} onChange={(e) => setBrandName(e.target.value)} />
          </Field>
          <Field label="Product Category">
            <Input value={productCat} onChange={(e) => setProductCat(e.target.value)} />
          </Field>
          <Field label="Competing Brands (comma separated)">
            <Input value={conflicts} onChange={(e) => setConflicts(e.target.value)} placeholder="e.g. Brand A, Brand B" />
          </Field>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={ndaRequired} onChange={(e) => setNdaRequired(e.target.checked)} style={{ accentColor: "#e879f9", width: "16px", height: "16px" }} />
            NDA Required (Non-Disclosure on Campaign Details)
          </label>
          <div style={{ padding: "12px 16px", background: "rgba(232,121,249,0.08)", border: "1px solid rgba(232,121,249,0.25)", borderRadius: "10px", fontSize: "11px", color: "#e879f9", fontFamily: "monospace" }}>
            ✦ Social media audit scans last 12 months of public posts
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ accentColor: "#e879f9", width: "16px", height: "16px" }} />
            I confirm I have no ongoing endorsement conflicts with the listed brands
          </label>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#f5d0fe,#e879f9,#a21caf)", color: "#fff" }}
            onClick={submit}
            disabled={loading || !agreed}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <ShieldCheck size={15} />}
            {loading ? "Running Brand Audit…" : "Submit for Brand Clearance"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M019 — Screen Test / Callback Booking
// ═══════════════════════════════════════════════════════════════════

export function ScreenTestModal({
  isOpen,
  onClose,
  onSuccess,
  castingCallId = "cc-1",
  roleId = "role-1",
  roleName = "Lead Actor",
  directorName = "Rajkumar Hirani",
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: ScreenTestRecord) => void;
  castingCallId?: string;
  roleId?: string;
  roleName?: string;
  directorName?: string;
}) {
  const [venue, setVenue] = useState("Film City Studio 4, Goregaon, Mumbai");
  const [date, setDate] = useState("2025-02-20");
  const [time, setTime] = useState("11:00");
  const [duration, setDuration] = useState("45");
  const [travel, setTravel] = useState(true);
  const [travelAmt, setTravelAmt] = useState("1500");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<ScreenTestRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: ScreenTestRecord = {
        recordId: `SCR-${Date.now()}`,
        castingCallId,
        roleId,
        talentId: "current-user",
        scheduledAt: `${date}T${time}:00`,
        duration: Number(duration),
        venue,
        directorName,
        callSheetIssued: true,
        travelReimbursement: travel,
        travelAmount: travel ? Number(travelAmt) : undefined,
        status: "scheduled",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 1600);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Screen Test Booking"
      module="MODULE M019"
      accentColor="#38bdf8"
      icon={Calendar}
    >
      {done && record ? (
        <SuccessScreen
          title="Screen Test Confirmed"
          refId={record.recordId}
          accentColor="#38bdf8"
          items={[
            { label: "Role", value: roleName },
            { label: "Director", value: record.directorName },
            { label: "Venue", value: record.venue.slice(0, 32) + "…" },
            { label: "Date & Time", value: `${date} at ${time}` },
            { label: "Duration", value: `${record.duration} minutes` },
            { label: "Travel", value: record.travelReimbursement ? `₹${record.travelAmount}` : "Not Applicable" },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ padding: "12px 16px", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: "10px" }}>
            <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.15em" }}>Booking for: {roleName}</span>
            <div style={{ fontSize: "12px", color: "#d1d1d8", marginTop: "4px" }}>Director: {directorName}</div>
          </div>
          <Field label="Audition Venue">
            <Input value={venue} onChange={(e) => setVenue(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Date">
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Field>
            <Field label="Time">
              <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </Field>
          </div>
          <Field label="Slot Duration (minutes)">
            <Select value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
            </Select>
          </Field>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={travel} onChange={(e) => setTravel(e.target.checked)} style={{ accentColor: "#38bdf8", width: "16px", height: "16px" }} />
            Production to reimburse travel expenses
          </label>
          {travel && (
            <Field label="Travel Reimbursement Amount (₹)">
              <Input type="number" value={travelAmt} onChange={(e) => setTravelAmt(e.target.value)} />
            </Field>
          )}
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#bae6fd,#38bdf8,#0284c7)", color: "#040406" }}
            onClick={submit}
            disabled={loading}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Calendar size={15} />}
            {loading ? "Booking Slot…" : "Confirm Screen Test Booking"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}

// ═══════════════════════════════════════════════════════════════════
// M020 — Stunt & Special Skills Safety Certification
// ═══════════════════════════════════════════════════════════════════

export function StuntSafetyModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (r: StuntSafetyCertRecord) => void;
}) {
  const [certBody, setCertBody] = useState("Indian Stunt Association");
  const [certId, setCertId] = useState("ISA-2024-00921");
  const [skill, setSkill] = useState("stunts");
  const [level, setLevel] = useState("advanced");
  const [medicalClear, setMedicalClear] = useState(true);
  const [coverage, setCoverage] = useState("50");
  const [validUntil, setValidUntil] = useState("2026-01-31");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<StuntSafetyCertRecord | null>(null);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      const r: StuntSafetyCertRecord = {
        recordId: `STN-${Date.now()}`,
        certifyingBody: certBody as "Indian Stunt Association",
        certificationId: certId,
        skillCategory: skill as "stunts",
        proficiencyLevel: level as "advanced",
        medicalClearance: medicalClear,
        insuranceCoverage: Number(coverage),
        validUntil,
        status: "valid",
      };
      setRecord(r);
      setDone(true);
      setLoading(false);
      onSuccess?.(r);
    }, 1800);
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title="Stunt Safety Certification"
      module="MODULE M020"
      accentColor="#ef4444"
      icon={Zap}
    >
      {done && record ? (
        <SuccessScreen
          title="Stunt Certification Verified"
          refId={record.recordId}
          accentColor="#ef4444"
          items={[
            { label: "Certifying Body", value: record.certifyingBody },
            { label: "Cert ID", value: record.certificationId },
            { label: "Skill", value: record.skillCategory.replace("_", " ").toUpperCase() },
            { label: "Proficiency", value: record.proficiencyLevel.toUpperCase() },
            { label: "Insurance", value: `₹${record.insuranceCoverage} Lakhs` },
            { label: "Valid Until", value: record.validUntil },
          ]}
          onClose={onClose}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#7a7a88", lineHeight: 1.6 }}>
            Mandatory for performers taking on stunt or special skills sequences.
            Insurance coverage and medical clearance are non-negotiable.
          </p>
          <Field label="Certifying Body">
            <Select value={certBody} onChange={(e) => setCertBody(e.target.value)}>
              <option value="Indian Stunt Association">Indian Stunt Association (ISA)</option>
              <option value="ACII">ACII — Action Choreographers India</option>
              <option value="SCA India">SCA India — Screen Combat Academy</option>
              <option value="Custom">Other / Custom Body</option>
            </Select>
          </Field>
          <Field label="Certification ID">
            <Input value={certId} onChange={(e) => setCertId(e.target.value)} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="Skill Category">
              <Select value={skill} onChange={(e) => setSkill(e.target.value)}>
                <option value="stunts">General Stunts</option>
                <option value="horse_riding">Horse Riding</option>
                <option value="martial_arts">Martial Arts</option>
                <option value="aerial">Aerial / Wire</option>
                <option value="underwater">Underwater</option>
                <option value="pyrotechnics">Pyrotechnics</option>
              </Select>
            </Field>
            <Field label="Proficiency Level">
              <Select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="basic">Basic</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </Select>
            </Field>
          </div>
          <Field label="Insurance Coverage (₹ Lakhs)">
            <Input type="number" value={coverage} onChange={(e) => setCoverage(e.target.value)} min="10" />
          </Field>
          <Field label="Certification Valid Until">
            <Input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
          </Field>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", color: "#d1d1d8" }}>
            <input type="checkbox" checked={medicalClear} onChange={(e) => setMedicalClear(e.target.checked)} style={{ accentColor: "#ef4444", width: "16px", height: "16px" }} />
            Medical fitness clearance from a registered physician obtained
          </label>
          <div style={{ padding: "12px 16px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "10px", fontSize: "11px", color: "#ef4444", fontFamily: "monospace" }}>
            ✦ Minimum ₹25 Lakh insurance mandatory for pyrotechnics & aerial work
          </div>
          <button
            className="btn-cinema-gold"
            style={{ width: "100%", background: "linear-gradient(135deg,#fecaca,#ef4444,#b91c1c)", color: "#fff" }}
            onClick={submit}
            disabled={loading || !medicalClear || !certId}
          >
            {loading ? <Loader2 size={15} className="animate-spin" /> : <Zap size={15} />}
            {loading ? "Verifying Certification…" : "Register Safety Cert"}
          </button>
        </div>
      )}
    </ModalShell>
  );
}
