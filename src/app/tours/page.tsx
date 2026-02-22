"use client";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PackageListing from '@/components/tours/PackageListing';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ToursPage() {
    return (
        <main style={{ background: 'var(--primary)' }}>
            <Navbar />
            <div style={{ height: '70vh', overflow: 'hidden', position: 'relative' }}>
                <Image
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1920"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    alt="Tours Hero"
                    sizes="100vw"
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(10,25,47,0.4), var(--primary))',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1
                }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ color: 'var(--accent)', letterSpacing: '8px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}
                    >
                        EXPLORE THE EXTRAORDINARY
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ color: 'white', fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 300, fontFamily: 'var(--font-serif)', textAlign: 'center', letterSpacing: '-2px' }}
                    >
                        Our Collections
                    </motion.h1>
                </div>
            </div>
            <PackageListing />
            <Footer />
        </main>
    );
}
