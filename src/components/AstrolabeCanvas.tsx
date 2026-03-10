"use client";

import { useEffect, useRef } from "react";

const TIAN_GAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const DI_ZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const GUA_XIANG = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];

export function AstrolabeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
        let lastInteractionTime = 0;

        let w = canvas.clientWidth || window.innerWidth;
        let h = canvas.clientHeight || window.innerHeight;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                w = entry.contentRect.width;
                h = entry.contentRect.height;
                // Handle High-DPI (Retina) displays to prevent blurry text and graphics
                const dpr = window.devicePixelRatio || 1;
                canvas.width = w * dpr;
                canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            }
        });
        resizeObserver.observe(canvas);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
            lastInteractionTime = Date.now();
        };
        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                // Prevent default scrolling only if they are actively using the compass area
                mouse.targetX = e.touches[0].clientX;
                mouse.targetY = e.touches[0].clientY;
                lastInteractionTime = Date.now();
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);
        window.addEventListener("touchstart", handleTouchMove, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchend", handleMouseLeave);
        window.addEventListener("touchcancel", handleMouseLeave);

        // Stars removed: Now handled by GlobalStarfield in layout

        // Dimensional orbital configuration (scaled by logical size & device type)
        const minDim = Math.min(w, h);
        const isMobile = w < 768;

        // Responsive Radii: Expand spacing on mobile to prevent overlapping
        const r1 = isMobile ? minDim * 0.18 : minDim * 0.15;
        const r2 = isMobile ? minDim * 0.30 : minDim * 0.25;
        const r3 = isMobile ? minDim * 0.40 : minDim * 0.35;
        const r4 = isMobile ? minDim * 0.48 : minDim * 0.45;
        const ringOuter = isMobile ? minDim * 0.55 : minDim * 0.6;

        // Responsive Fonts: Scale down on mobile
        const f1 = isMobile ? 14 : 21;
        const f2 = isMobile ? 12 : 17;
        const f3 = isMobile ? 12 : 17;
        const f4 = isMobile ? 10 : 14;

        const serifFamily = '"New York", ui-serif, "Songti SC", "STSong", "Noto Serif SC", serif';
        const sansFamily = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "PingFang SC", sans-serif';

        const orbits = [
            { radius: r1, speed: 0.0003, items: GUA_XIANG, color: "rgba(212, 175, 55, 0.7)", font: `${f1}px ${serifFamily}` }, // Ba Gua (Inner)
            { radius: r2, speed: -0.00015, items: TIAN_GAN, color: "rgba(255, 255, 255, 0.6)", font: `${f2}px ${serifFamily}` }, // Tian Gan (Middle)
            { radius: r3, speed: 0.0001, items: DI_ZHI, color: "rgba(59, 130, 246, 0.7)", font: `${f3}px ${serifFamily}` }, // Di Zhi (Outer)
            { radius: r4, speed: -0.00005, items: Array(24).fill("·"), color: "rgba(255, 255, 255, 0.4)", font: `${f4}px ${sansFamily}` } // Data nodes (Far Outer)
        ];

        // Precision structural rings
        const rings = [
            { radius: r1, dash: [2, 4], color: "rgba(212, 175, 55, 0.15)" },
            { radius: r2, dash: [100, 20], color: "rgba(255, 255, 255, 0.05)" },
            { radius: r3, dash: [40, 10, 2, 10], color: "rgba(59, 130, 246, 0.08)" },
            { radius: r4, dash: [2, 12], color: "rgba(255, 255, 255, 0.03)" },
            { radius: ringOuter, dash: [], color: "rgba(255, 255, 255, 0.02)" }
        ];

        let time = 0;

        const render = () => {
            time++;

            // Update responsive dimensions inside render loop so they handle resizes perfectly
            const minDim = Math.min(w, h);
            const isMobile = w < 768;

            // Responsive Radii
            const r1 = isMobile ? minDim * 0.18 : minDim * 0.15;
            const r2 = isMobile ? minDim * 0.30 : minDim * 0.25;
            const r3 = isMobile ? minDim * 0.40 : minDim * 0.35;
            const r4 = isMobile ? minDim * 0.48 : minDim * 0.45;
            const ringOuter = isMobile ? minDim * 0.55 : minDim * 0.6;

            // Update orbits config on the fly
            orbits[0].radius = r1;
            orbits[1].radius = r2;
            orbits[2].radius = r3;
            orbits[3].radius = r4;

            rings[0].radius = r1;
            rings[1].radius = r2;
            rings[2].radius = r3;
            rings[3].radius = r4;
            rings[4].radius = ringOuter;

            // Clear canvas entirely to remain transparent
            ctx.clearRect(0, 0, w, h);

            const centerX = w / 2;
            const centerY = h / 2;

            // Smart Autopilot: Engaging perfectly smooth circular orbit if user hasn't interacted for 2 seconds
            const isIdle = Date.now() - lastInteractionTime > 2000;

            if (isMobile && isIdle) {
                const autoRadius = minDim * 0.35; // Hover precisely over the inner/middle rings
                const autoSpeed = 0.0015; // Slow, majestic rotation (exactly like desktop smooth hover)
                mouse.targetX = centerX + Math.cos(time * autoSpeed) * autoRadius;
                mouse.targetY = centerY + Math.sin(time * autoSpeed) * autoRadius;
            }

            // Lerp mouse (snappy on interaction, smooth on autopilot)
            const lerpFactor = isIdle ? 0.02 : 0.15;
            mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
            mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

            // Background and stars removed: Now handled by GlobalStarfield

            // Base Ambient Center Glow only (No flashlight effect, handled by Starfield)
            const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 800);
            centerGlow.addColorStop(0, "rgba(212, 175, 55, 0.03)");
            centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.fillStyle = centerGlow;
            ctx.fillRect(0, 0, w, h);

            // 3. Draw Structural Rings
            rings.forEach((ring) => {
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.beginPath();
                ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
                ctx.setLineDash(ring.dash);
                ctx.strokeStyle = ring.color;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.restore();
            });

            // 4. Draw Crosshairs & Calibration Lines (Sci-Fi Matrix feel)
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(time * 0.00005);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            // Draw 8 cardinal/ordinal lines
            const maxRadius = Math.min(w, h) * 0.6;
            for (let i = 0; i < 8; i++) {
                ctx.moveTo(rings[0].radius, 0); // start from inner ring
                ctx.lineTo(maxRadius, 0); // end at outer bounds
                ctx.rotate(Math.PI / 4);
            }
            ctx.stroke();
            ctx.restore();

            // 5. Draw Orbital Data Nodes (Tian Gan, Di Zhi, Ba Gua)
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            orbits.forEach((orbit, orbitIndex) => {
                const angleStep = (Math.PI * 2) / orbit.items.length;
                const currentRotation = time * orbit.speed;

                for (let i = 0; i < orbit.items.length; i++) {
                    const itemAngle = i * angleStep + currentRotation;

                    const x = centerX + Math.cos(itemAngle) * orbit.radius;
                    const y = centerY + Math.sin(itemAngle) * orbit.radius;

                    // Calculate distance to current pointer
                    // Mobile user needs a slightly larger activation radius because fingers are imprecise
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let activeRatio = 0;
                    const activationRadius = isMobile ? 180 : 150;
                    if (dist < activationRadius) {
                        activeRatio = (activationRadius - dist) / activationRadius;
                    }

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(itemAngle + Math.PI / 2);

                    // Draw the character/node
                    ctx.font = orbit.font;

                    if (activeRatio > 0) {
                        // Activated state: bright gold/white + tech bracket
                        ctx.fillStyle = `rgba(212, 175, 55, ${isMobile ? 0.3 + activeRatio * 0.5 : 0.4 + activeRatio * 0.6})`;

                        if (!isMobile) {
                            ctx.shadowBlur = 10;
                            ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
                        }

                        // Draw bracket like [ 甲 ]
                        if (orbitIndex !== 3) {
                            ctx.font = "10px var(--font-sans)";
                            ctx.fillText("[", -15, 0);
                            ctx.fillText("]", 15, 0);
                        }
                    } else {
                        ctx.fillStyle = orbit.color;
                        ctx.shadowBlur = 0;
                    }

                    ctx.font = orbit.font; // Restore font
                    ctx.fillText(orbit.items[i], 0, 0);

                    ctx.restore();

                    // Connect active nodes to the center (Data extraction line)
                    if (activeRatio > 0) {
                        ctx.beginPath();
                        ctx.moveTo(centerX, centerY);
                        ctx.lineTo(x, y);
                        ctx.strokeStyle = `rgba(212, 175, 55, ${activeRatio * 0.25})`; // Tuned line opacity
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            window.removeEventListener("touchstart", handleTouchMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleMouseLeave);
            window.removeEventListener("touchcancel", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
            style={{ opacity: 0.85 }}
        />
    );
}
