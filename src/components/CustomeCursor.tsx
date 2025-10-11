import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {


    const cursorRef = useRef<HTMLDivElement | null>(null);
    const dotsRef = useRef<any[]>([]);
    const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const lastFrame = useRef<number>(0);
    const timeoutID = useRef<number | null>(null);
    const idle = useRef<boolean>(false);

    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;

    useEffect(() => {
        class Dot {
            index: number;
            anglespeed: number;
            x: number;
            y: number;
            scale: number;
            range: number;
            limit: number;
            element: HTMLElement;
            lockX: number;
            lockY: number;
            angleX: number;
            angleY: number;

            constructor(index = 0) {
                this.index = index;
                this.anglespeed = 0.05;
                this.x = 0;
                this.y = 0;
                this.scale = 1 - 0.05 * index;
                this.range = width / 2 - (width / 2) * this.scale + 2;
                this.limit = width * 0.75 * this.scale;
                this.element = document.createElement("span");
                this.element.style.position = "absolute";
                this.element.style.display = "block";
                this.element.style.width = "26px";
                this.element.style.height = "26px";
                this.element.style.borderRadius = "20px";
                this.element.style.backgroundColor = "white";
                this.element.style.transformOrigin = "center center";
                this.element.style.transform = `translate(-50%, -50%) scale(${this.scale})`;
                cursorRef.current?.appendChild(this.element);

                this.lockX = 0;
                this.lockY = 0;
                this.angleX = 0;
                this.angleY = 0;
            }

            lock() {
                this.lockX = this.x;
                this.lockY = this.y;
                this.angleX = Math.PI * 2 * Math.random();
                this.angleY = Math.PI * 2 * Math.random();
            }

            draw() {
                if (!idle.current || this.index <= sineDots) {
                    this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
                } else {
                    this.angleX += this.anglespeed;
                    this.angleY += this.anglespeed;
                    this.y = this.lockY + Math.sin(this.angleY) * this.range;
                    this.x = this.lockX + Math.sin(this.angleX) * this.range;
                    this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
                }
            }
        }

        const startIdleTimer = () => {
            timeoutID.current = window.setTimeout(goInactive, idleTimeout);
            idle.current = false;
        };

        const resetIdleTimer = () => {
            if (timeoutID.current) window.clearTimeout(timeoutID.current);
            startIdleTimer();
        };

        const goInactive = () => {
            idle.current = true;
            dotsRef.current.forEach((dot) => dot.lock());
        };

        const buildDots = () => {
            for (let i = 0; i < amount; i++) {
                let dot = new Dot(i);
                dotsRef.current.push(dot);
            }
        };

        const onMouseMove = (event) => {
            mousePosition.current.x = event.clientX - width / 2;
            mousePosition.current.y = event.clientY - width / 2;
            resetIdleTimer();
        };

        const onTouchMove = (event) => {
            mousePosition.current.x = event.touches[0].clientX - width / 2;
            mousePosition.current.y = event.touches[0].clientY - width / 2;
            resetIdleTimer();
        };

        const positionCursor = () => {
            let x = mousePosition.current.x;
            let y = mousePosition.current.y;

            dotsRef.current.forEach((dot, index) => {
                let nextDot = dotsRef.current[index + 1] || dotsRef.current[0];
                dot.x = x;
                dot.y = y;
                dot.draw();

                if (!idle.current || index <= sineDots) {
                    const dx = (nextDot.x - dot.x) * 0.35;
                    const dy = (nextDot.y - dot.y) * 0.35;
                    x += dx;
                    y += dy;
                }
            });
        };

        const render = (timestamp) => {
            positionCursor();
            lastFrame.current = timestamp;
            requestAnimationFrame(render);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        buildDots();
        requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            if (timeoutID.current) window.clearTimeout(timeoutID.current);
            // Clean up dots
            dotsRef.current.forEach((dot) => {
                if (dot.element && dot.element.parentNode) {
                    dot.element.parentNode.removeChild(dot.element);
                }
            });
            dotsRef.current = [];
        };
    }, []);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="fixed top-0 left-0 w-0 h-0 pointer-events-none custom-cursor"
            >
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    filter: "url('#goo')",
                    mixBlendMode: "difference",
                }}
            />
            <style >{`
    @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
    * {
      cursor: none !important;
    }
    input,
    textarea {
      cursor: text !important;
    }
  }
  
  @media (max-width: 1023px), (hover: none), (pointer: coarse) {
    .custom-cursor {
      display: none !important;
    }
  }
      `}</style>
        </>
    );
};

export default CustomCursor;