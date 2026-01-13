'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

export function TheMission() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Parallax effect

    return (
        <section ref={containerRef} className="relative min-h-screen border-t border-macro-paper-border font-sans bg-transparent overflow-hidden">

            {/* Vignette Overlay for Paper Feel */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.03)_100%)] mix-blend-multiply" />

            <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 min-h-screen">
                {/* Left Column - Sticky Anchor */}
                <div className="relative md:sticky md:top-0 md:h-screen flex flex-col justify-center px-8 md:px-24 py-12 md:py-0">
                    {/* Orange Anchor Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-macro-orange" />

                    <div className="pl-6 md:pl-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter text-macro-ink"
                        >
                            We Don&apos;t Bet<br />
                            On Chance.
                            <div className="h-12 md:h-20" /> {/* Gap */}
                            <span className="block mt-4">
                                We Industrialize<br />
                                Innovation.
                            </span>
                        </motion.h2>
                    </div>
                </div>

                {/* Right Column - Manifesto with Parallax */}
                <div className="flex flex-col justify-center items-end px-8 md:px-24 py-24 md:py-0 relative">
                    <motion.div
                        style={{ y }}
                        className="max-w-xl w-full p-12 md:p-16 relative"
                    >
                        {/* JetBrains Mono Label */}
                        <p className="font-mono text-macro-graphite text-xs tracking-widest uppercase mb-8 border-b border-macro-paper-border pb-2 inline-block">
                            The Engine // 001
                        </p>

                        {/* Main Text */}
                        <div className="space-y-8">
                            <p className="text-xl md:text-3xl text-macro-ink font-light leading-relaxed font-sans">
                                macro.one is where technical talent, long-term capital, and operational depth converge.
                            </p>

                            <div className="w-12 h-1 bg-macro-ink/10" />

                            <p className="text-lg md:text-xl text-macro-graphite font-light leading-relaxed">
                                We exist to build the most disciplined engine for creating and scaling generational companies. Innovation should not rely on luck. It should be driven by insight, execution, and long-term conviction.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
