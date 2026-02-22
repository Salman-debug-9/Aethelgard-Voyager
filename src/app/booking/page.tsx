"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PageHeader from '@/components/layout/PageHeader';
import styles from '@/styles/booking/Booking.module.css';

export default function BookingPage() {
    const [formData, setFormData] = useState({ name: '', guests: 1, date: '', email: '' });
    const [step, setStep] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);

    return (
        <main style={{ background: '#060e1b' }}>
            <Navbar />

            <PageHeader
                title="Secure Your Experience"
                subtitle="Your journey to the extraordinary begins here."
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
            />

            <div className={styles.section}>
                <div className={styles.progressContainer}>
                    <div className={`${styles.progressStep} ${step >= 1 ? styles.activeStep : ''}`}>01 Identity</div>
                    <div className={`${styles.progressStep} ${step >= 2 ? styles.activeStep : ''}`}>02 Itinerary</div>
                    <div className={`${styles.progressStep} ${step >= 3 ? styles.activeStep : ''}`}>03 Manifest</div>
                </div>

                <AnimatePresence mode='wait'>
                    {step === 1 && (
                        <motion.div
                            key={1}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className={styles.card}
                        >
                            <h2 className={styles.heading}>Guest Identity</h2>
                            <div className={styles.group}>
                                <label className={styles.label}>Full Name</label>
                                <input name="name" value={formData.name} onChange={handleChange} className={styles.input} placeholder="Alexander Mercer" />
                            </div>
                            <div className={styles.group}>
                                <label className={styles.label}>Electronic Mail</label>
                                <input name="email" value={formData.email} onChange={handleChange} className={styles.input} placeholder="alex@voyage.com" />
                            </div>
                            <button onClick={handleNext} className={styles.btn}>Continue to Itinerary</button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key={2}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className={styles.card}
                        >
                            <h2 className={styles.heading}>Plan Your Voyage</h2>
                            <div className={styles.group}>
                                <label className={styles.label}>Number of Explorers</label>
                                <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" className={styles.input} />
                            </div>
                            <div className={styles.group}>
                                <label className={styles.label}>Departure Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} />
                            </div>

                            <div className={styles.group}>
                                <label className={styles.label}>Experience Level</label>
                                <select className={styles.select}>
                                    <option>Signature Suite Archive</option>
                                    <option>Private Island Sanctuary (+$2,500)</option>
                                    <option>DeepBlue Sub-Surface Residency (+$8,000)</option>
                                </select>
                            </div>

                            <div className={styles.summary}>
                                <button onClick={() => setStep(1)} className={styles.backBtn}>Back</button>
                                <button onClick={handleNext} className={`${styles.btn} ${styles.payBtn}`}>Initialize Manifest</button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key={3}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`${styles.card} ${styles.confirmation}`}
                        >
                            <h2 className={styles.confirmTitle}>Manifest Secured</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: 30, lineHeight: 1.6 }}>
                                Thank you, {formData.name}. Your itinerary for {formData.date} has been encrypted and added to our archives.
                                A formal invitation has been dispatched to {formData.email}.
                            </p>
                            <div className={styles.refBox}>
                                <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: 10 }}>MANIFEST REFERENCE</p>
                                <p style={{ color: '#c9a96c', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '4px' }}>#AETHEL-{Math.floor(Math.random() * 100000)}</p>
                            </div>
                            <button className={styles.downloadBtn}>Download Digital Itinerary</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </main>
    );
}
