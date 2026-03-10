"use client";

import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AI_TEXT = `从八字流年来看，今年处于一个微妙的交替期。你的事业宫有[伤官生财]{highlight}的迹象，但这需要极强的自驱力。
静待时机，稳中求进。不建议在春季做过大的投资突破，入秋后局面自然会豁然开朗。`;

export function AIChatShowcase() {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    // Parse the text to handle highlights properly
    // This replaces [highlighted text]{highlight} with a span
    const renderText = (text: string) => {
        const parts = text.split(/\[(.*?)\]\{highlight\}/g);
        return parts.map((part, index) => {
            // Even indices are normal text, odd are highlighted
            if (index % 2 === 1) {
                return (
                    <span key={index} className="relative inline-block mx-1">
                        <span className="relative z-10 text-accent font-medium" style={{ textShadow: "0 0 10px rgba(212,175,55,0.4)" }}>{part}</span>
                        <motion.span
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute bottom-0 left-0 h-1/3 bg-accent/20 border-b border-accent/40 z-0 rounded-sm"
                        />
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    useEffect(() => {
        // Only run intersection observer to start typing when scrolled into view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isTyping && displayedText.length === 0) {
                    setIsTyping(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById("ai-chat-trigger");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [isTyping, displayedText]);

    useEffect(() => {
        if (isTyping) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= AI_TEXT.length) {
                    setDisplayedText(AI_TEXT.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setIsTyping(false);
                }
            }, 30); // Typewriter speed

            return () => clearInterval(interval);
        }
    }, [isTyping]);

    return (
        <section className="relative py-32 container mx-auto px-6 z-10" id="ai-chat-trigger">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Text Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight text-white/90">
                        不只是看报告 <br />
                        更是<span className="text-primary font-medium px-2">与智者的对弈</span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        命运并非定数，它是一场需要追问的对话。<br />
                        我们的 AI 模型深度学习了千万命理逻辑，能够针对你的“四柱”进行多维度的推演与陪伴。
                        提出你的烦恼，让它帮你拨开迷雾。
                    </p>
                </div>

                {/* Right: AI Terminal Mockup */}
                <div className="flex-1 w-full max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-white/[0.02] backdrop-blur-2xl relative"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 border-b border-border pb-4 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-4 text-xs font-mono text-white/40 uppercase tracking-widest">ZHIZHI AI Agent</span>
                        </div>

                        {/* Conversation Flow */}
                        <div className="space-y-6">
                            {/* User Message */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <User className="w-4 h-4 text-white/50" />
                                </div>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-[15px] font-light text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                                    我今年事业变动，感觉很迷茫，到底是好是坏？
                                </div>
                            </div>

                            {/* AI Response Stream */}
                            <div className="flex gap-4 group">
                                <div className="relative shrink-0 w-8 h-8">
                                    {isTyping && (
                                        <div className="absolute -inset-1 rounded-full bg-primary/20 blur-sm animate-pulse" />
                                    )}
                                    <div className="absolute inset-0 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                        <Bot className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                                <div className="bg-transparent px-2 py-2 text-[15px] font-light text-white/90 leading-relaxed min-h-[100px] tracking-wide">
                                    {displayedText.length > 0 ? (
                                        <div className="whitespace-pre-wrap">{renderText(displayedText)}</div>
                                    ) : (
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="w-2 h-4 bg-primary inline-block"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
