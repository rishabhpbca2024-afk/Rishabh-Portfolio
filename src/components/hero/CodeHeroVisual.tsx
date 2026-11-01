import React, { useState } from 'react';
import { Copy, Check, FileCode2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export const CodeHeroVisual: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const developerCode = `// engineer.config.ts
export const developer: Engineer = {
  name: "Rishabh Pal",
  role: "Full Stack Developer",
  education: "BCA @ Sant Singaji Institute (SSISM)",
  affiliation: "Vikram University, Ujjain",
  location: "Indore / Dewas, MP",
  
  stack: {
    frontend: ["React.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
    databases: ["MongoDB", "MySQL", "JDBC Architecture"],
    languages: ["JavaScript", "TypeScript", "Java", "SQL"]
  },

  projects: [
    "Singaji Feedback System (SSISM Flagship)",
    "SmartPark (Node.js & Express REST API)",
    "Udhaari Manager (React + Capacitor + SQLite)",
    "Hospital Management System (Java & JDBC)",
    "JobHub (Full-Stack MERN Portal)"
  ],

  availability: "Open to Full-Stack Roles & Internships"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(developerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Ambient background glow accents */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card */}
      <div className="relative bg-[#0c121e]/90 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl transition-all">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>engineer.config.ts</span>
            </span>
          </div>

          <button
            onClick={handleCopy}
            title="Copy code"
            aria-label="Copy developer configuration snippet"
            className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors px-2 py-1 rounded hover:bg-slate-800/60"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed max-h-[380px] scrollbar-thin">
          <pre className="text-slate-300">
            <code>
              <span className="text-slate-500">// Rishabh Pal — Full Stack Developer</span>
              {'\n'}
              <span className="text-purple-400">export const</span>{' '}
              <span className="text-cyan-300">developer</span>:{' '}
              <span className="text-amber-300">Engineer</span> = {'{\n'}
              {'  '}<span className="text-slate-400">name</span>:{' '}
              <span className="text-emerald-300">"Rishabh Pal"</span>,{'\n'}
              {'  '}<span className="text-slate-400">role</span>:{' '}
              <span className="text-emerald-300">"Full Stack Developer"</span>,{'\n'}
              {'  '}<span className="text-slate-400">education</span>:{' '}
              <span className="text-emerald-300">"BCA @ Sant Singaji Institute (SSISM)"</span>,{'\n'}
              {'  '}<span className="text-slate-400">affiliation</span>:{' '}
              <span className="text-emerald-300">"Vikram University, Ujjain"</span>,{'\n'}
              {'  '}<span className="text-slate-400">location</span>:{' '}
              <span className="text-emerald-300">"Indore / Dewas, MP"</span>,{'\n'}
              {'\n'}
              {'  '}<span className="text-slate-400">stack</span>: {'{\n'}
              {'    '}<span className="text-slate-400">frontend</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>],{'\n'}
              {'    '}<span className="text-slate-400">backend</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"REST APIs"</span>],{'\n'}
              {'    '}<span className="text-slate-400">databases</span>: [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"JDBC"</span>],{'\n'}
              {'    '}<span className="text-slate-400">languages</span>: [<span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"SQL"</span>]{'\n'}
              {'  }'},{'\n'}
              {'\n'}
              {'  '}<span className="text-slate-400">status</span>:{' '}
              <span className="text-cyan-300">"Open to Full-Stack Roles & Internships"</span>{'\n'}
              {'}'};
            </code>
          </pre>
        </div>

        {/* Footer Status Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#080d16] border-t border-slate-800 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-medium">Ready for Production</span>
          </div>

          <a
            href="https://github.com/rishabhpbca2024-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>@rishabhpbca2024-afk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
