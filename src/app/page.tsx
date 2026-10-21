import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Rangmanch — National Cinema & OTT Casting Platform",
  description:
    "India's premier casting platform connecting certified actors, models, dancers, and vocalists directly with verified Bollywood, South Cinema, and OTT productions.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-[#040406]" />}>
        <HomePageClient />
      </Suspense>
      <Footer />
    </>
  );
}
