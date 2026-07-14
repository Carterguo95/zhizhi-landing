"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ScreenVariant = "today" | "insight" | "reading";

const journey = [
    {
        index: "01",
        label: "TODAY",
        nav: "首页",
        title: "每天打开，\n先看今天最该注意什么。",
        body: "首页会根据当天的时间变化，给你一个最值得先看的主题和可以马上做的建议。",
        variant: "today" as ScreenVariant,
        image: "/product/zhizhi-home.jpg",
        alt: "知之首页，展示今日判断与事业、健康场景建议",
    },
    {
        index: "02",
        label: "INSIGHT",
        nav: "知之",
        title: "觉得说中了，\n就继续把它问清楚。",
        body: "知之先告诉你这件事为什么会反复出现。你可以接着追问，直到它和眼前的选择真正连起来。",
        variant: "insight" as ScreenVariant,
        image: "/product/zhizhi-insight.jpg",
        alt: "知之洞察页，展示感情运势卡片与逐项解读",
    },
    {
        index: "03",
        label: "READING",
        nav: "完整解读",
        title: "把完整解读看完，\n再问你真正关心的事。",
        body: "财运、关系和健康会被放在同一份解读里。看完之后，你可以沿着最在意的问题继续追问。",
        variant: "reading" as ScreenVariant,
        image: "/product/zhizhi-reading.jpg",
        alt: "知之完整解读页，展示财运、感情、健康分析与继续追问入口",
    },
];

function ProductScreen({ image, alt }: { image: string; alt: string }) {
    return (
        <div className="product-phone">
            <div className="product-phone-screen">
                <Image
                    src={image}
                    alt={alt}
                    width={736}
                    height={1600}
                    sizes="(max-width: 760px) 78vw, 380px"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export function ProductJourney() {
    return (
        <section className="section section-journey page-shell" id="journey" aria-labelledby="journey-title">
            <aside className="journey-intro">
                <div className="journey-heading">
                    <p className="section-kicker">03 / 你会怎么用</p>
                    <h2 id="journey-title">从今天的提醒，<br />到把问题问清楚。</h2>
                </div>
                <div className="journey-summary">
                    <p className="section-intro">先看今天最值得留意什么，再打开完整解读，沿着你真正关心的事继续问。</p>
                    <ol className="journey-index">
                        <li><span>01</span>首页 · 今天先留意什么</li>
                        <li><span>02</span>知之 · 把原因和选择问清楚</li>
                        <li><span>03</span>完整解读 · 沿着问题继续追问</li>
                    </ol>
                    <p className="journey-calibration" aria-hidden="true">RELATION DEPTH / 01—03</p>
                </div>
            </aside>

            <div className="journey-stages">
                {journey.map((item, index) => (
                    <motion.article
                        className={`product-stage stage-${item.variant}`}
                        key={item.label}
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.85, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="stage-spectrum" aria-hidden="true" />
                        <span className="stage-register" aria-hidden="true">ARCHIVE / {item.index}</span>
                        <div className="product-stage-copy">
                            <p className="product-stage-meta">{item.index} · {item.label}</p>
                            <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                            <p>{item.body}</p>
                        </div>
                        <ProductScreen image={item.image} alt={item.alt} />
                        <motion.div
                            className="stage-scan-line"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            aria-hidden="true"
                        />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
