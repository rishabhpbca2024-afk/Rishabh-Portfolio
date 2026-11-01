import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  Server,
  Database,
} from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background subtle radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clean & Spacious Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                {personalDetails.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300">
                Software Engineer
              </h2>
            </div>

            {/* Clear, calm bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Building reliable web applications, secure REST APIs, and database architectures.
              Hands-on experience across React, TypeScript, Node.js, Express, Core Java, MySQL, and MongoDB.
            </p>

            {/* Location & Academic Note */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Indore / Dewas, MP</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>BCA @ SSISM (Vikram University)</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400 text-xs">
              <a
                href={personalDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${personalDetails.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Sphere with Floating Tech Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
            {/* Real-time 3D Particle Canvas */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Hero3DCanvas />
            </div>

            {/* Floating Glass Pill 1: Client */}
            <div className="absolute top-4 sm:top-8 left-2 sm:left-4 px-3.5 py-2 rounded-xl bg-[#0f172a]/80 border border-cyan-500/30 backdrop-blur-md shadow-xl text-xs font-mono text-slate-200 flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-cyan-950/80 text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-cyan-400 uppercase tracking-wider block font-semibold">Client</span>
                <span className="font-bold text-white">React & TypeScript</span>
              </div>
            </div>

            {/* Floating Glass Pill 2: Server */}
            <div className="absolute bottom-12 right-2 sm:right-4 px-3.5 py-2 rounded-xl bg-[#0f172a]/80 border border-blue-500/30 backdrop-blur-md shadow-xl text-xs font-mono text-slate-200 flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-950/80 text-blue-400">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-blue-400 uppercase tracking-wider block font-semibold">Server</span>
                <span className="font-bold text-white">Node.js & Express</span>
              </div>
            </div>

            {/* Floating Glass Pill 3: Database */}
            <div className="absolute bottom-4 left-4 sm:left-10 px-3.5 py-2 rounded-xl bg-[#0f172a]/80 border border-emerald-500/30 backdrop-blur-md shadow-xl text-xs font-mono text-slate-200 flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-950/80 text-emerald-400">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 uppercase tracking-wider block font-semibold">Database</span>
                <span className="font-bold text-white">MySQL & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
