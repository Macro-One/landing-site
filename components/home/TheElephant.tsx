'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TheElephant: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative min-h-screen bg-macro-charcoal text-white flex flex-col md:flex-row overflow-hidden">
            {/* Left Side: The Elephant Icon */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative bg-[#0a0a0a]">
                <div
                    className="relative w-64 h-64 md:w-96 md:h-96 cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Dark/Hidden Icon (Base) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#151515] fill-current drop-shadow-2xl">
                        <path d="M20 20 L20 80 L35 80 L35 50 L50 65 L65 50 L65 80 L80 80 L80 20 L65 20 L50 35 L35 20 Z" />
                    </svg>

                    {/* Beam of Light / Reveal Layer */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full text-macro-charcoal fill-current stroke-macro-orange stroke-[0.5] drop-shadow-[0_0_15px_rgba(255,95,0,0.5)]">
                            <path d="M20 20 L20 80 L35 80 L35 50 L50 65 L65 50 L65 80 L80 80 L80 20 L65 20 L50 35 L35 20 Z" />
                            {/* Subtle texture overlay could go here */}
                            <defs>
                                <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#FF5F00" stopOpacity="0.1" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            <path d="M20 20 L20 80 L35 80 L35 50 L50 65 L65 50 L65 80 L80 80 L80 20 L65 20 L50 35 L35 20 Z" fill="url(#beam)" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Copy */}
            <div className="w-full md:w-1/2 min-h-screen flex items-center p-12 md:p-24 bg-macro-charcoal border-l border-white/5">
                <div className="max-w-xl">
                    <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                        The Elephant in the Room
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-macro-cream leading-tight">
                        The Limit is Physics.
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        The market believes the constraint on AI is chip supply. The market is wrong. The constraint is power. The current grid cannot support the requested compute. We don't just find deals; we solve the energy equation that makes the deals possible. We face the bottleneck others ignore.
                    </p>
                </div>
            </div>
        </section>
    );
};
