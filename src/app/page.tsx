import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Rangmanch — Where Talent Meets Opportunity",
  description:
    "India's premier AI-assisted casting and talent discovery platform. Discover opportunities, showcase your talent, and connect with entertainment professionals across India.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageClient />
      <Footer />
    </>
  );
}
