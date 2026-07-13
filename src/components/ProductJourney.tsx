"use client";

import { motion } from "framer-motion";

type ScreenVariant = "today" | "insight" | "archive";

const journey = [
    {
        index: "01",
        label: "TODAY",
        nav: "首页",
        title: "首页不是信息流，\n是每日行动入口。",
        body: "当日干支成为时间锚点。今日判断和场景建议把复杂结构压缩成一个清晰的优先级。",
        variant: "today" as ScreenVariant,
        colors: ["var(--archive-blue)", "var(--butter)"],
    },
    {
        index: "02",
        label: "INSIGHT",
        nav: "知之",
        title: "先被一个主题命中，\n再进入深度解释。",
        body: "大卡建立情绪和信任，中型卡提供结构化解释，追问把理解继续推向具体选择。",
        variant: "insight" as ScreenVariant,
        colors: ["var(--soft-rose)", "var(--seafoam)"],
    },
    {
        index: "03",
        label: "ARCHIVE",
        nav: "历史档案",
        title: "一次判断被保存，\n长期关系才真正开始。",
        body: "历史记录人生问题如何变化，并为之后的个性化校准和主动推荐建立连续上下文。",
        variant: "archive" as ScreenVariant,
        colors: ["var(--seafoam)", "var(--archive-blue)"],
    },
];

function PhoneScreen({ variant }: { variant: ScreenVariant }) {
    return (
        <div className="product-phone" aria-hidden="true">
            <div className="product-phone-screen">
                <div className="phone-status"><span>9:41</span><span>知之</span></div>
                {variant === "today" && (
                    <>
                        <div className="phone-date"><strong>丙戌日</strong><span>丙午年 · 乙未月</span></div>
                        <div className="phone-card phone-card-blue">
                            <small>今日判断</small>
                            <h4>先确认方向，<br />再扩大投入。</h4>
                            <p>今天适合把模糊承诺变成明确条件。</p>
                        </div>
                        <div className="phone-row"><span>事业 · 值得追问</span><b>→</b></div>
                        <div className="phone-row"><span>关系 · 保持余地</span><b>→</b></div>
                    </>
                )}
                {variant === "insight" && (
                    <>
                        <div className="phone-date"><strong>你此刻的<br />关系课题</strong></div>
                        <div className="phone-card phone-card-rose">
                            <small>关系 · 边界</small>
                            <h4>你不是不愿意靠近，<br />而是在等待确定性。</h4>
                            <p>值得先追问的是：你要的是答案，还是行动？</p>
                        </div>
                        <div className="phone-row"><span>为什么我总在等待？</span><b>→</b></div>
                        <div className="phone-row"><span>这段关系何时适合推进？</span><b>→</b></div>
                    </>
                )}
                {variant === "archive" && (
                    <>
                        <div className="phone-date"><strong>七月</strong><span>选择与边界</span></div>
                        <div className="phone-row"><span>07.13 · 事业方向</span><b>已追问</b></div>
                        <div className="phone-row"><span>07.09 · 关系节奏</span><b>已保存</b></div>
                        <div className="phone-row"><span>07.02 · 个人状态</span><b>已验证</b></div>
                        <div className="phone-card phone-card-seafoam">
                            <small>本月反复出现的主题</small>
                            <h4>清晰边界，<br />比快速推进更重要。</h4>
                            <p>知之会继续观察这个主题如何影响你的选择。</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export function ProductJourney() {
    return (
        <section className="section section-journey page-shell" id="journey" aria-labelledby="journey-title">
            <aside className="journey-intro">
                <p className="section-kicker">03 / 一段持续关系</p>
                <h2 id="journey-title">从今天，<br />到长期理解。</h2>
                <p className="section-intro">三个入口不是并列功能，而是一段逐渐加深的关系。</p>
                <ol className="journey-index">
                    <li><span>01</span>首页 · 今天最该先看什么</li>
                    <li><span>02</span>知之 · 为什么这件事与你有关</li>
                    <li><span>03</span>历史档案 · 昨天的判断如何延续到今天</li>
                </ol>
            </aside>

            <div className="journey-stages">
                {journey.map((item, index) => (
                    <motion.article
                        className="product-stage"
                        key={item.label}
                        style={{
                            background: `linear-gradient(135deg, color-mix(in srgb, ${item.colors[0]} 28%, var(--surface)), var(--surface) 54%, color-mix(in srgb, ${item.colors[1]} 22%, var(--surface)))`,
                        }}
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.75, delay: index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <div className="product-stage-copy">
                            <p className="product-stage-meta">{item.index} · {item.label}</p>
                            <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                            <p>{item.body}</p>
                        </div>
                        <PhoneScreen variant={item.variant} />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}

