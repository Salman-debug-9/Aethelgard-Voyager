"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import styles from '@/styles/layout/Navbar.module.css';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Destinations", href: "/destinations" },
        { name: "Signature Tours", href: "/tours" },
        { name: "Our Journey", href: "/timeline" },
        { name: "The Journal", href: "/blog" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <>
            <motion.nav
                className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <Link href="/" className={styles.logoWrapper}>
                    <div className={styles.logoMark}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 21H6.5L8.5 16H15.5L17.5 21H20L12 2ZM9.5 14L12 8L14.5 14H9.5Z" fill="currentColor" />
                        </svg>
                    </div>
                    <span className={styles.logoText}>ETHELGARD</span>
                </Link>

                <div className={styles.links}>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.link}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                    <Link href="/booking" className={styles.bookBtn}>
                        Book Now
                    </Link>

                    <div className={styles.mobileToggle} onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileOverlay}
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.mobileContent}>
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
