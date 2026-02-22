"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/home/FeaturedDestinations.module.css';

const DESTINATIONS = [
    { id: 1, name: "SANTORINI", label: "MEDITERRANEAN PEARL", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop", class: styles.item1, speed: 0.1 },
    { id: 2, name: "KYOTO", label: "ZEN ARCHITECTURE", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", class: styles.item2, speed: 0.2 },
    { id: 3, name: "POSITANO", label: "COASTAL LUXURY", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop", class: styles.item3, speed: 0.3 },
    { id: 4, name: "ZERMATT", label: "ALPINE PEAKS", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", class: styles.item4, speed: 0.05 },
];

export default function FeaturedDestinations() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const words = "Exploring the boundaries of geography and aesthetic. A curated world selection.".split(" ");

    return (
        <section ref={containerRef} className={styles.section}>
            {/* Self-drawing accent lines */}
            <motion.div
                className={`${styles.decoration} ${styles.vLine}`}
                style={{ top: '10%', right: '45%', scaleY: scrollYProgress }}
            />
            <motion.div
                className={`${styles.decoration} ${styles.hLine}`}
                style={{ bottom: '20%', left: '10%', scaleX: scrollYProgress }}
            />

            <div className={styles.grid}>
                <div className={styles.intro}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        VOLUME 01 — THE ODYSSEY
                    </motion.span>
                    <motion.h2 className={styles.title}>
                        {["MASTERED", "VISTAS"].map((word, i) => (
                            <span key={i} className={styles.wordWrapper} style={{ overflow: 'hidden', display: 'block' }}>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    style={{ display: 'block' }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h2>
                    <div className={styles.desc}>
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, filter: "blur(5px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                                viewport={{ once: true }}
                                style={{ marginRight: '0.4em', display: 'inline-block' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {DESTINATIONS.map((dest, i) => (
                    <DestinationItem key={dest.id} dest={dest} scrollYProgress={scrollYProgress} index={i} />
                ))}
            </div>
        </section>
    );
}

function DestinationItem({ dest, scrollYProgress, index }: any) {
    const y = useTransform(scrollYProgress, [0, 1], [100 * (index + 1), -100 * (index + 1)]);

    return (
        <motion.div
            className={`${styles.item} ${dest.class}`}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y }}
        >
            <motion.div
                className={styles.imageWrapper}
                animate={{
                    y: [0, index % 2 === 0 ? -10 : 10, 0],
                    scale: [1, 1.02, 1]
                }}
                transition={{ duration: 6 + index * 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src={dest.image} alt={dest.name} fill className={styles.image} sizes="800px" />
            </motion.div>
            <div className={styles.info}>
                <span className={styles.cityLabel}>{dest.label}</span>
                <h3 className={styles.cityName}>{dest.name}</h3>
            </div>
        </motion.div>
    );
}
