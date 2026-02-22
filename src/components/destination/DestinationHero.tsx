"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from '@/styles/destination/DestinationHero.module.css';
import { CloudSun, CalendarCheck } from "lucide-react";

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&q=80&w=1200", // Yasaka
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200", // Golden Pavilion
    "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=1200"  // Bamboo
];

export default function DestinationHero({ name, weather, bestTime }: { name: string, image: string, weather: string, bestTime: string }) {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [imgIndex, setImgIndex] = useState(0);

    // Auto-rotation every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const bgY = useTransform(scrollY, [0, 800], [0, 200]);
    const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const textY = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section ref={containerRef} className={styles.heroContainer}>
            {/* 1: Background Cinematic Layer (Auto-Rotating) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={imgIndex}
                    className={styles.bgLayer}
                    style={{ y: bgY }}
                    initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={HERO_IMAGES[imgIndex]}
                        alt="Cinematic Backdrop"
                        fill
                        priority
                        className={styles.bgImage}
                    />
                </motion.div>
            </AnimatePresence>

            {/* 2: Atmospheric Gradient & Noise */}
            <div className={styles.mistLayer}>
                <div className={styles.noise} />
            </div>

            {/* 3: Content Overlay */}
            <div className={styles.content}>
                <motion.div
                    className={styles.textWrapper}
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <div className={styles.revealRow}>
                        <motion.span
                            className={styles.label}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        >
                            LEGACY JOURNEYS — 2026 EDITION
                        </motion.span>
                    </div>

                    <div className={styles.maskContainer}>
                        <motion.h1
                            className={styles.headline}
                            initial={{ y: "100%", skewY: 7 }}
                            animate={{ y: 0, skewY: 0 }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        >
                            THE SOUL OF<br />{name}
                        </motion.h1>
                    </div>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                    >
                        Where ancient whispered traditions meet the silent elegance of the modern world.
                        A sanctuary for the soul, preserved in gold and bamboo.
                    </motion.p>

                    <div className={styles.statusRow}>
                        <motion.div
                            className={styles.statusItem}
                            initial={{ opacity: 0, filter: "blur(5px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <CloudSun size={20} color="var(--accent)" />
                            <div className={styles.statusTexts}>
                                <span className={styles.statusLabel}>CURRENT ATMOSPHERE</span>
                                <span className={styles.statusVal}>{weather}</span>
                            </div>
                        </motion.div>

                        <div className={styles.statusDivider} />

                        <motion.div
                            className={styles.statusItem}
                            initial={{ opacity: 0, filter: "blur(5px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 1.7 }}
                        >
                            <CalendarCheck size={20} color="var(--accent)" />
                            <div className={styles.statusTexts}>
                                <span className={styles.statusLabel}>PEAK SEASON</span>
                                <span className={styles.statusVal}>{bestTime}</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className={styles.scrollTip}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.5 }}
            >
                <div className={styles.line} />
                <span>DESCEND</span>
            </motion.div>
        </section>
    );
}
