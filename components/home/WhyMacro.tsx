'use client';

import React from 'react';
import { Settings, Ruler, Globe } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Counter component for the "digital meter" effect
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    React.useEffect(() => {
        const controls = animate(count, value, { duration });
        return controls.stop;
    }, [count, value, duration]);

    return <motion.span>{rounded}</motion.span>;
};

const items = [
    {
        title: "OPERATOR HERITAGE",
        metricPrefix: "US$ ",
        metricValue: 1,
        metricSuffix: "B+",
        label: "Verified Exit",
        description: "We don't just allocate. We build. Founders of the largest data center platform in LATAM (KIO), exited to I-Squared Capital.",
        icon: Settings
    },
    {
        title: "TECHNICAL EDGE",
        metricPrefix: "",
        metricValue: 0,
        metricSuffix: "%",
        label: "Loss Ratio",
        description: "Zero permanent capital loss in core infrastructure investments over 20+ years of operation. Engineering precision meets financial discipline.",
        icon: Ruler
    },
    {
        title: "CROSS-BORDER SCALE",
        metricPrefix: "",
        metricValue: 3,
        metricSuffix: "",
        label: "Continents",
        description: "Active execution across Mexico, USA, and Spain. Bridging the gap between global institutional capital and local asset scarcity.",
        icon: Globe
    }
];

export const WhyMacro: React.FC = () => {
    return (
        <section className="bg-transparent py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-macro-ink uppercase tracking-wider font-kanit">
                        System Status
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-macro-paper-border bg-transparent">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`
                                relative p-12 border-macro-paper-border group transition-all duration-300
                                ${index !== items.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}
                                hover:border hover:border-macro-orange hover:bg-macro-paper hover:z-10 hover:shadow-sm
                            `}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Orange Glow Gradient on Hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-macro-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-12">
                                    <h3 className="text-lg font-bold text-macro-graphite group-hover:text-macro-ink transition-colors font-kanit tracking-wider">
                                        {item.title}
                                    </h3>
                                    <item.icon className="w-6 h-6 text-macro-ink/40 group-hover:text-macro-orange transition-colors" />
                                </div>

                                {/* Metric */}
                                <div className="mb-4 font-mono text-5xl md:text-6xl text-macro-ink font-bold tracking-tighter">
                                    {item.metricPrefix}
                                    <Counter value={item.metricValue} />
                                    {item.metricSuffix}
                                </div>

                                {/* Label */}
                                <div className="text-macro-orange text-xs font-bold uppercase tracking-[0.2em] mb-8">
                                    {item.label}
                                </div>

                                {/* Description */}
                                <p className="text-macro-ink/80 font-light leading-relaxed mt-auto">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
