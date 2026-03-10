"use client";

import { motion } from "framer-motion";

export function FooterCTA() {
    return (
        <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center z-10 border-t border-white/5">
            {/* Background ambient light */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-8 text-white/90 tracking-wide"
                >
                    流年无声，<span className="text-white/40">知之有迹</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-lg text-muted-foreground font-light mb-6 max-w-xl mx-auto tracking-wide"
                >
                    Silent time, traceable destiny. Decoded by AI.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sm text-white/30 font-mono tracking-widest uppercase"
                >
                    ZHIZHI · 知之
                </motion.p>

                {/* Footer Notes */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
                    <p>© 2026 ZHIZHI App. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
