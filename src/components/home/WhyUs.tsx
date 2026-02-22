"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/home/WhyUs.module.css';

export default function WhyUs() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

    const lines = [
        "A radical pursuit",
        "of the sublime in",
        "every curated voyage."
    ];

    return (
        <section ref={sectionRef} className={styles.section}>
            {/* Background Layer with Pan & Zoom */}
            <motion.div className={styles.bgWrapper} style={{ y: bgY, scale: bgScale }}>
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop"
                    alt="Atmosphere"
                    fill
                    className={styles.bgImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            {/* Floating Decorative Shapes */}
            <div className={styles.shapes}>
                <motion.div
                    className={styles.circle}
                    style={{ top: '10%', left: '5%' }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1], x: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={styles.rect}
                    style={{ top: '20%', right: '15%' }}
                    animate={{ y: [-100, 100, -100], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className={styles.container}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    OUR EXISTENCE
                </motion.span>

                <h2 className={styles.narrative}>
                    {lines.map((line, i) => (
                        <span key={i} className={styles.line}>
                            <motion.span
                                className={styles.revealText}
                                initial={{ y: "100%", filter: "blur(10px)" }}
                                whileInView={{ y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.3,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                viewport={{ once: true }}
                            >
                                {line}
                            </motion.span>
                        </span>
                    ))}
                </h2>

                <motion.div
                    className={styles.divider}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                    style={{ width: '100px' }}
                />

                <motion.p
                    className={styles.subtext}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    viewport={{ once: true }}
                >
                    We do not curate hotels; we curate horizons. Every detail is a note in a symphony of
                    unmatched luxury, designed to leave the world behind.
                </motion.p>
            </div>
        </section>
    );
}
