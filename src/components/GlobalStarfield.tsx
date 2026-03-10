"use client";

import { useEffect, useRef } from "react";

export function GlobalStarfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

        let w = window.innerWidth;
        // Increase height slightly to cover scroll bounce
        let h = window.innerHeight;

        const resizeCanvas = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            // Handle High-DPI (Retina) displays
            const dpr = window.devicePixelRatio || 1;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.scale(dpr, dpr);
        };
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };
        const handleMouseLeave = () => {
            // Gently glide the light back to the center of the screen instead of disappearing instantly
            mouse.targetX = w / 2;
            mouse.targetY = h / 2;
        };
        document.documentElement.addEventListener("mousemove", handleMouseMove);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        // Deep Space Starfield Background (Dynamic visibility masking)
        const starCount = Math.floor((w * h) / 10000); // Reduced density by 20%
        const stars = Array.from({ length: starCount }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 1.05 + 0.14, // Reduced size by 30%
            speedX: (Math.random() - 0.5) * 0.05,
            speedY: (Math.random() - 0.5) * 0.05,
            opacity: Math.random() * 0.5 + 0.1, // Restored base opacity
            twinkleSpeed: Math.random() * 0.03 + 0.005,
        }));

        let time = 0;

        const render = () => {
            time++;

            // UIUX ProMax: Ultra-smooth Motion blur for star trails (slower fade = longer trails)
            ctx.fillStyle = "rgba(4, 6, 9, 0.15)"; // 0.15 alpha makes trails longer and more graceful
            ctx.fillRect(0, 0, w, h);

            // Lerp mouse (0.02 is much smoother and "heavier" than 0.05)
            mouse.x += (mouse.targetX - mouse.x) * 0.02;
            mouse.y += (mouse.targetY - mouse.y) * 0.02;

            // 1. Draw Deep Space Stars (Background Layer)
            stars.forEach((star) => {
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap
                if (star.x < 0) star.x = w;
                if (star.x > w) star.x = 0;
                if (star.y < 0) star.y = h;
                if (star.y > h) star.y = 0;

                // Interaction with mouse (very slight parallax push)
                const dx = mouse.x - star.x;
                const dy = mouse.y - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Ultra-subtle displacement around mouse cursor (like gravity bending light)
                let drawX = star.x;
                let drawY = star.y;
                if (dist < 400) {
                    // Easing curve for displacement
                    const intensity = Math.pow((400 - dist) / 400, 2);
                    drawX -= (dx / dist) * intensity * 0.5;
                    drawY -= (dy / dist) * intensity * 0.5;
                }

                // Since this is the background across the *entire* site, we no longer fade out
                // stars based on distance to center.
                // They just twinkle evenly.
                let visibilityMask = 1;

                // Twinkle effect using slow sine wave over time (elegant breathing rather than jitter)
                const currentOpacity = (star.opacity + Math.sin(time * star.twinkleSpeed * 0.5) * 0.15) * visibilityMask;
                const clampedOpacity = Math.max(0.01, Math.min(0.9, currentOpacity));

                ctx.beginPath();
                ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180, 200, 240, ${clampedOpacity})`; // Muted deep-space blue/white
                ctx.fill();
            });

            // 2. Draw Mouse Interaction Glow (Ultra-premium ambient aura)
            const centerX = w / 2;
            const centerY = h / 2;
            // The aura should be massive but incredibly subtle, like moonlight through fog
            const distToCenterLight = Math.hypot(mouse.x - centerX, mouse.y - centerY);

            if (distToCenterLight < 2500) {
                // Reduced from 800px to 500px for a slightly tighter, yet still ambient aura
                const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 500);

                // Extremely subtle opacities for a "glassy" depth effect, slightly boosted core brightness
                // Core is a very faint cool white/blue
                glow.addColorStop(0, "rgba(255, 255, 255, 0.06)");
                // Mid section transitions to the brand's primary tech blue smoothly
                glow.addColorStop(0.3, "rgba(59, 130, 246, 0.02)");
                // Outer edges touch slightly on the gold accent before fading entirely
                glow.addColorStop(0.7, "rgba(212, 175, 55, 0.003)");

                glow.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.fillStyle = glow;
                ctx.fillRect(0, 0, w, h);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            document.documentElement.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none mix-blend-screen"
            style={{ zIndex: 0, opacity: 0.8 }}
        />
    );
}
