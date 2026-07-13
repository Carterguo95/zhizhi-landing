"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";

export function FooterCTA() {
    return (
        <footer className="site-footer" id="waitlist">
            <div className="footer-refraction" aria-hidden="true" />
            <div className="footer-orbit footer-orbit-one" aria-hidden="true" />
            <div className="footer-orbit footer-orbit-two" aria-hidden="true" />
            <div className="page-shell">
                <motion.div
                    className="footer-grid"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div>
                        <p className="section-kicker">CORE BETA · 2026</p>
                        <h2>流年无声，<br />知之有迹。</h2>
                        <p>加入知之核心内测，让每一次判断都成为更理解自己的开始。</p>
                    </div>
                    <WaitlistForm inverted />
                </motion.div>
                <div className="footer-bottom">
                    <span>ZHIZHI · TIME REFRACTION ARCHIVE</span>
                    <nav aria-label="页脚导航">
                        <a href="#faq">常见问题</a>
                        <a href="#">隐私政策</a>
                        <a href="#">使用条款</a>
                        <a href="https://x.com/zhizhiapp" target="_blank" rel="noopener noreferrer">X</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
