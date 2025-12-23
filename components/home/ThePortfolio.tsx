'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ThePortfolio: React.FC = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    // Locations as percentage coordinates on a simplified map
    // Queretaro (Central Mexico): ~35% X, ~50% Y
    // Texas: ~40% X, ~35% Y
    // East Coast US: ~60% X, ~30% Y
    // Silicon Valley: ~20% X, ~35% Y

    // Using a simplified abstract SVG map for visual effect

    return (
        <section className="relative min-h-screen bg-[#080808] overflow-hidden flex flex-col items-center justify-center py-24">
            <div className="text-center mb-12 z-20">
                <span className="text-macro-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                    Deployment Zones
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-macro-cream">
                    The Macro View
                </h2>
            </div>

            <div className="relative w-full max-w-5xl aspect-[16/9] bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="text-macro-cream/40 font-mono text-sm uppercase tracking-widest border border-white/10 px-4 py-2 rounded">[ Map Visualization Placeholder ]</span>
                </div>

                {/* CTA Overlay */}
                <div className="absolute bottom-8 right-8 z-30">
                    <button className="flex items-center gap-2 text-macro-cream hover:text-macro-orange transition-colors text-sm uppercase tracking-widest group/btn">
                        Explore The Infrastructure
                        <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
