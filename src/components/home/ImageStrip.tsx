"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from '@/styles/home/ImageStrip.module.css';

const RIVER_IMAGES = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1200",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
    "https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1200",
    "https://images.unsplash.com/photo-1507608616173-501218a5e833?q=80&w=1200"
];

export default function ImageStrip() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.label}>VISTAS</div>
            <motion.div className={styles.river} style={{ x }}>
                {RIVER_IMAGES.map((src, i) => (
                    <motion.div
                        key={i}
                        className={styles.imageWrapper}
                        animate={{
                            y: [0, i % 2 === 0 ? -30 : 30, 0],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image src={src} alt="Travel" fill className={styles.image} sizes="800px" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
