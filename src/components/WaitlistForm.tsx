"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import { submitWaitlistEmail } from "@/app/actions";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ inverted = false }: { inverted?: boolean }) {
    const [email, setEmail] = useState("");
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const shakeInput = () => {
        inputRef.current?.classList.add("animate-shake");
        window.setTimeout(() => inputRef.current?.classList.remove("animate-shake"), 500);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const normalizedEmail = email.trim().toLowerCase();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            setFormState("error");
            setErrorMsg(normalizedEmail ? "请输入有效的邮箱格式" : "请输入邮箱地址");
            shakeInput();
            return;
        }

        setFormState("loading");
        const result = await submitWaitlistEmail(normalizedEmail).catch(() => ({ success: false as const, error: "server_error" as const }));

        if (result.success) {
            setFormState("success");
            return;
        }

        setFormState("error");
        setErrorMsg(result.error === "already_registered" ? "这个邮箱已经在核心内测名单中" : "提交失败，请稍后重试");
        shakeInput();
    };

    return (
        <div className={`waitlist-form-shell ${inverted ? "is-inverted" : ""}`}>
            <AnimatePresence mode="wait">
                {formState === "success" ? (
                    <motion.div
                        className="waitlist-success"
                        key="success"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <span><Check aria-hidden="true" /></span>
                        <div><strong>席位申请已记录</strong><p>内测开放时，我们会通过邮件联系你。</p></div>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="waitlist-form"
                        noValidate
                    >
                        <div className="waitlist-input-row">
                            <label className="sr-only" htmlFor={inverted ? "footer-email" : "hero-email"}>输入邮箱申请内测</label>
                            <input
                                id={inverted ? "footer-email" : "hero-email"}
                                ref={inputRef}
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    if (formState === "error") { setFormState("idle"); setErrorMsg(""); }
                                }}
                                placeholder="输入你的邮箱"
                                disabled={formState === "loading"}
                                aria-invalid={formState === "error"}
                                aria-describedby={formState === "error" ? "waitlist-error" : undefined}
                            />
                            <button type="submit" disabled={formState === "loading"} aria-busy={formState === "loading"}>
                                {formState === "loading" ? <LoaderCircle className="waitlist-spinner" aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
                                <span>{formState === "loading" ? "提交中" : "申请内测"}</span>
                            </button>
                        </div>
                        <div className="waitlist-meta">
                            <p>{formState === "error" && errorMsg ? <span id="waitlist-error">{errorMsg}</span> : "仅用于内测通知，可随时退出。"}</p>
                            <span>CORE BETA · 2026</span>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
