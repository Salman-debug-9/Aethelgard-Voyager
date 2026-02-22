"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Camera, MapPin, Coffee, Mountain, Sparkles, Compass } from "lucide-react";

export default function DestinationTimeline() {
    const data = [
        {
            title: "DAWN",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-accent mb-4">
                        <Sparkles className="w-6 h-6 text-[#E2B259]" />
                        <h4 className="text-xl font-serif text-white uppercase tracking-widest">The Golden Awakening</h4>
                    </div>
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                        Begin your journey at the <span className="text-[#E2B259] font-medium">Kinkaku-ji</span>.
                        As the first rays of light hit the gold leaf pavilion, the reflection in the Mirror Pond creates a vertical symmetry that has inspired poets for centuries.
                        Our private access allows you to experience this in near-silence before the gates open to the public.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(226,178,89,0.1)]">
                            <Image
                                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
                                alt="Golden Pavilion"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="hidden md:block relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]">
                            <Image
                                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=800"
                                alt="Kyoto Zen Garden"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-[0.2em]">
                        <MapPin size={12} className="text-[#E2B259]" />
                        <span>Kita Ward, Kyoto</span>
                    </div>
                </div>
            ),
        },
        {
            title: "ZENITH",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-accent mb-4">
                        <Compass className="w-6 h-6 text-[#E2B259]" />
                        <h4 className="text-xl font-serif text-white uppercase tracking-widest">Paths of the Vermilion</h4>
                    </div>
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                        Venture into the <span className="text-[#E2B259] font-medium">Fushimi Inari Shrine</span>.
                        Walk through the Senbon Torii where the vermilion color represents life and vitality.
                        Your guide will reveal the hidden Fox statues and the spiritual significance of the Inari mountain hike.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(226,178,89,0.1)]">
                            <Image
                                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=800"
                                alt="Fushimi Inari"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="hidden md:block relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]">
                            <Image
                                src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&q=80&w=800"
                                alt="Kyoto Street"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-[0.2em]">
                        <Camera size={12} className="text-[#E2B259]" />
                        <span>Fushimi Ward</span>
                    </div>
                </div>
            ),
        },
        {
            title: "DUSK",
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-accent mb-4">
                        <Coffee className="w-6 h-6 text-[#E2B259]" />
                        <h4 className="text-xl font-serif text-white uppercase tracking-widest">Whispering Bamboo</h4>
                    </div>
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                        Conclude the day at the <span className="text-[#E2B259] font-medium">Arashiyama Bamboo Grove</span>.
                        The sound of the bamboo stalks swaying in the wind is officially recognized by the Ministry of Environment as one of the 100 Soundscapes of Japan.
                        End with a private tea ceremony overlooking the Katsura River.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(226,178,89,0.1)]">
                            <Image
                                src="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?auto=format&fit=crop&q=80&w=800"
                                alt="Bamboo Grove"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="hidden md:block relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]">
                            <Image
                                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800"
                                alt="Tea Ceremony"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-[0.2em]">
                        <Sparkles size={12} className="text-[#E2B259]" />
                        <span>Arashiyama Region</span>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full bg-[#0A192F] py-20">
            <Timeline
                data={data}
                title="THE TIMELESS JOURNEY"
                description="A curated progression through the soul of Kyoto, balancing the ephemeral with the eternal."
            />
        </div>
    );
}
