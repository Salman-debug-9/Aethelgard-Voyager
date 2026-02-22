"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import Navbar from '@/components/layout/Navbar';
import styles from '@/styles/blog/Blog.module.css';
import { X, Calendar, User, Clock, ArrowRight, Share2, Bookmark } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: 'The Hidden Gems of Santorini',
        excerpt: 'Beyond the crowded caldera views lies a world of ancient ruins and local wineries.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
        date: 'Oct 24, 2024',
        author: 'Elena Rossi',
        readTime: '8 min read',
        content: [
            "Santorini is often described by its iconic blue domes and white-washed walls, but to truly understand the spirit of this volcanic island, one must venture beyond the cruise-ship crowds of Oia.",
            "Start your morning at Akrotiri, the 'Minoan Pompeii.' This prehistoric city, preserved in volcanic ash, offers a hauntingly beautiful glimpse into a civilization that flourished 3,600 years ago. Unlike the bustling streets of Fira, here you can walk through ancient squares in contemplative silence.",
            "For wine enthusiasts, the island's volcanic soil produces 'Assyrtiko,' a crisp white wine like no other. We recommend the Vassaltis Vineyards near Vourvoulos. It's a modern architectural marvel that honors ancient traditions, where you can taste the sea salt and flint in every glass.",
            "The final secret? Ammoudi Bay at dusk. While everyone else watches the sunset from the walls above, settle into a table at a local taverna at the water's edge. The red cliffs glowing in the dying light, paired with fresh octopus drying in the sun, is the Santorini nobody tells you about."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200',
            'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200'
        ]
    },
    {
        id: 2,
        title: 'Packing for Patagonia',
        excerpt: 'The ultimate guide to preparing for the unpredictable weather of the southern tip of the world.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
        date: 'Sep 12, 2024',
        author: 'Marcus Thorne',
        readTime: '12 min read',
        content: [
            "In Patagonia, weather is not a footnote; it is the protagonist. It is not uncommon to experience the warmth of spring, the gales of autumn, and the snow of winter all before lunch.",
            "The philosophy for Patagonia is simple: The Rule of Three. A moisture-wicking base layer for breathability, a fleece or down mid-layer for insulation, and a robust, waterproof shell to break the legendary winds that sweep across the Magellanic plains.",
            "Do not skimp on your footwear. The trails around El Chaltén and Torres del Paine are rugged, unforgiving, and often wet. A Gore-Tex boot with high ankle support isn't a luxury—it's safety equipment.",
            "Beyond the gear, remember to pack for the soul. A high-quality pair of binoculars will transform your experience, allowing you to spot the elusive Andean Condor as it glides over the granite peaks of Fitz Roy. Patagonia is a land of scale; make sure you have the tools to see it."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200',
            'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=1200'
        ]
    },
    {
        id: 3,
        title: 'Luxury Train Travel in Japan',
        excerpt: 'Why the Seven Stars in Kyushu is the most exclusive ticket in the world.',
        image: 'https://images.unsplash.com/photo-1557053503-0c252e5c8093?q=80&w=1200&auto=format&fit=crop',
        date: 'Aug 05, 2024',
        author: 'Kenji Sato',
        readTime: '15 min read',
        content: [
            "The 'Seven Stars' in Kyushu is not a train journey; it is a moving ryokan, a multi-million dollar masterpiece crafted from rosewood, maple, and Kumiko woodwork.",
            "With only 10 suites per journey, the level of service is unprecedented. Every meal is a tribute to the Kyushu region, featuring seasonal seafood from the Bungo Channel and the legendary Saga beef, served on fine Arita porcelain.",
            "The true luxury, however, is the pace. As the train winds through the emerald forests and past the smoking peaks of Mt. Aso, time seems to slow down. The panoramic windows of the Blue Moon lounge car turn the Japanese landscape into a series of living paintings.",
            "Securing a ticket often requires entering a lottery months in advance, but for those who succeed, it offers a glimpse into an older, more elegant Japan that still breathes beneath the neon of Tokyo."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
        ]
    },
    {
        id: 4,
        title: 'Culinary Secrets of Lyon',
        excerpt: 'A gastronomic tour through the bouchons of France’s food capital.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
        date: 'July 18, 2024',
        author: 'Isabelle Blanc',
        readTime: '10 min read',
        content: [
            "While Paris has the stars, Lyon has the soul. To eat in Lyon is to participate in a centuries-old tradition of the 'Mères Lyonnaises'—the legendary female chefs who defined the city's palate.",
            "A true Lyonnaise experience must begin in a 'Bouchon.' These small, conviviality-focused restaurants serve hearty fare like 'Quenelle de brochet' and 'Salade Lyonnaise.' Look for the official seal of authenticity on the window; anything less is just dinner.",
            "Visit Les Halles de Lyon Paul Bocuse early in the morning. This covered market is a cathedral of gastronomy. From Saint-Marcellin cheese by Mère Richard to the chocolates of Bernachon, it is a sensory overload that will ruin you for ordinary supermarkets forever.",
            "Walk off your indulgence through the Traboules of the Old Town. These hidden passageways were used by silk weavers for centuries, and they offer a mysterious, architectural digestif to a day spent eating through the greatest food city on earth."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200',
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200'
        ]
    },
    {
        id: 5,
        title: 'Arctic Silence: Svalbard',
        excerpt: 'Chasing the Aurora Borealis in the northernmost inhabited town on Earth.',
        image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2000&auto=format&fit=crop',
        date: 'Jun 30, 2024',
        author: 'Lars Nordberg',
        readTime: '11 min read',
        content: [
            "Svalbard is a land of sensory deprivation and overload all at once. In the winter, the Polar Night turns the world into a deep indigo, lit only by the electric green of the Northern Lights.",
            "To travel here is to realize your smallness. Beyond the safety of Longyearbyen, the tundra belongs to the polar bears. Every expedition is a lesson in respect for nature's raw power.",
            "But in the silence of the glaciers, there is a peace that exists nowhere else. It is a place where time is measured not in hours, but in the slow groan of moving ice."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1200',
        ]
    },
    {
        id: 6,
        title: 'Serengeti Dreams: Tanzania',
        excerpt: 'A journey through the Great Migration on the endless plains of East Africa.',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop',
        date: 'May 22, 2024',
        author: 'Sarah Jenkins',
        readTime: '14 min read',
        content: [
            "The Serengeti does not reveal itself all at once. It’s a rhythmic pulse—the thunder of a million hooves, the golden sweep of the savanna, the sudden silence when a predator is near.",
            "Watching the migration is like witnessing the breath of the planet. It is life in its most unfiltered, urgent form. From a hot air balloon at dawn, the scale of this ancient move is breathtaking.",
            "Our luxury eco-camps are designed to leave no trace, offering a front-row seat to this drama while ensuring the preservation of this sacred ecosystem for generations to come."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200'
        ]
    },
    {
        id: 7,
        title: 'Bhutan: The Last Shangri-La',
        excerpt: 'Exploring the high-altitude monasteries and valley secrets of the Thunder Dragon.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000&auto=format&fit=crop',
        date: 'Apr 11, 2024',
        author: 'Tenzing Dorji',
        readTime: '9 min read',
        content: [
            "In Bhutan, happiness is the national metric. It is a kingdom that resisted the modern world for centuries, preserving its deep Buddhist traditions and pristine landscapes.",
            "The hike to the Tiger’s Nest monastery is a pilgrimage of the heart. Clinging to a cliffside 3,000 meters above the valley floor, it is a testament to faith and architectural daring.",
            "To walk through the dzongs of Punakha or the forests of Paro is to step back into a time where spirituality and daily life are inextricably linked."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1531816247963-c7b28072d65d?q=80&w=1200',
            'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=1200'
        ]
    },
    {
        id: 8,
        title: 'Amalfi Gold: Italy',
        excerpt: 'Navigating the vertical vineyards and coastal charm of the Tyrrhenian Sea.',
        image: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=2000&auto=format&fit=crop',
        date: 'Mar 05, 2024',
        author: 'Luca Moretti',
        readTime: '10 min read',
        content: [
            "The Amalfi Coast is a pastel-colored dream carved into the limestone cliffs. It’s a place where the scent of lemon blossoms mixes with the salt of the Mediterranean.",
            "Positano, with its vertical streets and hidden coves, is best experienced by sea. From a private wooden Riva boat, the architecture looks like a waterfall of colorful houses cascading into the turquoise water.",
            "The true luxury of Amalfi lies in the 'Dolce Far Niente'—the sweetness of doing nothing. A long lunch on a sun-drenched terrace with a glass of local Furore wine is the ultimate coastal ritual."
        ],
        gallery: [
            'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200'
        ]
    }
];

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState<any>(null);

    React.useEffect(() => {
        if (selectedPost) {
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
    }, [selectedPost]);

    return (
        <main className={styles.main}>
            <Navbar />
            <PageHeader
                title="The Journal"
                subtitle="Curated narratives from the world's most remote corners"
                image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop"
            />

            <div className={styles.container}>
                <div className={styles.grid}>
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={styles.card}
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className={styles.image}
                                    unoptimized
                                />
                                <div className={styles.cardOverlay}>
                                    <span className={styles.tag}>{post.readTime}</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span>{post.date}</span>
                                    <span className={styles.dot}>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.readLink}>Read Full Article</span>
                                    <ArrowRight size={16} className={styles.arrow} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-lenis-prevent
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setSelectedPost(null)}
                            >
                                <X size={32} />
                            </button>

                            <div className={styles.articleHeader}>
                                <div className={styles.articleHero}>
                                    <Image
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        fill
                                        priority
                                        unoptimized
                                        className={styles.heroImg}
                                    />
                                    <div className={styles.heroOverlay} />
                                    <div className={styles.heroContent}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className={styles.articleMeta}>
                                                <Calendar size={14} /> <span>{selectedPost.date}</span>
                                                <User size={14} /> <span>{selectedPost.author}</span>
                                                <Clock size={14} /> <span>{selectedPost.readTime}</span>
                                            </div>
                                            <h2 className={styles.articleTitle}>{selectedPost.title}</h2>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.articleBody}>
                                <div className={styles.articleGrid}>
                                    <div className={styles.mainContent}>
                                        {selectedPost.content.map((para: string, i: number) => (
                                            <p key={i}>{para}</p>
                                        ))}

                                        <div className={styles.articleGallery}>
                                            {selectedPost.gallery.map((img: string, i: number) => (
                                                <div key={i} className={styles.galleryItem}>
                                                    <Image src={img} alt="Gallery" fill unoptimized className={styles.galleryImg} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <aside className={styles.sidebar}>
                                        <div className={styles.sidebarWidget}>
                                            <h4>SHARE STORY</h4>
                                            <div className={styles.shareRow}>
                                                <Share2 size={20} />
                                                <Bookmark size={20} />
                                            </div>
                                        </div>
                                        <div className={styles.sidebarWidget}>
                                            <h4>RELATED VOYAGES</h4>
                                            <p>Our Signature Tours matching this region are available for booking.</p>
                                            <button className={styles.sidebarBtn}>View Tours</button>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
