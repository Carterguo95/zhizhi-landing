"use client";

import { useEffect, useRef } from "react";

const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const trigrams = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];

type PointerState = { x: number; y: number; targetX: number; targetY: number; active: boolean };

export function AstrolabeCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        let width = 0;
        let height = 0;
        let frame = 0;
        let time = 0;
        let inViewport = true;
        let documentVisible = !document.hidden;
        const pointer: PointerState = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        const resize = () => {
            const bounds = canvas.getBoundingClientRect();
            const density = Math.min(window.devicePixelRatio || 1, 2);
            width = bounds.width;
            height = bounds.height;
            canvas.width = Math.max(1, Math.round(width * density));
            canvas.height = Math.max(1, Math.round(height * density));
            context.setTransform(density, 0, 0, density, 0, 0);
            pointer.x = pointer.targetX = width / 2;
            pointer.y = pointer.targetY = height / 2;
            draw();
        };

        const draw = () => {
            const minDimension = Math.min(width, height);
            if (!minDimension) return;

            context.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            const isMobile = width < 620;
            const radiusScale = isMobile ? 0.9 : 1;

            if (!pointer.active && !reducedMotion.matches) {
                pointer.targetX = centerX + Math.cos(time * 0.006) * minDimension * 0.24;
                pointer.targetY = centerY + Math.sin(time * 0.006) * minDimension * 0.24;
            }

            const interpolation = pointer.active ? 0.14 : 0.025;
            pointer.x += (pointer.targetX - pointer.x) * interpolation;
            pointer.y += (pointer.targetY - pointer.y) * interpolation;

            const ringRadii = [0.14, 0.245, 0.35, 0.445, 0.495].map((factor) => minDimension * factor * radiusScale);

            context.save();
            context.translate(centerX, centerY);
            context.strokeStyle = "rgba(32, 38, 37, 0.16)";
            context.lineWidth = 0.7;
            for (let index = 0; index < 12; index += 1) {
                const angle = (Math.PI * 2 * index) / 12 + time * 0.00008;
                context.beginPath();
                context.moveTo(Math.cos(angle) * ringRadii[0], Math.sin(angle) * ringRadii[0]);
                context.lineTo(Math.cos(angle) * ringRadii[4], Math.sin(angle) * ringRadii[4]);
                context.stroke();
            }
            context.restore();

            const ringStyles = [
                { dash: [2, 6], color: "rgba(146, 94, 97, 0.26)" },
                { dash: [52, 12, 2, 12], color: "rgba(78, 112, 150, 0.24)" },
                { dash: [18, 8], color: "rgba(24, 59, 57, 0.22)" },
                { dash: [2, 10], color: "rgba(32, 38, 37, 0.20)" },
                { dash: [], color: "rgba(32, 38, 37, 0.30)" },
            ];

            ringRadii.forEach((radius, index) => {
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, Math.PI * 2);
                context.setLineDash(ringStyles[index].dash);
                context.strokeStyle = ringStyles[index].color;
                context.lineWidth = index === ringRadii.length - 1 ? 1 : 0.75;
                context.stroke();
            });
            context.setLineDash([]);

            for (let index = 0; index < 72; index += 1) {
                const angle = (Math.PI * 2 * index) / 72 - Math.PI / 2;
                const outer = ringRadii[4];
                const inner = outer - (index % 6 === 0 ? 10 : 4);
                context.beginPath();
                context.moveTo(centerX + Math.cos(angle) * inner, centerY + Math.sin(angle) * inner);
                context.lineTo(centerX + Math.cos(angle) * outer, centerY + Math.sin(angle) * outer);
                context.strokeStyle = index % 6 === 0 ? "rgba(32,38,37,.42)" : "rgba(32,38,37,.18)";
                context.lineWidth = index % 6 === 0 ? 1 : 0.6;
                context.stroke();
            }

            const orbits = [
                { items: trigrams, radius: ringRadii[0], speed: 0.00042, color: "rgba(146, 94, 97, 0.76)", size: isMobile ? 12 : 17 },
                { items: heavenlyStems, radius: ringRadii[1], speed: -0.00024, color: "rgba(32, 38, 37, 0.62)", size: isMobile ? 11 : 15 },
                { items: earthlyBranches, radius: ringRadii[2], speed: 0.00016, color: "rgba(78, 112, 150, 0.82)", size: isMobile ? 11 : 15 },
                { items: Array.from({ length: 24 }, (_, index) => String(index + 1).padStart(2, "0")), radius: ringRadii[3], speed: -0.00008, color: "rgba(32, 38, 37, 0.42)", size: isMobile ? 7 : 9 },
            ];

            context.textAlign = "center";
            context.textBaseline = "middle";

            orbits.forEach((orbit, orbitIndex) => {
                orbit.items.forEach((item, itemIndex) => {
                    const angle = (Math.PI * 2 * itemIndex) / orbit.items.length + time * orbit.speed;
                    const x = centerX + Math.cos(angle) * orbit.radius;
                    const y = centerY + Math.sin(angle) * orbit.radius;
                    const distance = Math.hypot(pointer.x - x, pointer.y - y);
                    const activationRadius = isMobile ? 92 : 126;
                    const activeRatio = pointer.active && distance < activationRadius ? 1 - distance / activationRadius : 0;

                    context.save();
                    context.translate(x, y);
                    context.rotate(angle + Math.PI / 2);
                    context.font = orbitIndex === 3
                        ? `400 ${orbit.size}px "Fragment Mono", monospace`
                        : `400 ${orbit.size}px "Noto Serif SC", "Songti SC", serif`;
                    context.fillStyle = activeRatio > 0 ? `rgba(213, 169, 92, ${0.48 + activeRatio * 0.52})` : orbit.color;
                    context.fillText(item, 0, 0);
                    context.restore();

                    if (activeRatio > 0) {
                        context.beginPath();
                        context.moveTo(centerX, centerY);
                        context.lineTo(x, y);
                        context.strokeStyle = `rgba(213, 169, 92, ${activeRatio * 0.34})`;
                        context.lineWidth = 0.8;
                        context.stroke();
                    }
                });
            });

            context.beginPath();
            context.arc(centerX, centerY, 3.5, 0, Math.PI * 2);
            context.fillStyle = "#183b39";
            context.fill();
            context.beginPath();
            context.arc(centerX, centerY, ringRadii[0] * 0.58, 0, Math.PI * 2);
            context.strokeStyle = "rgba(213, 169, 92, 0.55)";
            context.lineWidth = 1;
            context.stroke();
        };

        const animate = () => {
            if (!inViewport || !documentVisible || reducedMotion.matches) return;
            time += 1;
            draw();
            frame = window.requestAnimationFrame(animate);
        };

        const restart = () => {
            window.cancelAnimationFrame(frame);
            draw();
            if (inViewport && documentVisible && !reducedMotion.matches) frame = window.requestAnimationFrame(animate);
        };

        const onPointerMove = (event: PointerEvent) => {
            const bounds = canvas.getBoundingClientRect();
            pointer.active = true;
            pointer.targetX = event.clientX - bounds.left;
            pointer.targetY = event.clientY - bounds.top;
            if (reducedMotion.matches) draw();
        };
        const onPointerLeave = () => { pointer.active = false; };
        const onVisibilityChange = () => { documentVisible = !document.hidden; restart(); };

        const resizeObserver = new ResizeObserver(resize);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            inViewport = entry.isIntersecting;
            restart();
        }, { rootMargin: "120px" });

        resizeObserver.observe(canvas);
        intersectionObserver.observe(canvas);
        canvas.addEventListener("pointermove", onPointerMove);
        canvas.addEventListener("pointerleave", onPointerLeave);
        document.addEventListener("visibilitychange", onVisibilityChange);
        reducedMotion.addEventListener("change", restart);
        resize();
        restart();

        return () => {
            window.cancelAnimationFrame(frame);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            canvas.removeEventListener("pointermove", onPointerMove);
            canvas.removeEventListener("pointerleave", onPointerLeave);
            document.removeEventListener("visibilitychange", onVisibilityChange);
            reducedMotion.removeEventListener("change", restart);
        };
    }, []);

    return <canvas ref={canvasRef} className="astrolabe-canvas" aria-hidden="true" />;
}
