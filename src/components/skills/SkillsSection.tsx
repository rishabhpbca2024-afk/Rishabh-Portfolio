import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import type { SkillLevel } from '../../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | SkillLevel>('all');

  const categoryIconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-400" />,
    Server: <Server className="w-5 h-5 text-blue-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    Wrench: <Wrench className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Technical Skills & Proficiencies"
          subtitle="Hands-on full-stack development skills with zero inflated claims or unpracticed technologies."
        />

        {/* Transparency Banner */}
        <div className="mb-10 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-cyan-300">Skill Overview:</strong> Categorized into{' '}
            <span className="text-white font-medium">Languages, Frontend, Backend, Databases, and Tools</span>.
            Technologies marked as <span className="inline-flex items-center gap-1 font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30"><CheckCircle2 className="w-3 h-3" /> Practiced</span> reflect hands-on project implementations.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2">Filter skills:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setFilter('practiced')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'practiced'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Practiced in Projects
          </button>
          <button
            onClick={() => setFilter('learning')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'learning'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Currently Learning (e.g. NestJS)
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const visibleSkills = category.skills.filter((s) =>
              filter === 'all' ? true : s.level === filter
            );

            return (
              <div
                key={catIdx}
                className="rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 p-6 shadow-xl hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {categoryIconMap[category.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-4 space-y-2">
                    {visibleSkills.length > 0 ? (
                      visibleSkills.map((skill, sIdx) => {
                        const isPracticed = skill.level === 'practiced';
                        return (
                          <div
                            key={sIdx}
                            className={`p-2.5 rounded-xl border text-xs transition-colors flex items-center justify-between gap-2 ${
                              isPracticed
                                ? 'bg-slate-900/90 border-slate-800/90 hover:border-emerald-500/40'
                                : 'bg-slate-900/40 border-cyan-500/20 hover:border-cyan-500/40'
                            }`}
                          >
                            <div>
                              <span className="font-semibold text-slate-200 block">
                                {skill.name}
                              </span>
                              {skill.highlight && (
                                <span className="text-[11px] text-slate-400 font-mono">
                                  {skill.highlight}
                                </span>
                              )}
                            </div>

                            {isPracticed ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
                                Practiced
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30 shrink-0">
                                Learning
                              </span>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-xs text-slate-500 italic py-2">
                        No skills match this filter in this category.
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Sub-Footer */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{visibleSkills.length} items</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
