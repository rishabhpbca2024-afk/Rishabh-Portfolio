import React from 'react';
import {
  Code2,
  Database,
  GraduationCap,
  ShieldCheck,
  Terminal,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'BCA @ Sant Singaji Institute',
      description:
        'Currently pursuing my Bachelor of Computer Applications (Expected 2027 | CGPA: 7.65) at Sant Singaji Institute of Science and Management, Sandalpur (near Khategaon). Grounded in Object-Oriented Programming (Java), Data Structures, Relational DBMS (SQL), and web engineering.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: 'Full-Stack MERN Architecture',
      description:
        'Built full-stack solutions with React.js, Node.js, Express.js, and MongoDB. Experience developing role-based access control (RBAC), modular route controllers, and clean component hierarchies.',
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: 'Databases & JDBC Architecture',
      description:
        'Experienced in NoSQL document collections (MongoDB) and relational database modeling (MySQL) using JDBC prepared statements to safeguard against SQL injection.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
      title: 'REST APIs & JWT Security',
      description:
        'Engineered modular RESTful endpoints with JSON Web Token (JWT) authentication, protecting sensitive resources and strictly isolating Admin, Faculty, and User privilege boundaries.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="BCA Student & Full-Stack Developer"
          subtitle="Building practical software through honest engineering, foundational computer science principles, and continuous project work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/80 border border-slate-800 shadow-xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>The Story & Perspective</span>
              </h3>

              <p>
                I am a Full Stack Developer and BCA student at{' '}
                <strong className="text-white">Sant Singaji Institute of Science and Management</strong>, Sandalpur (near Khategaon), MP.
                My journey in software engineering focuses on building practical, performant, and scalable applications that solve concrete problems.
              </p>

              <p>
                Rather than staying within theoretical tutorials, I focus on{' '}
                <strong className="text-cyan-300">building complete, end-to-end projects</strong>. From
                designing relational schemas and database models, to structuring Express REST APIs with
                proper authentication and middleware, up to crafting responsive React user interfaces with
                Tailwind CSS.
              </p>

              <p>
                I believe in <strong className="text-white">honesty over exaggeration</strong>: I do not
                claim 10 years of expertise or buzzwords I haven't coded with. Everything listed in this
                portfolio is supported by verified source code in my GitHub repositories, showcasing my
                current abilities and rapid learning curve.
              </p>

              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Eager to learn & adapt
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Strong teamwork orientation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Clean code discipline
                </span>
              </div>
            </div>

            {/* Recruiter Quick Value Summary */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">What I Bring to an Internship or Junior Role</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    A candidate with solid foundational knowledge, hands-on experience across both frontend
                    and backend codebases, high coachability, and an appetite for deep code reviews and
                    mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-[#131d33] transition-all group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
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
