"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Clock, DollarSign, CheckCircle2, XCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from '@/styles/tours/TourDetails.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function TourDetailsPage({ params }: { params: { id: string } }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Mock Data
    const days = [
        { day: 1, title: "Arrival in Paradise", desc: "Private transfer from the airport to your 5-star resort. Welcome dinner at sunset." },
        { day: 2, title: "Island Hopping", desc: "Exclusive yacht tour visiting hidden lagoons and pristine beaches." },
        { day: 3, title: "Cultural Immersion", desc: "Private access to ancient temples with a local historian guide." },
        { day: 4, title: "Adventure Awaits", desc: "Helicopter tour over the volcanic landscapes followed by a spa retreat." },
        { day: 5, title: "Departure", desc: "Final breakfast and luxury transfer to the airport." },
    ];

    return (
        <main style={{ background: 'var(--background)', minHeight: '100vh' }}>

            {/* Hero Section */}
            <div className={styles.hero}>
                <Image
                    src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1920&auto=format&fit=crop"
                    fill
                    priority
                    className={styles.heroImage}
                    alt="Maldives Hero"
                    sizes="100vw"
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={styles.title}
                    >
                        Maldives Exclusive Escape
                    </motion.h1>
                    <div className={styles.meta}>
                        <span className={styles.metaItem}><Clock size={20} /> 5 Days</span>
                        <span className={styles.metaItem}><MapPin size={20} /> Maldives</span>
                        <span className={styles.metaItem}><DollarSign size={20} /> From $8,500</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div ref={containerRef} className={styles.container}>

                {/* Left: Sticky Image Gallery */}
                <div className={styles.stickyCol}>
                    <motion.div
                        className={styles.gallery}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
                            fill
                            className={styles.image}
                            alt="Maldives Lagoon"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </motion.div>

                    {/* Route Map Mockup */}
                    <div className={styles.mapBox}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 20 }}>Route Map</h3>
                        <div className={styles.mapContainer}>
                            {/* Simplified Animated Route */}
                            <svg style={{ width: '100%', height: '100%' }}>
                                <motion.path
                                    d="M 50 250 Q 150 50 250 150 T 450 100"
                                    fill="transparent"
                                    stroke="var(--primary)"
                                    strokeWidth="4"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <circle cx="50" cy="250" r="6" fill="var(--accent)" />
                                <circle cx="450" cy="100" r="6" fill="var(--accent)" />
                            </svg>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kyoto_API_Map.png/800px-Kyoto_API_Map.png)', opacity: 0.1 }} />
                        </div>
                    </div>
                </div>

                {/* Right: Itinerary */}
                <div className={styles.itineraryCol}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 50 }}>Day by Day Itinerary</h2>

                    <div className={styles.timeline}>
                        {days.map((day, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={styles.dayItem}
                            >
                                <div className={styles.dayMarker} />
                                <span className={styles.dayLabel}>Day {day.day}</span>
                                <h3 className={styles.dayTitle}>{day.title}</h3>
                                <p className={styles.dayDesc}>{day.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.priceBox}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 20 }}>Tour Inclusions</h3>
                        <div className={styles.inclusions}>
                            {["5-Star Accommodation", "Private Transfers", "Daily Breakfast", "English Speaking Guide"].map(t => (
                                <div key={t} className={styles.checkItem}>
                                    <CheckCircle2 size={18} color="var(--secondary)" /> {t}
                                </div>
                            ))}
                            {["International Flights", "Personal Expenses"].map(t => (
                                <div key={t} className={styles.xItem}>
                                    <XCircle size={18} /> {t}
                                </div>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <div>
                                <p className={styles.totalLabel}>Total Price Per Person</p>
                                <p className={styles.price}>$8,500</p>
                            </div>
                            <Link href="/booking">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={styles.bookBtn}
                                >
                                    Book This Trip
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}
