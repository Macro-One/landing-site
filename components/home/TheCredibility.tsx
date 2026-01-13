'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
    {
        value: 75,
        suffix: '',
        label: 'Years of combined leadership experience across core sectors',
    },
    {
        value: 11,
        suffix: '',
        label: 'Years working together as an operating team',
    },
    {
        value: 13,
        suffix: '',
        label: 'Deals executed across macro.one focus areas',
    },
    {
        value: 4.6,
        suffix: 'B',
        prefix: '$',
        label: 'In combined transaction history',
        isFloat: true,
    },
];

function Counter({ value, prefix = '', suffix = '', isFloat = false }: { value: number; prefix?: string; suffix?: string; isFloat?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2000,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = isFloat
                    ? latest.toFixed(1)
                    : Math.floor(latest).toString();
            }
        });
    }, [springValue, isFloat]);

    return (
        <span className="flex items-baseline">
            {prefix && <span>{prefix}</span>}
            <span ref={ref}>0</span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
}

export function TheCredibility() {
    return (
        <section className="py-24 bg-transparent text-macro-ink relative overflow-hidden">
            {/* Clean Paper Background - Rely on global sand + noise, just add structural lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-macro-paper-border opacity-50" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-macro-paper-border opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto mb-20 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-macro-ink">
                        <span className="text-macro-orange">macro.one</span> is a highly specialized, operator-led institutional asset manager with dual-track strategies targeting the infrastructure and credit markets defining the next decade
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-macro-paper-border pt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <div className="text-6xl md:text-7xl font-bold tracking-tighter text-macro-ink mb-4 tabular-nums w-full border-b border-macro-paper-border pb-4 group-hover:border-macro-orange/50 transition-colors duration-500">
                                <Counter
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    isFloat={stat.isFloat}
                                />
                            </div>
                            <p className="text-sm md:text-base text-macro-graphite font-medium uppercase tracking-wider leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
