import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categoryIconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Layout: <Layout className="w-5 h-5 text-cyan-400" />,
    Server: <Server className="w-5 h-5 text-blue-400" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    Wrench: <Code2 className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-[#0b0f17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tech Stack"
          title="Skills & Technologies"
          subtitle="Core programming languages, frameworks, databases, and engineering tools applied across projects."
        />

        {/* 4/5-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 p-6 shadow-xl hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
            >
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

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, sIdx) => {
                    const isLearning = skill.level === 'learning';
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          isLearning
                            ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-300'
                            : 'bg-slate-900/90 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-white'
                        }`}
                      >
                        {!isLearning ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                        )}
                        <span>{skill.name}</span>
                        {isLearning && (
                          <span className="text-[10px] text-cyan-400 font-mono">
                            (Learning)
                          </span>
                        )}
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
                  Practiced
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
