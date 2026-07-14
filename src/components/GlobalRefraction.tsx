"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function GlobalRefraction() {
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 42, damping: 24, mass: 0.72 });
    const upperY = useTransform(progress, [0, 1], [0, 180]);
    const middleY = useTransform(progress, [0, 1], [-80, 120]);
    const lowerY = useTransform(progress, [0, 1], [-110, 70]);
    const upperX = useTransform(progress, [0, 1], [-24, 48]);
    const lowerX = useTransform(progress, [0, 1], [42, -38]);

    return (
        <div className="global-refraction" aria-hidden="true">
            <motion.div className="kv-haze kv-haze-upper" style={{ x: upperX, y: upperY }} />
            <motion.div className="kv-haze kv-haze-middle" style={{ y: middleY }} />
            <motion.div className="kv-haze kv-haze-lower" style={{ x: lowerX, y: lowerY }} />
            <div className="kv-interference kv-interference-one" />
            <div className="kv-interference kv-interference-two" />
            <div className="kv-interference kv-interference-three" />
            <div className="kv-phase-mark kv-phase-mark-one" />
            <div className="kv-phase-mark kv-phase-mark-two" />
            <div className="kv-phase-mark kv-phase-mark-three" />
            <div className="kv-memory-thread" />
        </div>
    );
}
