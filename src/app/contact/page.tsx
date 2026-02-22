"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/contact/ContactForm.module.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <main style={{ background: '#060e1b' }}>
            <Navbar />

            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.infoCol}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.heading}>Plan Your <br />Extraordinary</h1>
                        <p className={styles.text}>
                            Whether it's a private island expedition or a sub-surface sanctuary, our concierge team is ready to craft your narrative.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactMethod}>
                                <div className={styles.iconWrapper}><Mail size={24} /></div>
                                <div>
                                    <span className={styles.methodLabel}>Email Us</span>
                                    <span className={styles.methodValue}>concierge@aethelgard.com</span>
                                </div>
                            </div>

                            <div className={styles.contactMethod}>
                                <div className={styles.iconWrapper}><Phone size={24} /></div>
                                <div>
                                    <span className={styles.methodLabel}>Call Us</span>
                                    <span className={styles.methodValue}>+1 (800) 555-LUXE</span>
                                </div>
                            </div>

                            <div className={styles.contactMethod}>
                                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                                <div>
                                    <span className={styles.methodLabel}>Headquarters</span>
                                    <span className={styles.methodValue}>101 Luxury Blvd, Beverly Hills, CA</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.formCol}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} required placeholder="E.g. Alexander Mercer" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Electronic Mail</label>
                            <input type="email" className={styles.input} required placeholder="alex@voyage.com" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Your Vision</label>
                            <textarea className={styles.textarea} required placeholder="Share your dream itinerary or specific requirements..." />
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            whileTap={{ scale: 0.98 }}
                            disabled={status !== "idle"}
                        >
                            {status === "idle" ? "Send Inquiry" : status === "submitting" ? "Forwarding..." : "Inquiry Sent"}
                        </motion.button>

                        {status === "success" && (
                            <motion.p
                                className={styles.success}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Your message has been encrypted and delivered. Expect a response within 4 hours.
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
