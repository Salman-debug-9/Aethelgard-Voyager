"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from '@/styles/home/Reviews.module.css';

const REVIEWS = [
    { id: 1, name: "Sofia M.", text: "A truly transformative experience. Every detail was perfect, from the private jet to the sunset dinner.", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "David L.", text: "The team went above and beyond. The safari was life-changing.", avatar: "https://i.pravatar.cc/150?img=11" },
];

export default function Reviews() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const bgX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={sectionRef} className={styles.section}>
            <motion.div className={styles.bgScene} style={{ x: bgX }}>
                <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop"
                    alt="Background"
                    fill
                    className={styles.bgImage}
                />
            </motion.div>

            <div className={styles.container}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    TESTIMONIALS OF THE ELITE
                </motion.span>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.8 }}
                >
                    VOICES OF<br />THE JOURNEY
                </motion.h2>

                <div className={styles.grid}>
                    {REVIEWS.map((review, i) => (
                        <ReviewCard key={review.id} review={review} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ review, index }: { review: typeof REVIEWS[0], index: number }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 8 + index * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className={styles.quoteIcon}>“</div>
                <p className={styles.reviewText}>"{review.text}"</p>

                <div className={styles.user}>
                    <div className={styles.avatarWrapper}>
                        <Image src={review.avatar} alt={review.name} fill className={styles.avatar} />
                    </div>
                    <div className={styles.userInfo}>
                        <h4>{review.name}</h4>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Star size={16} fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
