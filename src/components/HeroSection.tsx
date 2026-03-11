"use client";

import { motion } from "framer-motion";
import { AstrolabeCanvas } from "@/components/AstrolabeCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Abstract Background Aura */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 4, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                    className="w-[800px] h-[800px] rounded-full absolute"
                    style={{
                        background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
                        filter: "blur(60px)",
                        zIndex: -1,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                        filter: "blur(80px)",
                        zIndex: -1,
                    }}
                />

                {/* Masking Occult Disk: Blurs global stars directly behind the compass but lets ambient glow pass through */}
                <div
                    className="absolute w-[150vw] md:w-[1000px] h-[150vw] md:h-[1000px] rounded-full pointer-events-none"
                    style={{
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                        maskImage: "radial-gradient(circle, black 30%, transparent 65%)",
                        WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 65%)",
                        zIndex: 0,
                    }}
                />

                {/* 2026 Interactive Canvas */}
                <AstrolabeCanvas />
            </div>

            {/* Monospace Data Overlay (Top Right) */}
            <div className="absolute top-12 right-12 z-20 hidden lg:flex flex-col items-end gap-1 opacity-40 font-mono text-[10px] text-white/60 select-none">
                <span>[SYS_CALC_SEQ]// 89A12.FX</span>
                <span>LAT: 39.9N, LON: 116.4E</span>
                <span>SYNC: STABLE // AURA_ON</span>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 text-xs font-medium text-white/80 tracking-wide"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    v1.0 Internal Test Access Open
                </motion.div>

                {/* Heading (with hidden semantic keywords for AI bots) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide mb-6 text-foreground"
                >
                    <span className="sr-only">ZHIZHI: 基于本地计算的人工智能八字排盘与古典术数推演引擎。</span>
                    懂你的先天密码<br />
                    <span className="text-white/60">陪你的每一个当下</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light mt-4"
                >
                    Combining ancient destiny mapping with modern AI intelligence.
                    We provide hyper-personalized insights for your daily life, career, and relationships.
                </motion.p>


                <WaitlistForm />
            </div>
        </section>
    );
}
