"use client";
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import styles from '@/styles/home/PopularTours.module.css';

const TOURS = [
    {
        id: 1,
        name: "Amazonia Nature",
        price: "$4,500",
        duration: "7 DAYS",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
        label: "PRISTINE"
    },
    {
        id: 2,
        name: "Alpine Majesty",
        price: "$6,200",
        duration: "5 DAYS",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
        label: "ELEVATED"
    },
    {
        id: 3,
        name: "Antarctic Silence",
        price: "$9,800",
        duration: "12 DAYS",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
        label: "ETHEREAL"
    },
    {
        id: 4,
        name: "Sahara Gold",
        price: "$5,200",
        duration: "8 DAYS",
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1200",
        label: "TIMELESS"
    },
];

export default function PopularTours() {
    return (
        <section className={styles.section}>
            {/* Background Layers */}
            <div className={styles.mistLayer}>
                <div className={styles.noise} />
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className={styles.collectionLabel}
                            initial={{ letterSpacing: "0px" }}
                            whileInView={{ letterSpacing: "8px" }}
                            transition={{ duration: 2, delay: 0.5 }}
                        >
                            THE 2026 SIGNATURE COLLECTION
                        </motion.span>
                        <p className="text-white/40 text-sm mt-4 tracking-[0.3em] font-light">
                            CURATED BY GLOBAL ARCHITECTS OF LUXURY
                        </p>
                    </motion.div>

                    <div className={styles.titleMask}>
                        <motion.h2
                            className={styles.mainTitle}
                            initial={{ y: "100%", skewY: 5 }}
                            whileInView={{ y: 0, skewY: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            DEFINING THE<br />EXTRAORDINARY
                        </motion.h2>
                    </div>
                </div>

                <div className={styles.customGrid}>
                    {TOURS.map((tour, i) => (
                        <TourCard key={tour.id} tour={tour} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TourCard({ tour, index }: { tour: typeof TOURS[0], index: number }) {
    return (
        <motion.div
            className={styles.tourWrapper}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1.5,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            <div className={styles.cardInner}>
                <div className={styles.visualBox}>
                    <motion.div
                        className={styles.imageReveal}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Image
                            src={tour.image}
                            alt={tour.name}
                            fill
                            className={styles.tourImg}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </motion.div>

                    <div className={styles.cardOverlay}>
                        <div className={styles.metaRow}>
                            <span className={styles.days}>
                                <Compass size={12} style={{ marginRight: 10, display: 'inline' }} />
                                {tour.duration}
                            </span>
                            <div className={styles.dot} />
                            <span className={styles.priceTag}>{tour.price}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.infoBox}>
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={14} className="text-accent" />
                        <span className="text-[10px] text-accent tracking-[4px] font-bold uppercase">Featured Journey</span>
                    </div>
                    <h3 className={styles.tourName}>{tour.name}</h3>
                    <motion.button
                        className={styles.exploreBtn}
                        whileHover={{ gap: "25px", opacity: 1 }}
                        initial={{ opacity: 0.4 }}
                    >
                        VIEW NARRATIVE
                        <ArrowUpRight size={16} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
