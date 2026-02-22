"use client";
import React from "react";
import { TimelineDemo } from "@/components/misc/TimelineDemo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TimelinePage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <TimelineDemo />
            <Footer />
        </main>
    );
}
