"use server";

import { Resend } from 'resend';
import WaitlistWelcomeEmail from '@/emails/WaitlistWelcome';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
type WaitlistResult =
    | { success: true }
    | { success: false; error: "already_registered" | "invalid_email" | "server_error" };

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitWaitlistEmail(email: string): Promise<WaitlistResult> {
    // Server-side validation
    if (!email || !isValidEmail(email)) {
        return { success: false, error: "invalid_email" };
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
        console.error("GOOGLE_SCRIPT_URL is not set in environment variables");
        return { success: false, error: "server_error" };
    }

    try {
        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email.trim().toLowerCase(),
                source: "landing_page",
            }),
        });

        if (!response.ok) {
            console.error("Google Script response not ok:", response.status);
            return { success: false, error: "server_error" };
        }

        const data = await response.json();

        if (data.success) {
            // Also send a welcome email if Resend is configured
            if (resend) {
                try {
                    await resend.emails.send({
                        from: 'ZHIZHI <onboarding@resend.dev>',
                        to: email.trim().toLowerCase(),
                        subject: '✨ 欢迎加入 ZHIZHI 候补名单',
                        react: WaitlistWelcomeEmail({ email: email.trim().toLowerCase() }),
                    });
                    console.log(`Welcome email successfully sent to ${email}`);
                } catch (emailError) {
                    console.error("Failed to send welcome email via Resend:", emailError);
                    // We still return success because they are on the waitlist (Google Sheet)
                }
            } else {
                console.warn("Resend API key missing. Welcome email not sent, but waitlist successful.");
            }
            return { success: true };
        }

        if (data.error === "already_registered") {
            return { success: false, error: "already_registered" };
        }

        return { success: false, error: "server_error" };
    } catch (error) {
        console.error("Failed to submit waitlist email:", error);
        return { success: false, error: "server_error" };
    }
}
