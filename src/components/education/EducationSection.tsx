import React from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Award,
  MapPin,
  ExternalLink,
  Globe,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { educationData, certifications } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  const primaryBca = educationData[0];
  const schoolEducations = educationData.slice(1);

  return (
    <section id="education" className="py-16 sm:py-24 relative bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Education & Credentials"
          title="Academic Background & Certifications"
          subtitle="Formal computer science education at SSISM along with verified certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Formal BCA Education */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0f172a]/70 border border-slate-800 shadow-xl space-y-6">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-5">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Undergraduate Degree</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {primaryBca.degree}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-300">
                    {primaryBca.institution}
                  </p>
                  {primaryBca.affiliation && (
                    <p className="text-xs font-mono text-slate-400">
                      {primaryBca.affiliation}
                    </p>
                  )}
                  {primaryBca.location && (
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{primaryBca.location}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {primaryBca.period}
                  </span>
                  {primaryBca.score && (
                    <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">
                      {primaryBca.score}
                    </span>
                  )}
                </div>
              </div>

              {primaryBca.overview && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4">
                  {primaryBca.overview}
                </p>
              )}

              {/* Coursework Pills */}
              {primaryBca.coursework && (
                <div className="pt-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Core Computer Science Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {primaryBca.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Official Website Link */}
            {primaryBca.websiteUrl && (
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={primaryBca.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit SSISM Official Portal (ssism.org)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[11px] font-mono text-slate-500">Established 2010</span>
              </div>
            )}
          </div>

          {/* Right Column: Verified Certifications & Ongoing Focus */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* HackerRank Certifications Card */}
            <div className="p-6 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 shadow-xl space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Verified Certifications</span>
              </h4>

              <div className="space-y-3">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-white">{cert.title}</p>
                        <p className="text-[11px] text-slate-400 font-mono">Issued by {cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 shrink-0">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus Area */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1322] to-[#0f172a] border border-cyan-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Active Learning
                </span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  TypeScript & NestJS
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Expanding backend capabilities with modular enterprise architecture in NestJS, dependency injection, and advanced microservices patterns.
              </p>
            </div>

            {/* School History */}
            <div className="grid grid-cols-2 gap-3">
              {schoolEducations.map((school, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{school.degree}</span>
                    <span className="font-mono text-emerald-400 text-[11px] font-semibold">{school.score}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{school.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
