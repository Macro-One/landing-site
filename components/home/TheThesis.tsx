'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TheThesis: React.FC = () => {
    return (
        <section className="bg-macro-charcoal py-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-24">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        History Favorites the Enablers
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-macro-cream leading-tight max-w-3xl">
                        The enduring returns do not go to the consumer apps. <br />
                        <span className="text-neutral-500">They go to the rubber, the fuel, and the steel.</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-[30%] left-0 w-full h-px bg-white/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                        {/* Stage 1: Industrial */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="w-4 h-4 bg-neutral-800 rounded-full mb-8 border border-white/20 hidden md:block relative z-10 group-hover:bg-white transition-colors" />
                            <div className="mb-6 p-6 border border-white/5 bg-white/5 rounded-xl h-48 flex flex-col justify-between hover:border-white/10 transition-colors">
                                <span className="text-xs uppercase tracking-widest text-neutral-500">Stage 1: Industrial</span>
                                {/* Icon: Tire (Circle with tread) */}
                                <svg className="w-12 h-12 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 3v18" opacity="0.5" />
                                    <path d="M3 12h18" opacity="0.5" />
                                    <path d="M5.6 5.6l12.8 12.8" opacity="0.5" />
                                    <path d="M18.4 5.6L5.6 18.4" opacity="0.5" />
                                </svg>
                                <div className="text-2xl font-bold text-white">Michelin <span className="text-neutral-600 text-lg font-normal">(Not Ford)</span></div>
                            </div>
                        </motion.div>

                        {/* Stage 2: Internet */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="w-4 h-4 bg-neutral-800 rounded-full mb-8 border border-white/20 hidden md:block relative z-10 group-hover:bg-white transition-colors" />
                            <div className="mb-6 p-6 border border-white/5 bg-white/5 rounded-xl h-48 flex flex-col justify-between hover:border-white/10 transition-colors">
                                <span className="text-xs uppercase tracking-widest text-neutral-500">Stage 2: Internet</span>
                                {/* Icon: Router */}
                                <svg className="w-12 h-12 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                                    <path d="M6 18h.01" />
                                    <path d="M10 18h.01" />
                                    <path d="M15 10v4" />
                                    <path d="M9 10v4" />
                                    <path d="M12 2v8" />
                                </svg>
                                <div className="text-2xl font-bold text-white">Cisco <span className="text-neutral-600 text-lg font-normal">(Not Yahoo)</span></div>
                            </div>
                        </motion.div>

                        {/* Stage 3: Age of AI */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="w-4 h-4 bg-macro-orange rounded-full mb-8 border border-macro-orange/50 hidden md:block relative z-10 shadow-[0_0_15px_#FF5F00]" />
                            <div className="mb-6 p-6 border border-macro-orange/20 bg-gradient-to-br from-macro-orange/5 to-transparent rounded-xl h-48 flex flex-col justify-between hover:border-macro-orange/40 transition-colors">
                                <span className="text-xs uppercase tracking-widest text-macro-orange">Stage 3: Age of AI</span>
                                {/* Icon: Data Center / Box */}
                                <svg className="w-12 h-12 text-macro-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 6h18" />
                                    <path d="M3 12h18" />
                                    <path d="M3 18h18" />
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M18 6v12" />
                                    <circle cx="6" cy="15" r="0.5" fill="currentColor" />
                                    <circle cx="6" cy="9" r="0.5" fill="currentColor" />
                                </svg>
                                <div className="text-2xl font-bold text-white">Macro.One <span className="text-macro-orange text-lg font-normal">(The Layer 0)</span></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-12 text-center md:text-left">
                        <p className="text-lg text-neutral-400 font-light">
                            We invest in the <span className="text-white font-medium">'Picks & Shovels'</span> of the AI economy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
