"use client";
import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import WhyUs from "@/components/home/WhyUs";
import PopularTours from "@/components/home/PopularTours";
import ImageStrip from "@/components/home/ImageStrip";
import Reviews from "@/components/home/Reviews";
import MapPreview from "@/components/home/MapPreview";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <main style={{ backgroundColor: "var(--primary)" }} className="motion-container">
            <Hero />
            <FeaturedDestinations />
            <WhyUs />
            <PopularTours />
            <ImageStrip />
            <Reviews />
            <MapPreview />
            <CallToAction />
            <Footer />
        </main>
    );
}
