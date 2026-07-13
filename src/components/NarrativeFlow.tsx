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
        title: "自我模型",
        copy: "建立相对稳定的人生底层画像，理解你的驱动力、关系模式、风险偏好与成长课题。",
        color: "var(--archive-blue)",
    },
    {
        index: "02",
        label: "TIMING",
        title: "时机模型",
        copy: "结合流年、流月与流日的变化，判断此刻最值得被看见的主题、机会与张力。",
        color: "var(--butter)",
    },
    {
        index: "03",
        label: "INTENT",
        title: "意图模型",
        copy: "从历史足迹和当前状态中，提前组织那些你还没有准确说出口的重要问题。",
        color: "var(--soft-rose)",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0 },
};

export function NarrativeFlow() {
    return (
        <>
            <section className="section section-questions page-shell" aria-labelledby="questions-title">
                <motion.div
                    className="section-heading split-heading"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    variants={reveal}
                    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div>
                        <p className="section-kicker">01 / 在语言之前</p>
                        <h2 id="questions-title">重要的问题，<br />往往先以感觉出现。</h2>
                    </div>
                    <p className="section-intro">
                        人在真正需要判断时，很少带着一个完整问题而来。知之先看见那份没有被组织的焦虑，再把它变成可以理解、可以追问、可以行动的主题。
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
                            <ArrowUpRight aria-hidden="true" />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="section section-models" id="method" aria-labelledby="models-title">
                <div className="model-refraction" aria-hidden="true" />
                <div className="page-shell model-content">
                    <motion.div
                        className="section-heading split-heading"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={reveal}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <div>
                            <p className="section-kicker">02 / 它如何理解</p>
                            <h2 id="models-title">一套持续理解你<br />与当下的系统。</h2>
                        </div>
                        <p className="section-intro">
                            知之把命理结构、时间变化和用户上下文组织成三个相互校准的模型。你看到的不是技术堆栈，而是更贴近自己的判断。
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
                            <motion.article className="model-item" key={model.title} variants={reveal}>
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

