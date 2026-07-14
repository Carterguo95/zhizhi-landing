"use client";

import { motion } from "framer-motion";

export function TrustMetrics() {
    return (
        <section className="section section-trust page-shell" id="trust" aria-labelledby="trust-title">
            <motion.div
                className="trust-panel"
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
            >
                <div className="trust-refraction" aria-hidden="true" />
                <div className="trust-seal" aria-hidden="true"><span>TRUST</span><i /><b>04</b></div>
                <div>
                    <p className="section-kicker">04 / 信任边界</p>
                    <h2 id="trust-title">知之帮你<br />看清选择，<br />决定仍然<br />由你来做。</h2>
                </div>
                <div className="trust-copy">
                    <p><strong>命理提供一个理解自己的角度，知之把它变成每天都能参考的提醒。</strong></p>
                    <p>你可以在做决定前，用知之整理自己在意什么、现在的时机怎样、手里有哪些选择。它不会保证某件事一定发生，也不会替你做决定。</p>
                    <div className="trust-points">
                        <span>了解自己</span><span>看清时机</span><span>自己决定</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
