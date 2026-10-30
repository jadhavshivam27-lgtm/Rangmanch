"use client";

import { useState } from "react";
import {
  X,
  Receipt,
  UploadCloud,
  CheckCircle2,
  Download,
  AlertCircle,
  Coins,
  FileText,
  CreditCard,
  Building,
} from "lucide-react";

interface ExpenseReimbursementModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ExpenseReimbursementModal({
  isOpen,
  onClose,
  defaultProject = "Antim Prahar",
}: ExpenseReimbursementModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [expenseCategory, setExpenseCategory] = useState("conveyance");
  const [claimAmount, setClaimAmount] = useState("₹2,450");
  const [vendorName, setVendorName] = useState("Uber India (Airport to Film City)");
  const [invoiceDate, setInvoiceDate] = useState("29 Oct 2026");
  const [gstNumber, setGstNumber] = useState("27AAACU1824P1Z3");
  const [ocrStatus, setOcrStatus] = useState("Verified (100% Tax Match)");
  const [approvalStatus, setApprovalStatus] = useState("Line Producer Pre-Approved");
  const [upiId, setUpiId] = useState("shivam.jadhav@okhdfcbank");

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div
        className="modal-panel"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "linear-gradient(180deg, #101018 0%, #0a0a0f 100%)",
          border: "1px solid rgba(245, 158, 11, 0.35)",
          borderRadius: "24px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.95), 0 0 50px rgba(245, 158, 11, 0.12)",
          overflow: "hidden",
        }}
      >
        {/* Top Amber Trim */}
        <div
          style={{
            height: "3px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, #f59e0b 25%, #fde68a 50%, #f59e0b 75%, transparent)",
          }}
        />

        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 32px 20px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "#0d0d14",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)",
                border: "1px solid rgba(245,158,11,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f59e0b",
              }}
            >
              <Receipt size={24} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  color: "#f59e0b",
                  textTransform: "uppercase",
                }}
              >
                MODULE M054 • FEATURE 54
              </div>
              <h2
                className="font-cinema"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "2px 0 0 0",
                  letterSpacing: "0.02em",
                }}
              >
                Per Diem &amp; Conveyance Expense Reimbursement
              </h2>
              <div style={{ fontSize: "12px", color: "#8a8a9a", marginTop: "2px" }}>
                Production: <span style={{ color: "#f59e0b", fontWeight: 600 }}>{defaultProject}</span> • Automated OCR Scan &amp; Escrow Settlement
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              padding: "8px",
              color: "#8a8a9a",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* 4-Step Stepper Bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "14px 32px",
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {[
            { step: 1, label: "Expense Category" },
            { step: 2, label: "OCR Receipt Scan" },
            { step: 3, label: "Producer Approval" },
            { step: 4, label: "Instant UPI Settlement" },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                padding: "6px 12px",
                borderRadius: "8px",
                backgroundColor:
                  activeStep === item.step
                    ? "rgba(245,158,11,0.12)"
                    : "rgba(255,255,255,0.02)",
                border:
                  activeStep === item.step
                    ? "1px solid rgba(245,158,11,0.3)"
                    : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  backgroundColor:
                    activeStep === item.step ? "#f59e0b" : "rgba(255,255,255,0.1)",
                  color: activeStep === item.step ? "#0a0a0f" : "#8a8a9a",
                }}
              >
                {item.step}
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: activeStep === item.step ? 600 : 400,
                  color: activeStep === item.step ? "#ffffff" : "#606070",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px", maxHeight: "580px", overflowY: "auto" }}>
          {/* STEP 1: EXPENSE CATEGORY */}
          {activeStep === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                  Select Expense Category
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "8px" }}>
                  {[
                    { id: "conveyance", label: "Cab / Fuel Conveyance", rate: "₹2,450" },
                    { id: "per_diem", label: "Daily On-Set Food Per Diem", rate: "₹1,500" },
                    { id: "accommodation", label: "Outstation Lodging / Hotel", rate: "₹6,800" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setExpenseCategory(cat.id);
                        setClaimAmount(cat.rate);
                      }}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        backgroundColor: expenseCategory === cat.id ? "rgba(245,158,11,0.12)" : "rgba(255,255,255,0.03)",
                        border: expenseCategory === cat.id ? "1px solid rgba(245,158,11,0.4)" : "1px solid rgba(255,255,255,0.08)",
                        color: expenseCategory === cat.id ? "#ffffff" : "#8a8a9a",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: "13px", fontWeight: 600 }}>{cat.label}</div>
                      <div style={{ fontSize: "11px", color: "#f59e0b", marginTop: "4px", fontFamily: "monospace" }}>
                        Scale: {cat.rate}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Vendor / Description
                  </label>
                  <input
                    type="text"
                    value={vendorName}
                    onChange={(e) => setVendorName(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontFamily: "monospace", color: "#8a8a9a", textTransform: "uppercase" }}>
                    Total Claim Amount
                  </label>
                  <input
                    type="text"
                    value={claimAmount}
                    onChange={(e) => setClaimAmount(e.target.value)}
                    style={{
                      width: "100%",
                      marginTop: "6px",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#ffffff",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(245,158,11,0.05)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", color: "#8a8a9a" }}>Performer Designated UPI Address:</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", fontFamily: "monospace", marginTop: "2px" }}>
                    {upiId}
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#34d399", padding: "4px 8px", background: "rgba(52,211,153,0.1)", borderRadius: "6px" }}>
                  NPCI UPI AUTO-SETTLE
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: OCR RECEIPT SCAN */}
          {activeStep === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  border: "2px dashed rgba(245,158,11,0.3)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                  backgroundColor: "rgba(245,158,11,0.02)",
                }}
              >
                <UploadCloud size={36} color="#f59e0b" style={{ margin: "0 auto 10px auto" }} />
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                  Uber_Trip_Receipt_FilmCity_29Oct.pdf
                </div>
                <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "4px" }}>
                  Scanned with Optical Character Recognition (OCR Engine 4.2)
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  borderRadius: "14px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Vendor Legal Entity:</span>
                  <strong style={{ color: "#ffffff" }}>Uber India Systems Pvt Ltd</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Vendor GSTIN:</span>
                  <strong style={{ color: "#f59e0b", fontFamily: "monospace" }}>{gstNumber}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Base Fare + SGST + CGST (5%):</span>
                  <strong style={{ color: "#ffffff" }}>₹2,333.33 + ₹116.67 = ₹2,450.00</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                  <span style={{ color: "#8a8a9a" }}>Tax Match Confidence:</span>
                  <strong style={{ color: "#34d399" }}>{ocrStatus}</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PRODUCER APPROVAL */}
          {activeStep === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(52,211,153,0.05)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff" }}>
                    Production Accounts Verification
                  </div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a", marginTop: "2px" }}>
                    Verified by Ramesh Gupta (Associate Line Producer, Dharma / Antim Prahar)
                  </div>
                </div>
                <span style={{ fontSize: "11px", color: "#34d399", padding: "4px 10px", borderRadius: "6px", background: "rgba(52,211,153,0.15)", fontWeight: 600 }}>
                  ✓ APPROVED
                </span>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", color: "#8a8a9a" }}>Approved Settlement Amount:</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#f59e0b", fontFamily: "monospace" }}>
                    {claimAmount} INR
                  </div>
                </div>
                <div style={{ textAlign: "right", fontSize: "11px", color: "#a0a0b0" }}>
                  Source: <strong>Production Conveyance Escrow Pool</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: INSTANT UPI SETTLEMENT */}
          {activeStep === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(245,158,11,0.15)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f59e0b",
                  margin: "0 auto 16px auto",
                }}
              >
                <CheckCircle2 size={30} />
              </div>

              <h3 className="font-cinema" style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                ₹2,450 Disbursed to Performer UPI
              </h3>
              <p style={{ fontSize: "13px", color: "#8a8a9a", maxWidth: "460px", margin: "8px auto 20px auto" }}>
                Payment Ref: #UPI-9041285741. Real-time settlement confirmed via HDFC Escrow Gateway to {upiId}.
              </p>

              <button
                onClick={() => {
                  const content = `RANGMANCH PER DIEM & EXPENSE DISBURSEMENT VOUCHER\nVoucher ID: #VCH-2026-90412\nProject: ${defaultProject}\nPayee: Shivam Jadhav\nCategory: Cab / Fuel Conveyance\nVendor: Uber India Systems Pvt Ltd (GST: 27AAACU1824P1Z3)\nClaim Amount: ₹2,450 INR\nUPI Ref: #UPI-9041285741\nAccount: shivam.jadhav@okhdfcbank\nStatus: SETTLED IN ESCROW\nDisbursed on: ${new Date().toISOString()}`;
                  const dl = document.createElement("a");
                  dl.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
                  dl.setAttribute("download", `Expense_Voucher_${defaultProject.replace(/\s+/g, "_")}_2450.txt`);
                  dl.click();
                }}
                className="btn-cinema-gold"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontSize: "12px" }}
              >
                <Download size={14} /> DOWNLOAD SETTLEMENT VOUCHER
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0d0d14",
          }}
        >
          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#606070" }}>
            Step {activeStep} of 4 • Per Diem &amp; Expense Escrow
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            {activeStep > 1 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "10px",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                BACK
              </button>
            )}
            {activeStep < 4 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={onClose}
                className="btn-cinema-gold"
                style={{ height: "38px", padding: "0 22px", fontSize: "11px" }}
              >
                CLOSE EXPENSES ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

