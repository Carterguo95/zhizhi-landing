"use client";

import { motion } from "framer-motion";
import { Sparkles, Moon, Sun, Activity, ArrowRightLeft } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

// We removed cardVariants from here since it's now internal to SpotlightCard

export function BentoGridFeatures() {
    return (
        <section className="relative py-32 container mx-auto px-6 z-10">
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-white/90">
                    精密测算 <span className="text-white/40">与</span> 人生洞察
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
                    Experience hyper-personal insights through our Apple-tier predictive engine.
                </p>
            </div>

            {/* Bento Grid layout */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
                {/* Card 1: Destiny Chart (Large) */}
                <SpotlightCard className="md:col-span-2 p-8 flex flex-col justify-between min-h-[320px] cursor-pointer group">
                    <div className="absolute top-4 right-6 text-[10px] text-white/30 font-mono tracking-widest hidden sm:block">ASTRO.ARCHIVE_VAL::OX9</div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-serif font-medium mb-3 flex items-center gap-2 text-white/90 tracking-wide">
                            <Sun className="w-5 h-5 text-accent opacity-80" /> 宇宙档案
                        </h3>
                        <p className="text-muted-foreground max-w-sm mb-6 font-light">
                            Your exact time of birth mapped into a sophisticated natal quadrant.
                            Not just signs, but the precise elements that govern your core.
                        </p>
                    </div>

                    {/* Abstract graphic representing astrology chart */}
                    <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 border border-white/10 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-48 h-48 border border-accent/30 rounded-full flex items-center justify-center animate-[spin_120s_linear_infinite]">
                            <div className="w-32 h-32 border border-white/10 rounded-full" />
                            <div className="absolute w-full h-[1px] bg-white/20 right-0 transform rotate-45" />
                            <div className="absolute w-full h-[1px] bg-white/20 right-0 transform -rotate-45" />
                        </div>
                    </div>

                    <div className="mt-auto z-10">
                        <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 inline-block text-[13px] text-white/70 group-hover:bg-white/10 group-hover:border-white/20 transition-all cursor-crosshair">
                            当前排盘: <span className="text-accent/90 font-medium ml-1">甲木 · 伤官生财</span>
                        </div>
                    </div>
                </SpotlightCard>

                {/* Card 2: Daily Mood (Tall) */}
                <SpotlightCard className="p-8 flex flex-col cursor-pointer group">
                    <div className="absolute top-4 right-6 text-[10px] text-white/30 font-mono tracking-widest hidden sm:block">SYNC: DAILY_WAVE</div>
                    <div className="mb-6">
                        <h3 className="text-xl font-serif font-medium mb-3 flex items-center gap-2 text-white/90 tracking-wide">
                            <Activity className="w-5 h-5 text-primary opacity-80" /> 灵魂预报
                        </h3>
                        <p className="text-muted-foreground text-sm font-light">
                            Daily fluctuation analysis based on current astral transits.
                        </p>
                    </div>

                    {/* Abstract Wave */}
                    <div className="mt-auto h-32 w-full flex items-end justify-between gap-2 overflow-hidden px-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                        {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                className={cn("w-full rounded-t-sm transition-all", height > 70 ? "bg-accent/40 hover:bg-accent/60" : "bg-white/10 hover:bg-white/20")}
                            />
                        ))}
                    </div>
                </SpotlightCard>

                {/* Card 3: Deep Insights (Small) */}
                <SpotlightCard className="p-8 cursor-pointer group">
                    <div className="absolute top-4 right-6 text-[10px] text-white/30 font-mono tracking-widest hidden sm:block">DIM::X5</div>
                    <h3 className="text-xl font-serif font-medium mb-3 flex items-center gap-2 text-white/90 tracking-wide mt-2">
                        <Moon className="w-5 h-5 text-white/60" /> 沉浸洞察
                    </h3>
                    <p className="text-muted-foreground text-sm font-light mb-6">
                        Explore 5 dimensions of your life path: Career, Wealth, Love, Health, and Inner Peace.
                    </p>
                    <div className="flex gap-2">
                        <span className="text-xs px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer">Career</span>
                        <span className="text-xs px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all cursor-pointer">Love</span>
                    </div>
                </SpotlightCard>

                {/* Card 4: Relational Synergies (Wide) */}
                <SpotlightCard className="md:col-span-2 p-8 cursor-pointer group flex items-center justify-between">
                    <div className="absolute top-4 right-6 text-[10px] text-white/30 font-mono tracking-widest hidden sm:block">REL::SYNERGY</div>
                    <div>
                        <h3 className="text-xl font-serif font-medium mb-3 flex items-center gap-2 text-white/90 tracking-wide">
                            <ArrowRightLeft className="w-5 h-5 text-[#6B8E23] opacity-80" /> 人际气场 (Synergy)
                        </h3>
                        <p className="text-muted-foreground text-sm font-light max-w-md">
                            Check compatibility profiles. Navigate your relationships with family, friends, and colleagues precisely.
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 relative z-10">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full border border-primary/20 animate-ping opacity-20" />
                            <div className="w-12 h-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]">You</div>
                        </div>
                        <Sparkles className="w-4 h-4 text-accent/80 group-hover:text-accent group-hover:scale-125 transition-transform" />
                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground text-xs group-hover:bg-white/10 transition-colors">Them</div>
                    </div>
                </SpotlightCard>
            </motion.div>
        </section>
    );
}
