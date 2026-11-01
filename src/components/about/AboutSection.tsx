import React from 'react';
import {
  Code2,
  Database,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Full-Stack MERN Architecture',
      description:
        'End-to-end web engineering with React.js, Node.js, Express, and MongoDB. Structured modular routing, clean state management, and responsive interfaces.',
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: 'Databases & Relational Modeling',
      description:
        'Hands-on relational database design with MySQL using JDBC prepared statements, paired with flexible document collections in MongoDB.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: 'REST APIs & Security Boundaries',
      description:
        'Building secure endpoints protected with JSON Web Tokens (JWT), Role-Based Access Control (RBAC), and strict input sanitization.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About"
          title="Background & Engineering Focus"
          subtitle="Focused on foundational computer science principles, database integrity, and production-ready web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Focused Narrative Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 shadow-xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <p>
                I am a Full Stack Developer and BCA student at{' '}
                <strong className="text-white">Sant Singaji Institute of Science and Management (SSISM)</strong>, Sandalpur (affiliated with Vikram University, Ujjain).
              </p>

              <p>
                My focus centers on <strong className="text-cyan-300">practical software engineering</strong>: from architecting normalized database schemas and concurrency-safe backend APIs, to building intuitive, responsive user experiences with modern React and TypeScript.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm">
                Every project in my portfolio is backed by genuine source code in public GitHub repositories, demonstrating real-world problem-solving across web, mobile, and backend systems.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Clean Code & Modularity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Security-First Mindset
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Continuous Learning
              </span>
            </div>
          </div>

          {/* Right Column: 3 Sleek Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-[#111a2e] transition-all group flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
