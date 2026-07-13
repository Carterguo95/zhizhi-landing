"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { AstrolabeCanvas } from "@/components/AstrolabeCanvas";
import { WaitlistForm } from "@/components/WaitlistForm";

export function HeroSection() {
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24 });
    const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24 });
    const planeX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
    const planeY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
    const cardX = useTransform(smoothX, [-0.5, 0.5], [9, -9]);
    const cardY = useTransform(smoothY, [-0.5, 0.5], [7, -7]);

    return (
        <section className="hero-section page-shell" id="top" aria-labelledby="hero-title">
            <motion.div
                className="hero-copy"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hero-index-row">
                    <p className="section-kicker section-kicker-line">01 / 主动式人生决策系统</p>
                    <span>TIME REFRACTION ARCHIVE</span>
                </div>
                <h1 id="hero-title">提前看见，<br />你此刻真正<br />该问的问题。</h1>
                <p className="hero-lead">
                    知之从你的稳定画像与当下时机出发，把还没有说出口的感受，显影成值得理解、追问和行动的主题。
                </p>
                <div className="hero-form" id="hero-waitlist">
                    <WaitlistForm />
                </div>
                <a className="hero-scroll-cue" href="#method">
                    <span>进入时间校准</span>
                    <ArrowDownRight aria-hidden="true" />
                </a>
            </motion.div>

            <motion.div
                className="time-instrument"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                onPointerMove={(event) => {
                    const bounds = event.currentTarget.getBoundingClientRect();
                    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
                    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
                }}
                onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
            >
                <motion.div className="hero-spectrum-plane" style={{ x: planeX, y: planeY }} />
                <div className="hero-exposure-window" aria-hidden="true" />
                <div className="astrolabe-stage">
                    <AstrolabeCanvas />
                    <motion.div className="today-judgement" style={{ x: cardX, y: cardY }}>
                        <p className="today-meta">今日 · 丙戌日</p>
                        <h2>先稳住边界，<br />再推动变化。</h2>
                        <p>事业主题正在升温。今天值得先看见的，是你对“时机”的犹豫。</p>
                        <div className="today-divider" />
                        <span>查看完整解析 <b>→</b></span>
                    </motion.div>
                </div>
                <div className="instrument-corner instrument-corner-nw" />
                <div className="instrument-corner instrument-corner-se" />
                <p className="instrument-data instrument-data-top">FORTUNE DATE 2026.07.13<br />PROFILE 01 · OWNER</p>
                <p className="instrument-data instrument-data-bottom">SELF × TIMING × INTENT<br />CALIBRATION ACTIVE</p>
                <p className="instrument-rail">CHRONOLOGICAL CALIBRATION DEVICE · 01—06</p>
            </motion.div>
        </section>
    );
}
