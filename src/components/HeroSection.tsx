"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import type { CSSProperties } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

export function HeroSection() {
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22 });
    const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22 });
    const bandX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
    const bandY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
    const bandRotate = useTransform(smoothX, [-0.5, 0.5], [-14, -7]);

    return (
        <section className="hero-section page-shell" id="top" aria-labelledby="hero-title">
            <motion.div
                className="hero-copy"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
                <p className="section-kicker section-kicker-line">主动式人生决策系统</p>
                <h1 id="hero-title">提前看见，<br />你此刻真正<br />该问的问题。</h1>
                <p className="hero-lead">
                    不是替你决定。知之从你的稳定画像与当下时机出发，把模糊感受组织成值得理解的问题，再陪你走向行动。
                </p>
                <div className="hero-form" id="hero-waitlist">
                    <WaitlistForm />
                </div>
                <a className="hero-scroll-cue" href="#method">
                    <span>看见知之如何工作</span>
                    <ArrowDownRight aria-hidden="true" />
                </a>
            </motion.div>

            <motion.div
                className="time-instrument"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                onPointerMove={(event) => {
                    const bounds = event.currentTarget.getBoundingClientRect();
                    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
                    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
                }}
                onPointerLeave={() => {
                    pointerX.set(0);
                    pointerY.set(0);
                }}
            >
                <motion.div className="time-refraction-band" style={{ x: bandX, y: bandY, rotate: bandRotate }} aria-hidden="true" />
                <div className="time-exposure" aria-hidden="true" />
                <div className="time-dial">
                    <div className="time-ring time-ring-outer" aria-hidden="true">
                        {branches.map((branch, index) => (
                            <span
                                key={branch}
                                className="branch-mark"
                                style={{ "--branch-angle": `${index * 30}deg` } as CSSProperties}
                            >
                                {branch}
                            </span>
                        ))}
                    </div>
                    <div className="time-ring time-ring-middle" aria-hidden="true" />
                    <div className="time-ring time-ring-inner" aria-hidden="true" />
                    <div className="today-judgement">
                        <p className="today-meta">今日 · 丙戌日</p>
                        <h2>先稳住边界，<br />再推动变化。</h2>
                        <p>事业主题正在升温。今天值得先看见的，是你对“时机”的犹豫。</p>
                        <div className="today-divider" />
                        <span>查看完整解析 <b>→</b></span>
                    </div>
                </div>
                <p className="instrument-data instrument-data-top">FORTUNE DATE 2026.07.13<br />PROFILE 01 · OWNER</p>
                <p className="instrument-data instrument-data-bottom">SELF × TIMING × INTENT<br />ARCHIVE UPDATED TODAY</p>
            </motion.div>
        </section>
    );
}
