"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from '@/styles/destination/DestinationOverview.module.css';
import { MapPin, Utensils, Mountain } from "lucide-react";

export default function DestinationOverview({ overview }: { overview: string }) {
    const paragraphs = overview.split('\n');

    // Map Animation: Zoom and Pan
    const mapOverlay = useTransform(useScroll().scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.textCol}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
            >
                <motion.h2
                    className={styles.heading}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                    }}
                >
                    Overview
                </motion.h2>

                {paragraphs.map((p, i) => (
                    <motion.p
                        key={i}
                        className={styles.paragraph}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
                        }}
                    >
                        {p}
                    </motion.p>
                ))}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        marginTop: 30,
                        padding: '15px 30px',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'white',
                        background: 'var(--primary)',
                        border: 'none',
                        borderRadius: 50,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10
                    }}
                >
                    <MapPin size={24} /> View Interactive Map
                </motion.button>
            </motion.div>

            <motion.div
                className={styles.mapCol}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    className={styles.mapOverlay}
                    style={{ scale: mapOverlay }}
                />

                {/* Cinema Branding Overlay */}
                <div className={styles.mapBranding}>
                    <span className={styles.mapLoc}>KYOTO SHI, JAPAN</span>
                    <span className={styles.mapCoord}>35.0116° N, 135.7681° E</span>
                </div>

                {/* Animated Pins */}
                <motion.div className={styles.pin} style={{ top: '40%', left: '55%' }}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, type: 'spring', damping: 15 }}
                >
                    <div className={styles.pinDot} />
                    <span className={styles.pinLabel}>GION BORDER</span>
                </motion.div>

                <motion.div className={styles.pin} style={{ top: '55%', left: '35%' }}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, type: 'spring', damping: 15 }}
                >
                    <div className={styles.pinDot} />
                    <span className={styles.pinLabel}>PALACE GROUNDS</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
