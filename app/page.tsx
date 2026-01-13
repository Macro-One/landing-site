'use client';

import React from 'react';
import { CinematicHero } from '@/components/home/CinematicHero';
import { TheCredibility } from '@/components/home/TheCredibility';
import { TheMission } from '@/components/home/TheMission';
import { TheThesis } from '@/components/home/TheThesis';
import { TheOpportunity } from '@/components/home/TheOpportunity';
import { TheEcosystem } from '@/components/home/TheEcosystem';
import { TheAuthority } from '@/components/home/TheAuthority';
import { TheBleedingEdge } from '@/components/home/TheBleedingEdge';
import { WhyMacro } from '@/components/home/WhyMacro';
import { TheStrategies } from '@/components/home/TheStrategies';

export default function HomePage() {
    return (
        <main className="bg-transparent min-h-screen selection:bg-macro-orange selection:text-white">
            <CinematicHero />
            <TheCredibility />
            <TheMission />
            <TheThesis />
            <TheOpportunity />
            <TheStrategies />
            <TheEcosystem />
            <TheAuthority />
            <TheBleedingEdge />
            <WhyMacro />
        </main>
    );
}
