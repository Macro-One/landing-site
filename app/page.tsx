'use client';

import React from 'react';
import { CinematicHero } from '@/components/home/CinematicHero';
import { TheThesis } from '@/components/home/TheThesis';
import { TheOpportunity } from '@/components/home/TheOpportunity';
import { TheEcosystem } from '@/components/home/TheEcosystem';
import { TheAuthority } from '@/components/home/TheAuthority';
import { TheBleedingEdge } from '@/components/home/TheBleedingEdge';

export default function HomePage() {
    return (
        <main className="bg-neutral-950 min-h-screen selection:bg-macro-orange selection:text-white">
            <CinematicHero />
            <TheThesis />
            <TheOpportunity />
            <TheEcosystem />
            <TheAuthority />
            <TheBleedingEdge />
        </main>
    );
}
