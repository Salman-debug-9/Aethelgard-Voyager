"use client";
import Image from "next/image";
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/layout/PageHeader.module.css';

export default function PageHeader({ title, subtitle, image }: { title: string, subtitle?: string, image?: string }) {
    return (
        <div className={styles.header}>
            <div className={styles.imageContainer}>
                <Image
                    src={image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop"}
                    alt={title}
                    fill
                    priority
                    className={styles.image}
                    sizes="100vw"
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
