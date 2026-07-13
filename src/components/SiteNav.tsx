"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function SiteNav() {
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

    return (
        <header className="site-nav-shell">
            <motion.div className="site-scroll-progress" style={{ scaleX: progress }} />
            <nav className="site-nav page-shell" aria-label="主导航">
                <a className="site-brand" href="#top" aria-label="知之首页">
                    <span>知之</span>
                    <span className="site-brand-latin">ZHIZHI</span>
                </a>
                <div className="site-nav-links" aria-label="页面章节">
                    <a href="#method">如何工作</a>
                    <a href="#journey">产品体验</a>
                    <a href="#trust">信任边界</a>
                </div>
                <a className="button button-primary button-small" href="#waitlist">
                    申请内测
                </a>
            </nav>
        </header>
    );
}

