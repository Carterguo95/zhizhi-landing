"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const questions = [
    { label: "工作与方向", question: "最近哪里不对？" },
    { label: "选择与时机", question: "这件事现在该不该做？" },
    { label: "模式与关系", question: "为什么我总在重复同一种困境？" },
];

const models = [
    {
        index: "01",
        label: "SELF",
        title: "你的底色",
        copy: "从个人命盘中了解你习惯怎么做选择、怎样与人相处，以及哪些问题容易反复出现。",
        color: "var(--archive-blue)",
    },
    {
        index: "02",
        label: "TIMING",
        title: "现在的时机",
        copy: "结合流年、流月和每天的变化，看看最近哪些事更值得留意，什么时候适合推进。",
        color: "var(--butter)",
    },
    {
        index: "03",
        label: "INTENT",
        title: "你真正关心的事",
        copy: "记住你看过、问过和保存过的内容，慢慢分清你这次真正想解决的是什么。",
        color: "var(--soft-rose)",
    },
];

const reveal = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
};

export function NarrativeFlow() {
    return (
        <>
            <section className="section section-questions page-shell" aria-labelledby="questions-title">
                <motion.div
                    className="question-spectrum-plate"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                />
                <p className="archive-side-label" aria-hidden="true">BEFORE LANGUAGE / EXPOSURE 02</p>
                <motion.div
                    className="section-heading split-heading"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    variants={reveal}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <p className="section-kicker">01 / 从说不清的感觉开始</p>
                        <h2 id="questions-title">你不必先想好，<br />到底该问什么。</h2>
                    </div>
                    <p className="section-intro">
                        工作不顺、关系反复，心里总觉得哪里不对。知之会先把这种感觉整理成一个具体问题，让你看懂原因，也知道接下来能做什么。
                    </p>
                </motion.div>

                <motion.div
                    className="question-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ staggerChildren: 0.09 }}
                >
                    {questions.map((item) => (
                        <motion.div key={item.label} className="question-row" variants={reveal}>
                            <span className="question-label">{item.label}</span>
                            <span className="question-copy">{item.question}</span>
                            <span className="question-coordinate" aria-hidden="true">Q.{String(questions.indexOf(item) + 1).padStart(2, "0")}</span>
                            <ArrowUpRight aria-hidden="true" />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="section section-models" id="method" aria-labelledby="models-title">
                <div className="model-refraction" aria-hidden="true" />
                <div className="model-orbit model-orbit-outer" aria-hidden="true" />
                <div className="model-orbit model-orbit-inner" aria-hidden="true" />
                <p className="model-rail" aria-hidden="true">CALIBRATION PLATE · SELF / TIMING / INTENT</p>
                <div className="page-shell model-content">
                    <motion.div
                        className="section-heading split-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={reveal}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div>
                            <p className="section-kicker">02 / 知之怎么理解你</p>
                            <h2 id="models-title">它会记得你是谁，<br />也会留意时机。</h2>
                        </div>
                        <p className="section-intro">
                            知之会结合你的个人命盘、当下时间和过去的记录。用得越久，它越能分清哪些只是短暂情绪，哪些值得你认真处理。
                        </p>
                    </motion.div>

                    <motion.div
                        className="model-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {models.map((model) => (
                            <motion.article className={`model-item model-item-${model.index}`} key={model.title} variants={reveal}>
                                <span className="model-index-ghost" aria-hidden="true">{model.index}</span>
                                <span className="model-signal" style={{ background: model.color, boxShadow: `0 0 28px ${model.color}` }} />
                                <p className="model-meta">{model.index} · {model.label}</p>
                                <div className="model-copy">
                                    <h3>{model.title}</h3>
                                    <p>{model.copy}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
