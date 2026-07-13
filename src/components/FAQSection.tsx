"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqData } from "@/data/faq";

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    return (
        <section className="section section-faq page-shell" id="faq" aria-labelledby="faq-title">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="faq-heading">
                <p className="section-kicker">05 / 常见问题</p>
                <h2 id="faq-title">在认真开始之前，<br />先把边界说清楚。</h2>
            </div>
            <dl className="faq-list">
                {faqData.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
                            <dt>
                                <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                                    <span className="faq-index">{String(index + 1).padStart(2, "0")}</span>
                                    <span>{faq.question}</span>
                                    <Plus aria-hidden="true" />
                                </button>
                            </dt>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.dd
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.dd>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}
