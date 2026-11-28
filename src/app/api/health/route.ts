import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const supabaseConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  const razorpayConfigured = Boolean(
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
  );
  const cashfreeKycConfigured = Boolean(
    process.env.KYC_API_KEY && process.env.KYC_API_SECRET
  );
  const cashfreePgConfigured = Boolean(
    process.env.CASHFREE_PG_CLIENT_ID && process.env.CASHFREE_PG_CLIENT_SECRET
  );

  let supabaseReachable = false;
  if (supabaseConfigured) {
    try {
      const admin = getSupabaseAdmin();
      if (admin) {
        // Lightweight auth admin ping to verify key validity
        const { error } = await admin.auth.admin.listUsers({ page: 1, perPage: 1 });
        supabaseReachable = !error;
      }
    } catch {
      supabaseReachable = false;
    }
  }

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    integrations: {
      supabase: {
        configured: supabaseConfigured,
        reachable: supabaseReachable,
        projectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
      },
      razorpay: {
        configured: razorpayConfigured,
        mode: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.startsWith("rzp_live_")
          ? "live"
          : "test",
      },
      cashfreeVerification: {
        configured: cashfreeKycConfigured,
        env: process.env.CASHFREE_ENV || "sandbox",
      },
      cashfreePaymentGateway: {
        configured: cashfreePgConfigured,
        env: "sandbox",
      },
    },
  });
}
