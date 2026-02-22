"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from '@/styles/tours/PackageListing.module.css';
import { Compass, Sparkles, MapPin, ArrowRight } from "lucide-react";

const packages = [
    {
        id: 1,
        name: "Amazon Expedition",
        price: "$4,500",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200",
        label: "PRISTINE",
        loc: "Brazil",
        coords: "3.4653° S, 62.2159° W"
    },
    {
        id: 2,
        name: "Swiss Alps Ski",
        price: "$6,200",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200",
        label: "ELEVATED",
        loc: "Switzerland",
        coords: "46.8182° N, 8.2275° E"
    },
    {
        id: 3,
        name: "New Zealand Adventure",
        price: "$5,800",
        duration: "10 Days",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
        label: "WILDERNESS",
        loc: "New Zealand",
        coords: "40.9006° S, 174.8860° E"
    },
    {
        id: 4,
        name: "Maldives Private Island",
        price: "$12,000",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200",
        label: "ISOLATION",
        loc: "Maldives",
        coords: "3.2028° N, 73.2207° E"
    },
    {
        id: 5,
        name: "Northern Lights Norway",
        price: "$7,100",
        duration: "6 Days",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1200",
        label: "CELESTIAL",
        loc: "Norway",
        coords: "60.4720° N, 8.4689° E"
    },
    {
        id: 6,
        name: "Patagonia Trek",
        price: "$5,200",
        duration: "9 Days",
        image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=1200",
        label: "UNRULY",
        loc: "Argentina",
        coords: "41.8101° S, 68.9063° W"
    }
];

export default function PackageListing() {
    return (
        <section className={styles.section}>
            <div className={styles.mistLayer}>
                <div className={styles.noise} />
            </div>

            <div className={styles.container}>
                <header className={styles.header}>
                    <motion.span
                        className={styles.collectionLabel}
                        initial={{ opacity: 0, letterSpacing: '0px' }}
                        whileInView={{ opacity: 1, letterSpacing: '12px' }}
                        transition={{ duration: 1.5 }}
                    >
                        THE 2026 SIGNATURE COLLECTION
                    </motion.span>
                    <div className={styles.titleMask}>
                        <motion.h1
                            className={styles.title}
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            CURATED JOURNEYS
                        </motion.h1>
                    </div>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Beyond the horizon lies the extraordinary. Each voyage is a testament to the art of the unknown.
                    </motion.p>
                </header>

                <div className={styles.grid}>
                    {packages.map((pkg, i) => (
                        <TourCard key={pkg.id} pkg={pkg} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TourCard({ pkg, index }: { pkg: typeof packages[0], index: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -50 : 50]);

    return (
        <motion.div
            ref={cardRef}
            className={`${styles.card} ${index % 2 === 1 ? styles.cardStaggered : ''}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ y }}
        >
            <div className={styles.cardFrame}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className={styles.imageOverlay} />

                    <div className={styles.coords}>
                        {pkg.coords}
                    </div>
                </div>

                <div className={styles.overlay}>
                    <div className={styles.locTag}>
                        <MapPin size={12} />
                        <span>{pkg.loc}</span>
                    </div>

                    <div className={styles.labelRow}>
                        <div className={styles.itemLabel}>
                            <Sparkles size={10} className="inline mr-2" />
                            {pkg.label}
                        </div>
                        <div className={styles.duration}>
                            <Compass size={12} className="inline mr-2" />
                            {pkg.duration}
                        </div>
                    </div>

                    <h3 className={styles.cardTitle}>{pkg.name}</h3>

                    <div className={styles.priceRow}>
                        <span className={styles.priceLabel}>Starting from</span>
                        <span className={styles.price}>{pkg.price}</span>
                    </div>

                    <motion.button
                        className={styles.viewBtn}
                        whileHover={{ gap: '30px', color: 'var(--accent)' }}
                    >
                        EXPLORE NARRATIVE
                        <ArrowRight size={16} />
                    </motion.button>
                </div>

                <div className={styles.decoLine} />
            </div>
        </motion.div>
    );
}
