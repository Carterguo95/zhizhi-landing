"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { submitWaitlistEmail } from "@/app/actions";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setFormState("error");
            setErrorMsg("请输入邮箱地址");
            shakeInput();
            return;
        }

        if (!validateEmail(email)) {
            setFormState("error");
            setErrorMsg("请输入有效的邮箱格式");
            shakeInput();
            return;
        }

        setFormState("loading");

        try {
            const result = await submitWaitlistEmail(email.trim().toLowerCase());

            if (result.success) {
                setFormState("success");
            } else if (result.error === "already_registered") {
                setFormState("error");
                setErrorMsg("该邮箱已在候补名单中 ✓");
                shakeInput();
            } else {
                setFormState("error");
                setErrorMsg("提交失败，请稍后重试");
                shakeInput();
            }
        } catch {
            setFormState("error");
            setErrorMsg("网络连接失败，请检查网络后重试");
            shakeInput();
        }
    };

    const shakeInput = () => {
        inputRef.current?.classList.add("animate-shake");
        setTimeout(() => {
            inputRef.current?.classList.remove("animate-shake");
        }, 500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (formState === "error") {
            setFormState("idle");
            setErrorMsg("");
        }
    };

    return (
        <div className="w-full max-w-[480px] mx-auto">
            <AnimatePresence mode="wait">
                {formState === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Success celebration */}
                        <div className="relative inline-flex items-center justify-center mb-4">
                            {/* Expanding rings */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 2.5, opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                                className="absolute w-12 h-12 rounded-full border border-accent/40"
                            />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeOut",
                                    delay: 0.3,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                                className="absolute w-12 h-12 rounded-full border border-accent/20"
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    delay: 0.1,
                                }}
                                className="relative w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center"
                            >
                                <Check className="w-6 h-6 text-accent" />
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg font-serif text-white/90 mb-2"
                        >
                            欢迎加入 ZHIZHI 候补名单
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm text-white/40 font-light"
                        >
                            We&apos;ll notify you when it&apos;s your turn.
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        onSubmit={handleSubmit}
                        className="space-y-3"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-3 group">
                            {/* Email Input */}
                            <div className="relative w-full">
                                {/* Glowing accent trace on focus */}
                                <div
                                    className={`absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-700 pointer-events-none ${formState === "error"
                                        ? "!opacity-0"
                                        : "group-focus-within:opacity-100"
                                        }`}
                                />
                                {/* Error glow */}
                                {formState === "error" && (
                                    <div className="absolute -inset-[1px] rounded-full bg-red-500/30 pointer-events-none" />
                                )}
                                <input
                                    ref={inputRef}
                                    type="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                    disabled={formState === "loading"}
                                    aria-label="Email address for waitlist"
                                    aria-invalid={formState === "error"}
                                    className="relative w-full px-6 py-4 text-white bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full focus:outline-none focus:bg-white/[0.08] transition-all font-sans font-light placeholder:text-white/30 text-center sm:text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formState === "loading"}
                                className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium text-[15px] overflow-hidden transition-all hover:bg-white/15 hover:scale-[1.02] cursor-pointer shadow-lg shadow-black/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shrink-0"
                            >
                                {/* Hover shimmer effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

                                {formState === "loading" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 text-white/70 animate-spin relative z-10" />
                                        <span className="relative z-10">
                                            提交中
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10">
                                            加入候补
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-white/70 relative z-10 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {formState === "error" && errorMsg && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5, height: 0 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        height: "auto",
                                    }}
                                    exit={{ opacity: 0, y: -5, height: 0 }}
                                    className="text-red-400/80 text-xs text-center font-light"
                                >
                                    {errorMsg}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {/* Privacy note */}
                        <p className="text-[11px] text-white/25 text-center font-light tracking-wide">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
