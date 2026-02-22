"use client";
import React, { useState } from "react";
import DestinationHero from '@/components/destination/DestinationHero';
import DestinationOverview from '@/components/destination/DestinationOverview';
import DestinationTimeline from '@/components/destination/DestinationTimeline';
import PhotoGallery from '@/components/destination/PhotoGallery';
import SignatureExperience from '@/components/destination/SignatureExperience';
import Footer from '@/components/layout/Footer';

const INITIAL_DESTINATION = {
    name: "KYOTO",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2600&auto=format&fit=crop",
    weather: "18°C Sunny",
    bestTime: "Mar - May",
    overview: `Kyoto is the cultural heart of Japan, a city where ancient traditions blend seamlessly with modern life.
    
    Home to 17 UNESCO World Heritage sites, over 1,600 Buddhist temples and 400 Shinto shrines, Kyoto is also famous for its traditional wooden houses, known as machiya.
    
    Experience the tea ceremony, witness the geisha culture in Gion, and dine on kaiseki cuisine.`
};

export default function DestinationsPage() {
    const [destination] = useState(INITIAL_DESTINATION);

    return (
        <main style={{ background: 'var(--primary)', color: 'white' }}>
            <DestinationHero
                name={destination.name}
                image={destination.image}
                weather={destination.weather}
                bestTime={destination.bestTime}
            />

            <DestinationOverview overview={destination.overview} />

            <SignatureExperience />

            <DestinationTimeline />

            <PhotoGallery />

            <Footer />
        </main>
    );
}
