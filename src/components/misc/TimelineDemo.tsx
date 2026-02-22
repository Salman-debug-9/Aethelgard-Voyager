"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Sparkles, MapPin, Wind, Flame, X, ArrowRight, Compass, Globe, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import styles from '@/styles/blog/Blog.module.css'; // Reusing some base modal styles

const JOURNEY_DATA = [
    {
        id: "2024",
        title: "2024",
        label: "The Golden Era",
        icon: <Sparkles className="text-yellow-500 w-5 h-5" />,
        accent: "yellow",
        summary: "Launched the Celestial Collection, bringing private jet expeditions to the furthest reaches of the Patagonian wilderness.",
        coords: "49.3323° S, 72.8858° W",
        mainImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200",
        article: {
            title: "Celestial Horizons: The Peak of Patagonia",
            subtitle: "Redefining the altitude of luxury travel.",
            content: [
                "In the spring of 2024, our vision for 'High-Altitude Sovereignty' became a reality. We successfully established a network of three ultra-exclusive base camps at the foot of Mount Fitz Roy.",
                "Every suite in the Celestial Collection is a masterpiece of carbon-neutral engineering, featuring 360-degree 'Sky-Glaze' walls that dissolve the boundary between guest and glacier.",
                "Our partnership with local conservationist groups ensures that for every journey undertaken, ten hectares of pristine Patagonian forests are permanently protected."
            ],
            gallery: [
                "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1200",
                "https://images.unsplash.com/photo-1473615695634-d284ec918736?q=80&w=1200"
            ],
            specs: [
                { label: "ALTITUDE", value: "3,405M" },
                { label: "STATUS", value: "COMPLETED" },
                { label: "COORD", value: "49.33° S" }
            ]
        }
    },
    {
        id: "2022",
        title: "2022",
        label: "Oceanic Depths",
        icon: <Wind className="text-blue-400 w-5 h-5" />,
        accent: "blue",
        summary: "Redefining luxury sub-surface exploration with the first DeepBlue Residence in the Maldives.",
        coords: "3.2028° N, 73.2207° E",
        mainImage: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200",
        article: {
            title: "Sub-Surface Sovereignty",
            subtitle: "When the sky is no longer the limit, we look below.",
            content: [
                "The 2022 expansion into the Maldivian deep-sea trenches marked a technological milestone. The DeepBlue Residence represents our first permanent sub-aquatic installation.",
                "Using bio-luminescent lighting systems, we've created a nocturnal viewing experience that rivals the stars above, anchored 15 meters below the Indian Ocean.",
                "Guests are invited to witness the mysterious migrations of deep-sea manta rays from the comfort of reinforced titanium sleeping quarters."
            ],
            gallery: [
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
                "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1200"
            ],
            specs: [
                { label: "DEPTH", value: "15M" },
                { label: "STATUS", value: "ACTIVE" },
                { label: "COORD", value: "3.20° N" }
            ]
        }
    },
    {
        id: "heritage",
        title: "Heritage",
        label: "The Origin",
        icon: <Flame className="text-orange-500 w-5 h-5" />,
        accent: "orange",
        summary: "Founded on the principle of 'Unspoken Luxury,' our journey began in a small atelier in Kyoto.",
        coords: "35.0116° N, 135.7681° E",
        mainImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
        article: {
            title: "The Kyoto Atelier: Where Stories Begin",
            subtitle: "Bespoke narratives crafted with century-old precision.",
            content: [
                "Our story didn't start with hotels or jets. It began with maps. In 1988, a small group of explorers gathered in Kyoto to solve a single problem: how to travel in a way that feels like poetry.",
                "For the first decade, we handled exclusively royal and diplomatic entourages, specializing in the 'Gilded Path' journeys throughout Asia.",
                "Today, that same atelier serves as our global headquarters for narrative design, where every itinerary is still handcrafted by masters."
            ],
            gallery: [
                "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200",
            ],
            specs: [
                { label: "FOUNDED", value: "1988" },
                { label: "ORIGIN", value: "KYOTO" },
                { label: "TRADITION", value: "35+ YRS" }
            ]
        }
    }
];

export function TimelineDemo() {
    const [selectedItem, setSelectedItem] = useState<any>(null);

    React.useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [selectedItem]);

    const timelineItems = JOURNEY_DATA.map((item, i) => ({
        title: item.title,
        content: (
            <div className="space-y-12 pb-24">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        {item.icon}
                        <span className={`text-[10px] tracking-[4px] font-bold uppercase text-${item.accent}-500`}>{item.label}</span>
                    </div>
                    <p className="text-neutral-300 text-sm md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
                        {item.summary}
                    </p>

                    <button
                        onClick={() => setSelectedItem(item)}
                        className="flex items-center gap-4 text-white text-[10px] tracking-[4px] font-bold uppercase border-b border-white/20 pb-2 hover:border-white transition-all group"
                    >
                        Read Full Archive <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <AnimatedImage
                        src={item.mainImage}
                        offset={0}
                        coords={item.coords}
                        onClick={() => setSelectedItem(item)}
                    />
                    <AnimatedImage
                        src={item.article.gallery[0]}
                        offset={0.2}
                        onClick={() => setSelectedItem(item)}
                    />
                </div>
            </div>
        )
    }));

    return (
        <div className="w-full bg-[#0A192F] relative min-h-screen">
            <Timeline
                data={timelineItems}
                title="THE CONTINUUM"
                description="Charting our evolution from a singular vision to a global standard of rare experiences."
            />

            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-lenis-prevent
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>
                                <X size={32} />
                            </button>

                            <div className={styles.articleHero}>
                                <Image src={selectedItem.mainImage} alt={selectedItem.title} fill priority unoptimized className={styles.heroImg} />
                                <div className={styles.heroOverlay} />
                                <div className={styles.heroContent}>
                                    <div className={styles.articleMeta}>
                                        <Compass size={14} /> <span>{selectedItem.coords}</span>
                                        <Globe size={14} /> <span>EXHIBITION ARCHIVE</span>
                                    </div>
                                    <h2 className={styles.articleTitle}>{selectedItem.article.title}</h2>
                                </div>
                            </div>

                            <div className={styles.articleBody}>
                                <div className={styles.articleGrid}>
                                    <div className={styles.mainContent}>
                                        {selectedItem.article.content.map((p: string, i: number) => (
                                            <p key={i}>{p}</p>
                                        ))}

                                        <div className={styles.articleGallery}>
                                            {selectedItem.article.gallery.map((img: string, i: number) => (
                                                <div key={i} className={styles.galleryItem}>
                                                    <Image src={img} alt="Gallery" fill unoptimized className={styles.galleryImg} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <aside className={styles.sidebar}>
                                        <div className={styles.sidebarWidget}>
                                            <h4>SPECIFICATIONS</h4>
                                            <div className="grid grid-cols-1 gap-6">
                                                {selectedItem.article.specs.map((spec: any, i: number) => (
                                                    <div key={i}>
                                                        <span className="block text-[8px] text-white/30 tracking-[4px] font-bold mb-1">{spec.label}</span>
                                                        <span className="text-white font-serif text-xl">{spec.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.sidebarWidget}>
                                            <h4>SHARE ARCHIVE</h4>
                                            <div className={styles.shareRow}>
                                                <Share2 size={20} />
                                                <Bookmark size={20} />
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function AnimatedImage({ src, offset, coords, onClick }: { src: string, offset: number, coords?: string, onClick?: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: offset, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative h-64 md:h-[550px] w-full group cursor-pointer"
            onClick={onClick}
        >
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 transition-transform duration-1000 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="relative h-full w-full overflow-hidden border border-white/20 bg-[#060e1b]">
                <Image
                    src={src}
                    alt="milestone"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                />
                {coords && (
                    <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-60 transition-all duration-700 flex items-center gap-3">
                        <div className="w-[1px] h-6 bg-yellow-500" />
                        <span className="text-white text-[9px] tracking-[4px] font-mono">{coords}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
        </motion.div>
    );
}
