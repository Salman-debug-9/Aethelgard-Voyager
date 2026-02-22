"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import styles from '@/styles/misc/Tools.module.css';
import { CloudSun, RefreshCw, Globe, ArrowRight } from 'lucide-react';

export default function SmartToolsPage() {
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("USD");
    const result = currency === "USD" ? amount * 0.92 : amount * 1.09;

    return (
        <main style={{ background: 'var(--background)' }}>
            <PageHeader
                title="Travel Toolkit"
                subtitle="Essential utilities for the modern explorer"
                image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1920&auto=format&fit=crop"
            />

            <div className={styles.section}>

                {/* Weather Simulator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.card}
                >
                    <h2 className={styles.heading}>
                        <CloudSun size={24} color="var(--primary)" /> Live Weather
                    </h2>
                    <div className={styles.weather}>
                        <div>
                            <h3 className={styles.temp}>24°C</h3>
                            <p>Sunny, Light Breeze</p>
                            <p style={{ color: '#888', marginTop: 5 }}>Kyoto, Japan</p>
                        </div>
                        <CloudSun size={60} color="#fdb813" />
                    </div>
                </motion.div>

                {/* Currency Converter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className={styles.card}
                >
                    <h2 className={styles.heading}>
                        <RefreshCw size={24} color="var(--secondary)" /> Currency
                    </h2>
                    <div className={styles.converter}>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                            className={styles.input}
                            style={{ flex: 1 }}
                        />
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className={styles.select}
                        >
                            <option value="USD">USD to EUR</option>
                            <option value="EUR">EUR to USD</option>
                        </select>
                    </div>
                    <p className={styles.result}>
                        {result.toFixed(2)} {currency === "USD" ? "EUR" : "USD"}
                    </p>
                </motion.div>

                {/* Visa Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className={styles.card}
                >
                    <h2 className={styles.heading}>
                        <Globe size={24} color="#888" /> Visa Check
                    </h2>
                    <input placeholder="Nationality (e.g. USA)" className={`${styles.input} ${styles.visaInput}`} />
                    <input placeholder="Destination (e.g. Japan)" className={`${styles.input} ${styles.visaInput}`} />
                    <button className={styles.btn}>Check Requirements</button>
                </motion.div>

            </div>
            <Footer />
        </main>
    );
}
