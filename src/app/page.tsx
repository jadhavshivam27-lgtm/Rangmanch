import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Rangmanch — Casting & Talent Directory",
  description:
    "Connecting extraordinary talent with the stories that matter. Premium casting and talent discovery for Indian cinema, theatre, and OTT.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]" />}>
        <HomePageClient />
      </Suspense>
    </>
  );
}
