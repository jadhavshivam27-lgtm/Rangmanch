import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const amountInr = Number(body.amountInr || 0);
    const projectTitle = String(body.projectTitle || "Rangmanch Escrow Bond");

    if (!Number.isFinite(amountInr) || amountInr <= 0) {
      return NextResponse.json(
        { error: "Invalid escrow amount." },
        { status: 400 }
      );
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay credentials are not configured on the server." },
        { status: 500 }
      );
    }

    // Razorpay amounts are in paise (1 INR = 100 paise).
    // Note: Razorpay Test Mode single-transaction cap is typically ₹5,00,000 (50,000,000 paise)
    // For multi-crore film escrow bonds, we authorize a ₹50,000 Token Bond Lock or capped test amount if over cap.
    const rawPaise = Math.round(amountInr * 100);
    const orderPaise = Math.min(rawPaise, 50000000); // Cap at ₹5,00,000 for Razorpay Test Mode compatibility

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: orderPaise,
      currency: "INR",
      receipt: `rcpt_${Date.now().toString().slice(-8)}`,
      notes: {
        project: projectTitle,
        fullContractInr: String(amountInr),
        platform: "Rangmanch Cinema Escrow",
      },
    });

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      cappedForTestMode: rawPaise > 50000000,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to create Razorpay order";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
