'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
    {
        title: "AI FACTORIES",
        subtext: "Hyperscale & Edge Facilities.",
        detail: "Bleeding Edge modular design. 4-month deployment vs industry standard.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
            </svg>
        )
    },
    {
        title: "THE AI HIGHWAY",
        subtext: "Fiber, Towers, & Backbone.",
        detail: "Low-latency transport. Because data has mass.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 10l-2 10" />
                <path d="M22 20L10 10" />
                <path d="M14 4l8 6" />
                <path d="M8 6l4-2" />
                <path d="M12 12l2 2" />
            </svg>
        )
    },
    {
        title: "AI FUEL",
        subtext: "Generation & Storage.",
        detail: "The grid is the constraint. We secure the gigawatts first.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        )
    },
    {
        title: "THE VALUE CHAIN",
        subtext: "Cooling & Components.",
        detail: "Liquid cooling and backup power for high-density compute.",
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        )
    }
];

export const TheEcosystem: React.FC = () => {
    return (
        <section className="bg-[#111] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        The Ecosystem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-macro-cream">
                        The Four Pillars.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 p-12 hover:border-macro-orange/50 transition-all duration-300 overflow-hidden min-h-[300px] flex flex-col justify-between">
                            {/* Background Hover Effect */}
                            <div className="absolute inset-0 bg-macro-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="text-white/50 mb-6 group-hover:text-macro-orange transition-colors">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-macro-cream mb-2 uppercase tracking-tight">{pillar.title}</h3>
                                <p className="text-neutral-500 font-medium mb-8">{pillar.subtext}</p>
                            </div>

                            <div className="relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="w-12 h-px bg-macro-orange mb-4" />
                                <p className="text-macro-cream/80 text-sm leading-relaxed max-w-sm">
                                    {pillar.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
