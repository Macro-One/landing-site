'use client';

import React from 'react';
import { Server, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const TheStrategies: React.FC = () => {
    return (
        <section className="bg-[#0F0F0F] py-32 px-6 relative overflow-hidden">
            {/* Architectural Grid Overlay (5% Opacity) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Capital Deployment
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-macro-cream max-w-4xl leading-tight">
                        Dual-track strategies targeting the infrastructure and credit markets defining the next decade.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Panel 1: AI Infrastructure (The Hardware) */}
                    <div className="group bg-[#141414] border border-white/10 p-8 md:p-12 hover:border-macro-orange transition-colors duration-300 flex flex-col justify-between min-h-[600px]">
                        <div>
                            {/* Icon & Tagline */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-white/5 rounded border border-white/5">
                                    <Server className="w-8 h-8 text-macro-cream/80" />
                                </div>
                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">The Hardware</span>
                            </div>

                            <h3 className="text-3xl font-bold text-macro-cream mb-2 uppercase tracking-wide">AI Infrastructure</h3>
                            <p className="text-macro-orange text-sm font-medium uppercase tracking-widest mb-6">Building the Future's Foundation</p>

                            <p className="text-macro-cream/80 leading-relaxed mb-8">
                                Investment focus on data centers, AI compute, and digital infrastructure powering the next economy.
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-3 mb-12">
                                {['Data Centers & AI Cloud (AI Factories)', 'Telecommunications (AI Highways)', 'Energy (AI Fuel)', 'Supply Chain (AI Circuitry)'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                                        <div className="w-1 h-1 bg-macro-orange rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data Grid */}
                        <div className="border-t border-white/10 pt-8 mt-auto">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Ticket Size</div>
                                    <div className="text-macro-cream font-mono text-sm">$15M - $100M+</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Structure</div>
                                    <div className="text-macro-cream font-mono text-sm">Control, Minority, Equity</div>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Rationale</div>
                                    <div className="text-macro-cream font-mono text-sm">Growth, M&A, Platform Creation</div>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-sm text-neutral-300 uppercase tracking-widest font-bold group-hover:text-macro-orange transition-colors">
                                View Infrastructure Strategy
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Panel 2: Private Credit (The Liquidity) */}
                    <div className="group bg-[#141414] border border-white/10 p-8 md:p-12 hover:border-macro-orange transition-colors duration-300 flex flex-col justify-between min-h-[600px]">
                        <div>
                            {/* Icon & Tagline */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-white/5 rounded border border-white/5">
                                    <TrendingUp className="w-8 h-8 text-macro-cream/80" />
                                </div>
                                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">The Liquidity</span>
                            </div>

                            <h3 className="text-3xl font-bold text-macro-cream mb-2 uppercase tracking-wide">Private Credit</h3>
                            <p className="text-macro-orange text-sm font-medium uppercase tracking-widest mb-6">Mexico Growth Capital</p>

                            <p className="text-macro-cream/80 leading-relaxed mb-8">
                                Addressing the structural financing gap in Mexico. Focusing on mid-sized, high-growth companies lacking traditional bank access.
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-3 mb-12">
                                {['Senior & Subordinated Debt', 'Mezzanine', 'Structured Debt with Warrants', 'Venture Debt'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-400">
                                        <div className="w-1 h-1 bg-macro-orange rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data Grid */}
                        <div className="border-t border-white/10 pt-8 mt-auto">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Ticket Size</div>
                                    <div className="text-macro-cream font-mono text-sm">$10M - $15M</div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Target Returns</div>
                                    <div className="text-white font-mono text-sm font-bold bg-white/10 px-2 rounded inline-block">16% - 20%</div>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <div className="text-[10px] uppercase text-neutral-500 mb-1">Focus</div>
                                    <div className="text-macro-cream font-mono text-sm">PE/VC-backed companies</div>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 text-sm text-neutral-300 uppercase tracking-widest font-bold group-hover:text-macro-orange transition-colors">
                                View Credit Strategy
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
