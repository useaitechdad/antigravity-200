import Image from "next/image";
import Link from "next/link";
import { BreathingLattice } from "@/components/visuals/BreathingLattice";
import { ArrowRight, Terminal, Radio } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center relative overflow-hidden">
      <BreathingLattice />

      <div className="z-10 w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-10">

        {/* The Briefing Card */}
        <Link href="/briefing" className="group relative block p-8 rounded-2xl bg-void-gray/40 backdrop-blur-sm border border-brand-cyan/20 hover:border-brand-cyan/60 hover:bg-void-gray/60 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Radio className="w-24 h-24 text-brand-cyan" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-mono font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
              The Briefing
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Latest Intel. News, Updates, and Industry Analysis.
            </p>
            <span className="inline-flex items-center text-brand-cyan font-medium group-hover:translate-x-1 transition-transform">
              Enter Stream <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* The Lab Card */}
        <Link href="/lab" className="group relative block p-8 rounded-2xl bg-void-gray/40 backdrop-blur-sm border border-brand-orange/20 hover:border-brand-orange/60 hover:bg-void-gray/60 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Terminal className="w-24 h-24 text-brand-orange" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-mono font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
              The Lab
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Build & Secure. Documentation, Guides, and Setup.
            </p>
            <span className="inline-flex items-center text-brand-orange font-medium group-hover:translate-x-1 transition-transform">
              Enter Workshop <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
        </Link>

      </div>

      <div className="absolute bottom-8 text-center text-slate-500 text-sm">
        <p>Traffic Control // Select Destination</p>
      </div>
    </main>
  );
}
