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

        let w = window.innerWidth;
        let h = window.innerHeight;

        const resizeCanvas = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            // Handle High-DPI (Retina) displays to prevent blurry text and graphics
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
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        // Stars removed: Now handled by GlobalStarfield in layout

        // Dimensional orbital configuration (scaled by logical size)
        const minDim = Math.min(w, h);
        const serifFamily = '"New York", ui-serif, "Songti SC", "STSong", "Noto Serif SC", serif';
        const sansFamily = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "PingFang SC", sans-serif';

        const orbits = [
            { radius: minDim * 0.15, speed: 0.0003, items: GUA_XIANG, color: "rgba(212, 175, 55, 0.7)", font: `21px ${serifFamily}` }, // Ba Gua (Inner)
            { radius: minDim * 0.25, speed: -0.00015, items: TIAN_GAN, color: "rgba(255, 255, 255, 0.6)", font: `17px ${serifFamily}` }, // Tian Gan (Middle)
            { radius: minDim * 0.35, speed: 0.0001, items: DI_ZHI, color: "rgba(59, 130, 246, 0.7)", font: `17px ${serifFamily}` }, // Di Zhi (Outer)
            { radius: minDim * 0.45, speed: -0.00005, items: Array(24).fill("·"), color: "rgba(255, 255, 255, 0.4)", font: `14px ${sansFamily}` } // Data nodes (Far Outer)
        ];

        // Precision structural rings
        const rings = [
            { radius: minDim * 0.15, dash: [2, 4], color: "rgba(212, 175, 55, 0.15)" },
            { radius: minDim * 0.25, dash: [100, 20], color: "rgba(255, 255, 255, 0.05)" },
            { radius: minDim * 0.35, dash: [40, 10, 2, 10], color: "rgba(59, 130, 246, 0.08)" },
            { radius: minDim * 0.45, dash: [2, 12], color: "rgba(255, 255, 255, 0.03)" },
            { radius: minDim * 0.6, dash: [], color: "rgba(255, 255, 255, 0.02)" }
        ];

        let time = 0;

        const render = () => {
            time++;

            // Clear canvas entirely to remain transparent
            ctx.clearRect(0, 0, w, h);

            const centerX = w / 2;
            const centerY = h / 2;

            // Lerp mouse
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

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

                    // Check distance to mouse to calculate "activation" glow
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let activeRatio = 0;
                    if (dist < 150) {
                        activeRatio = (150 - dist) / 150;
                    }

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(itemAngle + Math.PI / 2);

                    // Draw the character/node
                    ctx.font = orbit.font;

                    if (activeRatio > 0) {
                        // Activated state: bright gold/white + tech bracket
                        ctx.fillStyle = `rgba(212, 175, 55, ${0.4 + activeRatio * 0.6})`;
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = "rgba(212, 175, 55, 0.8)";

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
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
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
