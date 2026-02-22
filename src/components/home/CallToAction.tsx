"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/styles/home/CallToAction.module.css';

export default function CallToAction() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

    const title = "BEGIN THE ESCAPE.";
    const letters = title.split("");

    return (
        <section ref={sectionRef} className={styles.section}>
            <motion.div className={styles.bgWrapper} style={{ y: bgY, scale: bgScale }}>
                <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2670&auto=format&fit=crop"
                    alt="Closing Scene"
                    fill
                    className={styles.bgImage}
                />
            </motion.div>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Where the Journey Ends, Exploration Begins
                </motion.span>
                <motion.h2 className={styles.title}>
                    {letters.map((char, i) => (
                        <motion.span
                            key={i}
                            className={styles.letter}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.button
                    className={styles.button}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    animate={{ boxShadow: ["0 0 40px rgba(197, 160, 89, 0.4)", "0 0 60px rgba(197, 160, 89, 0.6)", "0 0 40px rgba(197, 160, 89, 0.4)"] }}
                >
                    CURATE YOUR VOYAGE
                </motion.button>
            </div>
        </section>
    );
}
