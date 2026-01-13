'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

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

const metrics = [
    { value: 1, prefix: "US $", suffix: "B+", label: "Exit of KIO Networks", sub: "(Largest DC platform in LatAm)" },
    { value: 500, prefix: "US $", suffix: "M", label: "Exit of RedIT", sub: "to American Tower" },
    { value: 0, suffix: "%", label: "Loss Ratio", sub: "on core infrastructure investments" },
    { value: 11, suffix: "+ Years", label: "Partners Collaborating", sub: "together" },
];

const team = [
    { name: "Sergio Rosengaus", role: "The Operator", desc: "Founder of KIO." },
    { name: "Felipe Duarte", role: "The Architect", desc: "Former Government Infrastructure Lead." },
    { name: "Alex Fraind", role: "The Dealmaker", desc: "M&A & Structuring." },
];

export const TheAuthority: React.FC = () => {
    return (
        <section className="bg-transparent text-macro-ink py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        The Authority
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Operators. Not Tourists.
                    </h2>
                    <p className="text-xl text-macro-graphite font-light">
                        We built the asset class before it had a name.
                    </p>
                </div>

                {/* Metrics Strip */}
                <div className="flex overflow-x-auto pb-12 mb-24 border-b border-macro-paper-border gap-16 md:gap-32 snap-x hide-scrollbar">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex-shrink-0 min-w-[200px] snap-start">
                            <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 flex items-baseline">
                                <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                            </div>
                            <div className="text-sm font-bold uppercase tracking-wide mb-1">{metric.label}</div>
                            <div className="text-sm text-macro-graphite">{metric.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="border-t border-macro-ink p-8 hover:bg-macro-paper transition-colors cursor-default group">
                            <div className="text-xs text-macro-graphite uppercase tracking-widest mb-8 opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <div className="text-macro-orange text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>
                            <p className="text-macro-ink/80">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
