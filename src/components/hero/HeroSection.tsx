import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { personalDetails, portfolioHighlights } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { CodeHeroVisual } from './CodeHeroVisual';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background subtle radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Availability / Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalDetails.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                Hello, recruiter & team — I am
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {personalDetails.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-200 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                {personalDetails.role}
              </h2>
            </div>

            {/* Honest Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Results-driven Full Stack Developer and BCA student with practical expertise
              in designing and deploying end-to-end web applications. Strong core foundation in backend
              architecture (Node.js, Express.js, MongoDB) paired with frontend proficiency in React.js
              and JavaScript (ES6+).
            </p>

            {/* Key Quick Tags */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalDetails.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                BCA (Expected 2027)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                MERN + Java & SQL
              </span>
            </div>

            {/* Action Buttons: View Projects, Download Resume, Contact */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Profile Quick Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400 text-xs">
              <span className="font-mono text-slate-500">Verified links:</span>
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
                <span>Email Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Distinctive Code Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <CodeHeroVisual />
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {portfolioHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/20 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="hidden md:flex justify-center mt-12 text-slate-500">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1.5 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 p-2 rounded-lg"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
