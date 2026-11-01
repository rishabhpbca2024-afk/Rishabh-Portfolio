import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  CheckCircle2,
  Wrench,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { Card3DTilt } from '../common/Card3DTilt';

export const SkillsSection: React.FC = () => {
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
          badge="Verified Stack"
          title="Technical Competencies"
          subtitle="Core programming languages, frameworks, database architectures, and engineering tools applied across codebases."
        />

        {/* 3D Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <Card3DTilt key={catIdx} maxTilt={8} className="h-full">
              <div className="h-full rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 hover:border-cyan-500/40 p-6 shadow-xl transition-all flex flex-col justify-between group">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                      {categoryIconMap[category.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Detailed Grid */}
                  <div className="space-y-2 pt-2">
                    {category.skills.map((skill, sIdx) => {
                      const isLearning = skill.level === 'learning';
                      return (
                        <div
                          key={sIdx}
                          className={`p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 ${
                            isLearning
                              ? 'bg-cyan-950/30 border-cyan-500/30 text-cyan-300'
                              : 'bg-slate-900/80 border-slate-800/90 hover:border-cyan-500/30 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {!isLearning ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                            )}
                            <div>
                              <span className="font-semibold block">{skill.name}</span>
                              {skill.highlight && (
                                <span className="text-[10px] text-slate-400 font-mono block">
                                  {skill.highlight}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                            isLearning
                              ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                              : 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                          }`}>
                            {isLearning ? 'Learning' : 'Practiced'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-footer counter */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} verified technologies</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Hands-On Experience
                  </span>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};
