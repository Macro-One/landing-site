'use client';

import React from 'react';
import { CinematicHero } from '@/components/home/CinematicHero';

export default function HomePage() {
    return (
        <main className="bg-neutral-950 min-h-screen selection:bg-amber-500/30">
            {/* 1. HERO: CINEMATIC VISION */}
            <CinematicHero />
        </main>
    );
}
