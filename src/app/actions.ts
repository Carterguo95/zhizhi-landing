"use server";

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
