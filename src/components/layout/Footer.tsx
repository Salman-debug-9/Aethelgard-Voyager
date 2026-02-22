"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import styles from '@/styles/layout/Footer.module.css';

const LINKS = {
    JOURNEYS: ["The Collection", "Private Jets", "Island Havens", "The Atelier"],
    DISCOVERY: ["Our Philosophy", "Sustainability", "Cultural Ties", "Partners"],
    ASSISTANCE: ["Journal", "Press", "Terms", "Privacy"]
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.logoCol}>
                        <motion.h2
                            className={styles.logo}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            AETHELGARD
                        </motion.h2>
                        <motion.p
                            className={styles.brandNote}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            Crafting the world's most intimate travel memoirs for the truly discerning.
                            The sublime awaits those who know where to look.
                        </motion.p>
                    </div>

                    <div className={styles.links}>
                        {Object.entries(LINKS).map(([title, items], idx) => (
                            <div key={title} className={styles.col}>
                                <motion.span
                                    className={styles.colTitle}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {title}
                                </motion.span>
                                <ul className={styles.linkList}>
                                    {items.map((item, i) => (
                                        <motion.li
                                            key={item}
                                            className={styles.linkItem}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.5 + (idx * 0.1) + (i * 0.1) }}
                                            viewport={{ once: true }}
                                        >
                                            <a href="#" className={styles.link}>{item}</a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className={styles.divider}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                />

                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                className={styles.socialIcon}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", delay: 1 + i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Icon size={20} />
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>
                    <p>© 2026 AETHELGARD COLLECTIONS. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
}
