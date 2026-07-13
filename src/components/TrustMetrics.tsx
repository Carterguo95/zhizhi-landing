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
                    <h2 id="trust-title">不是预测一条<br />确定的命运，<br />是更早看见<br />选择的结构。</h2>
                </div>
                <div className="trust-copy">
                    <p><strong>知之首先是一套东方文化中的人生理解框架，其次是一种决策辅助工具。</strong></p>
                    <p>它不替你做决定，也不承诺百分百准确。信任来自文化上的熟悉感、个体层面的被理解，以及长期使用中的持续验证。</p>
                    <div className="trust-points">
                        <span>稳定画像</span><span>当下时机</span><span>持续校准</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
