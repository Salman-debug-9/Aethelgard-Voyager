"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import styles from '@/styles/home/MapPreview.module.css';

const PINS = [
    { id: 1, top: "25%", left: "15%", name: "ICELAND", tag: "ARCTIC SILENCE" },
    { id: 2, top: "40%", left: "45%", name: "DUBAI", tag: "DESERT奢华" },
    { id: 3, top: "65%", left: "75%", name: "BALI", tag: "TROPICAL ZEN" },
    { id: 4, top: "20%", left: "65%", name: "TOKYO", tag: "NEON POETRY" }
];

export default function MapPreview() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const mapScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const mapY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={containerRef} className={styles.section}>
            <div className={styles.container}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    THE GLOBAL PORTFOLIO
                </motion.span>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    THE TERRITORY<br />OF LUXURY
                </motion.h2>

                <div className={styles.mapFrame}>
                    <motion.div className={styles.mapWrapper} style={{ scale: mapScale, y: mapY }}>
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2600&auto=format&fit=crop"
                            alt="Global Map"
                            fill
                            className={styles.mapImage}
                        />
                    </motion.div>
                    <div className={styles.noise} />

                    {PINS.map((pin, i) => (
                        <motion.div
                            key={pin.id}
                            className={styles.pin}
                            style={{ top: pin.top, left: pin.left }}
                            initial={{ opacity: 0, scale: 0, y: -100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                delay: 1 + i * 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className={styles.pulse}
                                animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}

                    <motion.div
                        className={styles.preview}
                        initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.previewImg}>
                            <Image src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=400&auto=format&fit=crop" alt="Preview Destination" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.previewContent}>
                            <h4>SANTORINI</h4>
                            <p>SIGNATURE DESTINATION</p>
                        </div>
                        <motion.div whileHover={{ x: 10 }}>
                            <ArrowRight size={32} color="var(--accent)" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
