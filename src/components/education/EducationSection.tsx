import React from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Brain,
  Award,
  BookOpen,
  MapPin,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { educationData, currentLearnings, certifications } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  const primaryBca = educationData[0];
  const schoolEducations = educationData.slice(1);

  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Education & Certifications"
          title="Academic Background & Certifications"
          subtitle="Verified by HackerRank skill assessments and institutional coursework at SSISM."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Formal Education</span>
            </h3>

            {/* BCA Card */}
            {primaryBca && (
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0f172a]/80 border border-slate-800 shadow-xl space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white tracking-tight">
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
                    {primaryBca.websiteUrl && (
                      <div className="pt-1">
                        <a
                          href={primaryBca.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>ssism.org (Official Portal)</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>
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
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {primaryBca.overview}
                  </p>
                )}

                {/* Coursework list */}
                {primaryBca.coursework && (
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Core Academic Pillars
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {primaryBca.coursework.map((course, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* School History (12th and 10th) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {schoolEducations.map((school, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-[#0f172a]/60 border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">{school.degree}</h5>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {school.score}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{school.institution}</p>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    Status: {school.status}
                  </span>
                </div>
              ))}
            </div>

            {/* HackerRank Certifications */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900 to-slate-950 border border-cyan-500/20 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Verified Certifications (HackerRank)</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{cert.title}</p>
                      <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Learning Trajectory */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>Current Technical Focus Areas</span>
            </h3>

            <div className="space-y-4">
              {currentLearnings.map((learning, lIdx) => (
                <div
                  key={lIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0f172a]/50 border border-slate-800/90 hover:border-cyan-500/30 transition-all space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {learning.title}
                    </h4>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 shrink-0">
                      {learning.progressStage}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-slate-100 font-medium">Focus: </strong>
                    {learning.focus}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong className="text-cyan-400">Why it matters: </strong>
                    {learning.whyItMatters}
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Commitment Callout */}
            <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Continuous Engineering Craft</span>
              </div>
              <p className="leading-relaxed">
                As software evolves rapidly, I treat coding as a continuous craft. I actively read documentation, inspect open-source patterns, and build focused test scenarios to understand real architectural tradeoffs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
