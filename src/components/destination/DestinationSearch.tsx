"use client";
import React, { useState, useEffect } from "react";
import { Search, Thermometer, Wind, Droplets, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from '@/styles/destination/DestinationSearch.module.css';

interface WeatherData {
    temp: string;
    condition: string;
    humidity: string;
    wind: string;
    location: string;
}

interface DestinationData {
    name: string;
    image: string;
    weather: string;
    bestTime: string;
    overview: string;
}

const SUGGESTIONS = [
    { name: "SANTORINI", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2600" },
    { name: "REYKJAVIK", img: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=2600" },
    { name: "KYOTO", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2600" },
    { name: "ZERMATT", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600" }
];

export default function DestinationSearch({ onSelect }: { onSelect: (data: any) => void }) {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState("");

    const fetchWeather = async (loc: string) => {
        setIsLoading(true);
        setError("");
        try {
            // Encode location and use wttr.in for real-time weather
            const encodedLoc = encodeURIComponent(loc);
            const res = await fetch(`https://wttr.in/${encodedLoc}?format=j1`);
            if (!res.ok) throw new Error("Location not found");
            const data = await res.json();

            // Defensive checks for API response structure
            if (!data?.current_condition?.[0] || !data?.nearest_area?.[0]) {
                throw new Error("Detailed data unavailable");
            }

            const current = data.current_condition[0];
            const area = data.nearest_area[0];

            const fetchedWeather: WeatherData = {
                temp: `${current.temp_C}°C`,
                condition: current.weatherDesc[0].value,
                humidity: `${current.humidity}%`,
                wind: `${current.windspeedKmph} km/h`,
                location: `${area.areaName[0].value}, ${area.country[0].value}`
            };

            setWeather(fetchedWeather); // Restore missing state update

            onSelect({
                name: loc.toUpperCase(),
                image: `https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2600`, // Generic nature for unknown
                weather: `${fetchedWeather.temp} ${fetchedWeather.condition}`,
                bestTime: "Year Round",
                overview: `A bespoke journey to ${loc}, where luxury meets uncharted discovery. Explore the unique culture, landscapes and premium offerings of this global gem.`
            });
        } catch (err) {
            setError("Could not retrieve weather for this location.");
            setWeather(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) fetchWeather(query);
    };

    return (
        <div className={styles.searchWrapper}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.inputGroup}>
                    <Search className={styles.searchIcon} size={20} />
                    <input
                        type="text"
                        placeholder="Search any destination globally..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? "DISCOVERING..." : "EXPLORE"}
                    </button>
                </div>
            </form>
            <div className={styles.suggestions}>
                {SUGGESTIONS.map(s => (
                    <button
                        key={s.name}
                        className={styles.suggestBtn}
                        onClick={() => {
                            setQuery(s.name);
                            fetchWeather(s.name).then(() => {
                                // Overwrite with high-quality specific image for suggestions
                                onSelect({
                                    name: s.name,
                                    image: s.img,
                                    weather: "Fetching...",
                                    bestTime: s.name === "REYKJAVIK" ? "Nov - Feb" : "Jun - Aug",
                                    overview: `An extraordinary journey through ${s.name}, curated for the most discerning travelers seeking total immersion and luxury.`
                                });
                            });
                        }}
                    >
                        {s.name}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {/* Result card removed as information is now synced to the Hero section */}
                {error && (
                    <motion.p
                        className={styles.error}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
