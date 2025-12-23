'use client';

import React from 'react';

const metrics = [
    { value: "US $1B+", label: "Exit of KIO Networks", sub: "(Largest DC platform in LatAm)" },
    { value: "US $500M", label: "Exit of RedIT", sub: "to American Tower" },
    { value: "0%", label: "Loss Ratio", sub: "on core infrastructure investments" },
    { value: "11+ Years", label: "Partners Collaborating", sub: "together" },
];

const team = [
    { name: "Sergio Rosengaus", role: "The Operator", desc: "Founder of KIO." },
    { name: "Felipe Duarte", role: "The Architect", desc: "Former Government Infrastructure Lead." },
    { name: "Alex Fraind", role: "The Dealmaker", desc: "M&A & Structuring." },
];

export const TheAuthority: React.FC = () => {
    return (
        <section className="bg-white text-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        The Authority
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Operators. Not Tourists.
                    </h2>
                    <p className="text-xl text-neutral-500 font-light">
                        We built the asset class before it had a name.
                    </p>
                </div>

                {/* Metrics Strip */}
                <div className="flex overflow-x-auto pb-12 mb-24 border-b border-black/10 gap-16 md:gap-32 snap-x hide-scrollbar">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex-shrink-0 min-w-[200px] snap-start">
                            <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">{metric.value}</div>
                            <div className="text-sm font-bold uppercase tracking-wide mb-1">{metric.label}</div>
                            <div className="text-sm text-neutral-500">{metric.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="border-t border-black p-8 hover:bg-neutral-50 transition-colors cursor-default group">
                            <div className="text-xs text-neutral-400 uppercase tracking-widest mb-8 opacity-0 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <div className="text-macro-orange text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>
                            <p className="text-neutral-600">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
