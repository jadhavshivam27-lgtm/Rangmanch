import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || "").trim().toLowerCase();
    const name = String(body.name || "").trim();
    const role = String(body.role || "talent");
    const avatar = body.avatar ? String(body.avatar) : null;
    const verified = Boolean(body.verified);

    if (!email || !name) {
      return NextResponse.json({ error: "Missing email or name." }, { status: 400 });
    }

    const profile = await prisma.userProfile.upsert({
      where: { email },
      update: {
        name,
        role,
        avatar,
        verified,
      },
      create: {
        email,
        name,
        role,
        avatar,
        verified,
      },
    });

    return NextResponse.json({ ok: true, profile });
  } catch (err) {
    // Non-blocking fallback so login never breaks if DB is temporarily unreachable
    const message = err instanceof Error ? err.message : "Database sync error";
    return NextResponse.json({ ok: false, error: message }, { status: 200 });
  }
}
