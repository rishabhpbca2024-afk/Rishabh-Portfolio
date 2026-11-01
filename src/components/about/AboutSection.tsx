import React from 'react';
import {
  Code2,
  Server,
  Database,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card3DTilt } from '../common/Card3DTilt';

export const AboutSection: React.FC = () => {
  const capabilities = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Frontend Engineering',
      badge: 'Client Architecture',
      description:
        'Building responsive, accessible interfaces using React.js, TypeScript, and modern Tailwind CSS with clean state patterns.',
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'DOM Logic', 'Responsive UI'],
    },
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: 'Backend Development',
      badge: 'APIs & Services',
      description:
        'Engineering modular RESTful APIs with Node.js, Express, and Core Java. Enforcing JWT authentication and Role-Based Access Control (RBAC).',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Core Java'],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: 'Databases & Storage',
      badge: 'Schemas & Systems',
      description:
        'Designing normalized schemas in MySQL with JDBC architecture, alongside flexible document collections in MongoDB and offline SQLite.',
      skills: ['MySQL', 'MongoDB', 'JDBC Architecture', 'Native SQLite'],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Background & Focus"
          subtitle="Grounded in computer science foundations and versatile across frontend, backend, and database architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 shadow-xl space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Background & Capabilities</span>
              </h3>

              <p>
                I am a Software Engineer and BCA student at{' '}
                <strong className="text-white">Sant Singaji Institute of Science and Management (SSISM)</strong>, Sandalpur (near Khategaon, MP), affiliated with <strong className="text-white">Vikram University, Ujjain</strong>.
              </p>

              <p>
                My approach to software development focuses on <strong className="text-cyan-300">solid fundamentals and end-to-end execution</strong>.
                Rather than limiting myself to a single narrow specialty, I build complete systems: from designing normalized database tables and concurrency-safe backend APIs, to crafting responsive, type-safe user interfaces with React and TypeScript.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm">
                Every project in my portfolio is backed by public source code on GitHub with clean commit histories, proving hands-on competence across web applications, backend services, and offline-first mobile tools.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Clean Code Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Security-First Mindset
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Rapid Problem Solver
              </span>
            </div>
          </div>

          {/* Right Column: 3 Clean Capability Cards with 3D Tilt */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {capabilities.map((item, idx) => (
              <Card3DTilt key={idx} maxTilt={6} className="flex-1">
                <div className="h-full p-5 rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                          {item.icon}
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 pl-11 flex flex-wrap gap-1.5 mt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
