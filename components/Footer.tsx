'use client';

import React from 'react';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname === '/pitch') return null;

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo variant="full" />
          </div>
          <div className="flex space-x-6 text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="text-center md:text-left text-slate-600 text-sm space-y-1">
          <div>Vibecoded with <span className="text-red-500">♥</span> by Bleeding Edge</div>
          <div>&copy; {new Date().getFullYear()} Bleeding Edge. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};