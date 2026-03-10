"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function TrustMetrics() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start: number | null = null;
            const target = 328500;
            const duration = 2500; // 2.5 seconds

            const updateCounter = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);

                // easeOutExpo for a very smooth dramatic slow down at the end
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(easeOutExpo * target));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [isInView]);

    return (
        <section className="relative py-24 border-y border-white/5 bg-white/[0.02] overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center space-y-4"
                >
                    <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-2">
                        驱动底层架构进化的原生累积训练命盘
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-8xl font-serif font-light text-white tracking-tighter">
                            {count.toLocaleString()}<span className="text-accent">+</span>
                        </span>
                    </div>
                    <p className="text-white/60 text-lg md:text-xl font-light mt-6 max-w-5xl mx-auto leading-relaxed">
                        基于万千真实命盘构建的进化模型，你的每一次交互都在提供强化学习（RL）反馈，<br className="hidden md:block" />
                        随着驱动算力持续演进和数据扩张，为你带来前所未有的颗粒度与精准解析。
                    </p>
                </motion.div>
            </div>

            {/* Decorative side lines */}
            <div className="absolute left-0 top-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-accent/20" />
            <div className="absolute right-0 bottom-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-accent/20" />
        </section>
    );
}
