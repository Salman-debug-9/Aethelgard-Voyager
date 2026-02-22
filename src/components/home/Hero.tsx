"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Compass, MapPin, Calendar, Search } from "lucide-react";
import styles from '@/styles/home/Hero.module.css';

const FOREGROUND_IMAGES = [
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", class: styles.img1, delay: 1.2 },
    { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop", class: styles.img2, delay: 1.5 },
    { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop", class: styles.img3, delay: 1.8 },
    { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", class: styles.img4, delay: 2.1 },
];

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollY } = useScroll();

    // Mouse depth effect
    const mouseX = useSpring(0, { stiffness: 50, damping: 30 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 30 });

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX - window.innerWidth / 2) / 50;
            const y = (clientY - window.innerHeight / 2) / 50;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax transforms
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
    const textY = useTransform(scrollY, [0, 500], [0, -100]);

    const headline = "JOURNEY";
    const letters = headline.split("");

    return (
        <section className={styles.heroContainer}>
            {/* 1: Background Layer */}
            <motion.div className={styles.bgLayer} style={{ y: bgY }}>
                <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2600&auto=format&fit=crop"
                    alt="Eternal Forest Backdrop"
                    fill
                    priority
                    className={styles.bgImage}
                />
            </motion.div>

            {/* 2: Atmospheric Layer */}
            <div className={styles.mistLayer}>
                <div className={styles.noise} />
            </div>

            {/* 3: Foreground Image Cluster */}
            <div className={styles.composition}>
                {FOREGROUND_IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        className={`${styles.compImage} ${img.class}`}
                        initial={{ opacity: 0, y: 100, rotate: i % 2 === 0 ? 5 : -5, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? 2 : -2, scale: 1 }}
                        transition={{
                            duration: 2.5,
                            delay: img.delay,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        style={{
                            x: useTransform(mouseX, x => x * (1 + i * 0.2)),
                            y: useTransform(mouseY, y => y * (1 + i * 0.2)),
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, i % 2 === 0 ? -20 : 20, 0],
                                rotate: [i % 2 === 0 ? 2 : -2, i % 2 === 0 ? -2 : 2, i % 2 === 0 ? 2 : -2]
                            }}
                            transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut" }}
                            className={styles.imageWrapper}
                            style={{ height: '100%', width: '100%', position: 'relative' }}
                        >
                            <Image src={img.src} alt="Travel Scenery" fill className={styles.image} sizes="500px" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* 4: Text Layer */}
            <motion.div className={styles.content} style={{ opacity: textOpacity, y: textY }}>
                <h1 className={styles.headline}>
                    {letters.map((char, i) => (
                        <motion.span
                            key={i}
                            className={styles.letter}
                            initial={{ opacity: 0, y: 150, filter: "blur(20px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 2,
                                delay: 0.5 + i * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                <div className={styles.tagline}>
                    <span className={styles.mask}>
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: 'block' }}
                        >
                            Curating the extraordinary for those who seek the sublime.
                        </motion.span>
                    </span>
                </div>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 4 }}
            >
                <div className={styles.line} />
                <span>NARRATIVE FLOW</span>
            </motion.div>
        </section>
    );
}
