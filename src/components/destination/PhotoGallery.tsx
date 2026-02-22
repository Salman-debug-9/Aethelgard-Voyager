"use client";
import Image from "next/image";
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/destination/PhotoGallery.module.css';

const images = [
    { src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200", caption: "Golden Pavilion" },
    { src: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&q=80&w=1200", caption: "Yasaka Pagoda" },
    { src: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=1200", caption: "Bamboo Sanctuary" },
    { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=1200", caption: "Vermilion Gates" },
    { src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1200", caption: "Gion District" },
    { src: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&q=80&w=1200", caption: "Zen Philosophy" },
    { src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&q=80&w=1200", caption: "Kyoto Twilight" }
];

export default function PhotoGallery() {
    return (
        <section className={styles.gallery}>
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Visual Journey
            </motion.h2>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={img.src}
                                    alt={img.caption}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.overlay}>
                                <p className={styles.caption}>{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.sideCol}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    <div className={styles.sideContent}>
                        <span className={styles.sideLabel}>CURATED COLLECTION</span>
                        <h3 className={styles.sideTitle}>The Art of the Observed</h3>
                        <p className={styles.sideDesc}>
                            Every frame captured is a testament to the fleeting beauty of the Japanese landscape.
                            From the silence of dawn to the vibrant pulse of twilight.
                        </p>
                        <div className={styles.decoLine} />
                        <motion.button
                            className={styles.archiveBtn}
                            whileHover={{ scale: 1.05, letterSpacing: '4px' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            VIEW FULL ARCHIVE
                        </motion.button>
                    </div>

                    <div className={styles.floatingTag}>
                        <span>MOMENTS // 2026</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
