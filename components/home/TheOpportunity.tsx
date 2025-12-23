'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TheOpportunity: React.FC = () => {
    const [hoveredBar, setHoveredBar] = useState<string | null>(null);

    return (
        <section className="bg-[#0a0a0a] py-32 px-6 flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-24 items-end">

                {/* Text Content */}
                <div className="md:w-1/3 mb-12 md:mb-0">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        The Opportunity
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        The $116 Billion Deficit.
                    </h2>
                    <p className="text-neutral-400 leading-relaxed mb-6">
                        Proximity to the US is useless without the power to support it. We are capitalizing on the nearshoring energy bottleneck.
                    </p>
                    <div className="bg-[#111] p-6 border border-white/5 rounded-lg">
                        <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Insight</div>
                        <p className="text-white font-medium">
                            "Mexico requires US$23.2B annually in investment. <br />
                            <span className="text-macro-orange">Current Status: Severely Underbuilt.</span>"
                        </p>
                    </div>
                </div>

                {/* Chart Visualization */}
                <div className="md:w-2/3 h-[500px] flex items-end justify-around pb-12 border-b border-white/10 relative">
                    {/* Y-Axis Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        <div className="w-full h-px bg-white border-t border-dashed" />
                        <div className="w-full h-px bg-white border-t border-dashed" />
                        <div className="w-full h-px bg-white border-t border-dashed" />
                        <div className="w-full h-px bg-white border-t border-dashed" />
                    </div>

                    {/* Bar 1: Brazil */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '80%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="w-24 bg-neutral-800 relative group flex flex-col justify-end items-center rounded-t-sm"
                        onMouseEnter={() => setHoveredBar('brazil')}
                        onMouseLeave={() => setHoveredBar(null)}
                    >
                        <div className="mb-4 text-xs font-mono text-neutral-500 uppercase rotate-0">Brazil</div>
                        <div className="absolute bottom-0 w-full bg-neutral-700 h-full opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Bar 2: Chile */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '65%' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="w-24 bg-neutral-800 relative group flex flex-col justify-end items-center rounded-t-sm"
                        onMouseEnter={() => setHoveredBar('chile')}
                        onMouseLeave={() => setHoveredBar(null)}
                    >
                        <div className="mb-4 text-xs font-mono text-neutral-500 uppercase rotate-0">Chile</div>
                        <div className="absolute bottom-0 w-full bg-neutral-700 h-full opacity-50 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    {/* Bar 3: Mexico (The Opportunity) */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '20%' }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                        className="w-24 bg-macro-orange/20 relative group flex flex-col justify-end items-center rounded-t-sm border border-macro-orange/50"
                        onMouseEnter={() => setHoveredBar('mexico')}
                        onMouseLeave={() => setHoveredBar(null)}
                    >
                        {/* Label below bar */}
                        <div className="absolute -bottom-16 text-center">
                            <div className="text-macro-orange font-bold text-sm uppercase tracking-wider">Mexico</div>
                            <div className="text-[10px] text-neutral-500 mt-1 uppercase">Deficit</div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute bottom-0 w-full bg-macro-orange h-full opacity-80 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(255,95,0,0.3)]" />

                        {/* Hover Tooltip/Connector */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredBar === 'mexico' ? 1 : 0 }}
                            className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-black border border-macro-orange p-3 rounded text-center z-10"
                        >
                            <span className="text-xs text-white">4x Capacity Gap vs Peers</span>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
