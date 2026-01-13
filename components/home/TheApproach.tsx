'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const TheApproach: React.FC = () => {
    return (
        <section className="bg-transparent py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 border-b border-macro-paper-border pb-8 flex justify-between items-end">
                    <div>
                        <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            System Status
                        </span>
                        <h2 className="text-4xl font-bold text-macro-ink">
                            Brutally Honest Capital.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs text-macro-graphite font-mono">LIVE METRICS</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Speed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-macro-paper border border-macro-paper-border p-8 rounded-lg hover:border-macro-orange/50 transition-colors group shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-sm font-medium text-macro-graphite uppercase tracking-widest">Speed</h3>
                            <svg className="w-5 h-5 text-macro-ink/50 group-hover:text-macro-orange transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        <div className="mb-4">
                            <span className="text-6xl font-bold text-macro-ink font-sans tracking-tight">18 <span className="text-2xl text-macro-graphite font-light">mo</span></span>
                        </div>
                        <p className="text-macro-graphite text-sm mb-2 font-medium">Average Deployment Time</p>
                        <p className="text-macro-ink/60 text-xs leading-relaxed border-t border-macro-paper-border pt-4 mt-4">
                            "30% faster than industry standard via pre-fab modularity."
                        </p>
                    </motion.div>

                    {/* Card 2: Power */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-macro-paper border border-macro-paper-border p-8 rounded-lg hover:border-macro-orange/50 transition-colors group shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-sm font-medium text-macro-graphite uppercase tracking-widest">Power</h3>
                            <svg className="w-5 h-5 text-macro-ink/50 group-hover:text-macro-orange transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /></svg>
                        </div>
                        <div className="mb-4">
                            <span className="text-6xl font-bold text-macro-ink font-sans tracking-tight">100<span className="text-2xl text-macro-graphite font-light">%</span></span>
                        </div>
                        <p className="text-macro-graphite text-sm mb-2 font-medium">Renewable Transition</p>
                        <p className="text-macro-ink/60 text-xs leading-relaxed border-t border-macro-paper-border pt-4 mt-4">
                            "Securing PPA (Power Purchase Agreements) before breaking ground."
                        </p>
                    </motion.div>

                    {/* Card 3: Capital */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-macro-paper border border-macro-paper-border p-8 rounded-lg hover:border-macro-orange/50 transition-colors group shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-sm font-medium text-macro-graphite uppercase tracking-widest">Capital</h3>
                            <svg className="w-5 h-5 text-macro-ink/50 group-hover:text-macro-orange transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <div className="mb-4">
                            <span className="text-6xl font-bold text-macro-ink font-sans tracking-tight">$0</span>
                        </div>
                        <p className="text-macro-graphite text-sm mb-2 font-medium">Speculative Deployments</p>
                        <p className="text-macro-ink/60 text-xs leading-relaxed border-t border-macro-paper-border pt-4 mt-4">
                            "We don't build on hope. We build on contracts."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
