"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({
    data,
    title,
    description
}: {
    data: TimelineEntry[],
    title?: string,
    description?: string
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                setHeight(ref.current.scrollHeight);
            }
        };

        updateHeight();
        // Use ResizeObserver for more reliable height tracking as content loads
        const observer = new ResizeObserver(updateHeight);
        if (ref.current) observer.observe(ref.current);
        window.addEventListener('resize', updateHeight);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-[#0A192F] font-sans md:px-10"
            ref={containerRef}
        >
            {title && (
                <div className="max-w-7xl mx-auto py-32 px-4 md:px-8 lg:px-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-8xl mb-8 text-white max-w-4xl font-serif tracking-tighter leading-none">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-neutral-500 text-base md:text-xl max-w-xl font-light leading-relaxed tracking-wide">
                                {description}
                            </p>
                        )}
                    </motion.div>

                    {/* Infinite Marquee */}
                    <div className="absolute -bottom-10 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-10">
                        <motion.div
                            className="flex"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <span key={i} className="text-[15vw] font-black text-white italic tracking-tighter uppercase inline-block pr-20">
                                    {title}•
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center border border-white/10">
                                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 uppercase tracking-tighter">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 uppercase">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#E2B259] via-blue-500 to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_15px_#E2B259]"
                    />
                </div>
            </div>
        </div>
    );
};
