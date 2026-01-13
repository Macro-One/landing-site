'use client';

import React from 'react';

export const TheBleedingEdge: React.FC = () => {
    return (
        <section className="bg-transparent py-32 px-6 border-t border-macro-paper-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

                {/* Content */}
                <div className="md:w-1/2">
                    <div className="inline-block px-3 py-1 border border-macro-orange/50 rounded-full text-macro-orange text-xs font-bold uppercase tracking-widest mb-6">
                        Proprietary IP
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-macro-ink mb-8">
                        We Don't Just Buy. <br />
                        <span className="text-macro-graphite">We Build.</span>
                    </h2>
                    <p className="text-macro-graphite text-lg leading-relaxed mb-8">
                        Traditional infrastructure is too slow for AI. Our proprietary modular design deploys <span className="text-macro-ink font-bold">80% faster</span> and <span className="text-macro-ink font-bold">30-50% cheaper</span> than the industry standard.
                    </p>
                </div>

                {/* Visual: Schematic Wireframe */}
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-macro-orange/20 blur-[100px] rounded-full opacity-20" />
                    <div className="relative border border-macro-paper-border bg-macro-paper p-8 rounded-xl shadow-sm">
                        {/* Schematic SVG */}
                        <svg className="w-full h-auto text-macro-ink/80" viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1">
                            {/* Grid Background */}
                            <path d="M0 0h400v300H0z" fill="none" />
                            <path d="M40 0v300 M80 0v300 M120 0v300 M160 0v300 M200 0v300 M240 0v300 M280 0v300 M320 0v300 M360 0v300" stroke="#1A1A1A" strokeOpacity="0.05" />
                            <path d="M0 40h400 M0 80h400 M0 120h400 M0 160h400 M0 200h400 M0 240h400 M0 280h400" stroke="#1A1A1A" strokeOpacity="0.05" />

                            {/* Modular Box Schematic */}
                            <rect x="100" y="100" width="200" height="100" stroke="#1A1A1A" strokeWidth="2" />
                            <line x1="100" y1="100" x2="140" y2="60" stroke="#1A1A1A" />
                            <line x1="300" y1="100" x2="340" y2="60" stroke="#1A1A1A" />
                            <line x1="300" y1="200" x2="340" y2="160" stroke="#1A1A1A" />
                            <rect x="140" y="60" width="200" height="100" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 4" />

                            {/* Annotations */}
                            <line x1="340" y1="110" x2="380" y2="110" stroke="#FF5F00" />
                            <text x="385" y="115" fill="#FF5F00" fontSize="10" fontFamily="monospace">COOLING UNIT</text>

                            <line x1="200" y1="200" x2="200" y2="240" stroke="#FF5F00" />
                            <text x="180" y="255" fill="#FF5F00" fontSize="10" fontFamily="monospace">POWER INTAKE</text>
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
};
