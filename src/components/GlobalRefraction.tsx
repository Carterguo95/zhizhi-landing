"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function GlobalRefraction() {
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 52, damping: 22, mass: 0.6 });
    const upperY = useTransform(progress, [0, 1], [0, 260]);
    const middleY = useTransform(progress, [0, 1], [-120, 180]);
    const lowerY = useTransform(progress, [0, 1], [-180, 80]);
    const upperRotate = useTransform(progress, [0, 1], [-5, 8]);
    const lowerRotate = useTransform(progress, [0, 1], [7, -6]);

    return (
        <div className="global-refraction" aria-hidden="true">
            <motion.div className="spectrum-plane spectrum-plane-upper" style={{ y: upperY, rotate: upperRotate }} />
            <motion.div className="spectrum-plane spectrum-plane-middle" style={{ y: middleY }} />
            <motion.div className="spectrum-plane spectrum-plane-lower" style={{ y: lowerY, rotate: lowerRotate }} />
            <svg className="refraction-spine" viewBox="0 0 100 1000" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="spine-spectrum" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#4e7096" />
                        <stop offset=".34" stopColor="#dda9ac" />
                        <stop offset=".67" stopColor="#94b7ae" />
                        <stop offset="1" stopColor="#e4d4a9" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M84 0 C72 130 94 205 69 310 C47 405 63 480 34 575 C12 650 42 745 23 835 C14 885 19 944 10 1000"
                    fill="none"
                    stroke="url(#spine-spectrum)"
                    strokeWidth=".28"
                    vectorEffect="non-scaling-stroke"
                    style={{ pathLength: progress }}
                />
            </svg>
        </div>
    );
}
