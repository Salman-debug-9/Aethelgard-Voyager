"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from '@/styles/destination/SignatureExperience.module.css';
import { Diamond, Sparkles, MapPin, Compass, Crown, ShieldCheck } from "lucide-react";

const EXPERIENCES = [
    {
        title: "THE IMPERIAL PRIVATE TEA CEREMONY",
        loc: "Daitoku-ji Temple, Kyoto",
        desc: "An exclusive session with a 15th-generation tea master in a closed-to-public Zen sub-temple. Witness a tradition preserved for centuries in absolute silence, away from the modern world's clamor.",
        details: ["Private Master Session", "15th-Gen Heritage", "Ancient Zen Sub-Temple", "Hand-crafted Implements"],
        duration: "3 Hours",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200",
        watermark: "HERITAGE"
    },
    {
        title: "GION BY TWILIGHT: NOCTURNAL JOURNEY",
        loc: "Gion District, Kyoto",
        desc: "Walk the lantern-lit cobblestones of Gion with a cultural historian. Gain rare insights into the world of the Geiko and the architecture of the Edo period, exploring hidden alleys inaccessible to the public.",
        details: ["Historian Guide", "Private Teahouse Access", "Traditional Kaiseki Dinner", "Geiko Performance"],
        duration: "4 Hours",
        image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200",
        watermark: "TRADITION"
    },
    {
        title: "BAMBOO SYMPHONY AT DAWN",
        loc: "Arashiyama, Kyoto",
        desc: "Experience the Arashiyama Bamboo Grove before the world wakes. A private meditation session accompanied only by the whispering stalks and morning mist, followed by forest bathing.",
        details: ["Exclusive Early Entry", "Guided Zen Meditation", "Private Forest Path", "Artisan Tea Pairing"],
        duration: "2 Hours",
        image: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=1200",
        watermark: "SILENCE"
    },
    {
        title: "KINKAKU-JI PRIVACY HOUR",
        loc: "Kinkaku-ji, Kyoto",
        desc: "A private viewing of the Kinkaku-ji during the golden hour. Accompanied by a Zen monk who shares the philosophical essence of the Pure Land architecture as the pavilion reflects into the pond.",
        details: ["Private After-Hours", "Monk Discussion", "Sunset Meditation", "Gold Leaf Workshop"],
        duration: "2.5 Hours",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
        watermark: "ETERNITY"
    }
];

export default function SignatureExperience() {
    return (
        <section className={styles.section}>
            <div className={styles.mistLayer}>
                <div className={styles.noise} />
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <div className={styles.labelWrapper}>
                        <Diamond className={styles.icon} size={20} />
                        <span className={styles.sub}>THE PINNACLE OF CURATED TRAVEL</span>
                    </div>
                    <div className={styles.titleMask}>
                        <motion.h2
                            className={styles.heading}
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            SIGNATURE<br />EXPERIENCES
                        </motion.h2>
                    </div>

                    <motion.p
                        className={styles.headerSubtitle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Where the ephemeral becomes eternal. Our curated programs offer unprecedented access
                        to Japan's most sacred cultural treasures.
                    </motion.p>
                </motion.div>

                <div className={styles.flexGrid}>
                    {EXPERIENCES.map((exp, i) => (
                        <motion.div
                            key={i}
                            className={styles.experienceCard}
                            initial={{ opacity: 0, scale: 0.95, y: 100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className={styles.visualCol}>
                                <div className={styles.decoElement} />
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className={styles.img}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className={styles.imgOverlay} />
                                    <span className={styles.durationTag}>
                                        <Compass size={12} style={{ marginRight: 8 }} />
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.infoCol}>
                                <div className={styles.locTag}>
                                    <MapPin size={14} />
                                    <span>{exp.loc}</span>
                                </div>
                                <h3 className={styles.itemTitle}>{exp.title}</h3>
                                <p className={styles.itemDesc}>{exp.desc}</p>

                                <div className={styles.detailsList}>
                                    {exp.details.map((detail, idx) => (
                                        <motion.div
                                            key={idx}
                                            className={styles.detailItem}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (idx * 0.1) }}
                                        >
                                            <ShieldCheck size={14} className={styles.sparkle} />
                                            <span>{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    className={styles.enquireBtn}
                                    whileHover={{ x: 15 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Crown size={16} style={{ marginRight: 10 }} />
                                    RESERVE YOUR MOMENT
                                    <span className={styles.btnArrow}>→</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
