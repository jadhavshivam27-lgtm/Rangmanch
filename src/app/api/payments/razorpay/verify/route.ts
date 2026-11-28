import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const orderId = String(body.razorpay_order_id || "");
    const paymentId = String(body.razorpay_payment_id || "");
    const signature = String(body.razorpay_signature || "");

    if (!orderId || !paymentId || !signature) {
      return NextResponse.json(
        { error: "Missing Razorpay payment verification parameters." },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Razorpay secret is not configured." },
        { status: 500 }
      );
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const isValid = expectedSignature === signature;

    if (!isValid) {
      return NextResponse.json(
        { verified: false, error: "Invalid Razorpay payment signature." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: true,
      orderId,
      paymentId,
      verifiedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Payment signature verification failed." },
      { status: 400 }
    );
  }
}
