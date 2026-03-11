'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '@/data/faq';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Generate FAQPage JSON-LD schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden" id="faq">
            {/* Background gradients for aesthetic consistency */}
            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-20"
                    style={{
                        clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="sr-only">关于极客玄学体验的解析</h2>
                    <p aria-hidden="true" className="text-3xl md:text-5xl font-serif font-light mb-4 text-white/90 mt-2">
                        探索常见疑问解答
                    </p>
                </div>

                <div className="mx-auto max-w-3xl mt-16 sm:mt-20">
                    <dl className="space-y-6 divide-y divide-white/10">
                        {faqData.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="pt-6">
                                    <dt>
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex w-full items-start justify-between text-left text-white/90 group"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-lg font-serif font-medium tracking-wide group-hover:text-white transition-colors">{faq.question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <ChevronDown
                                                    className={cn(
                                                        "h-5 w-5 flex-none transition-transform duration-300",
                                                        isOpen ? "-rotate-180" : "rotate-0 text-white/40 group-hover:text-white/70"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </button>
                                    </dt>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.dd
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden pr-12"
                                            >
                                                <p className="text-base text-muted-foreground font-light leading-relaxed mt-4 pb-2">
                                                    {faq.answer}
                                                </p>
                                            </motion.dd>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
