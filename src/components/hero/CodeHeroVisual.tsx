import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode2, Cpu, Sparkles } from 'lucide-react';
import { heroCodeSnippet } from '../../data/portfolioData';

export const CodeHeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ts' | 'bash' | 'json'>('ts');
  const [copied, setCopied] = useState(false);

  const bashSnippet = `$ node --version
v26.6.0 (Verified Engine)
$ npm test --workspace=portfolio
 PASS  tests/job-portal-auth.test.ts
   ✓ dual-role JWT verification (JobSeeker & Recruiter)
   ✓ multer MIME type inspection for PDF/DOC
 PASS  tests/feedback-system.test.ts
   ✓ departmental routing (BTech, ITEG, BEG, MEG)
   ✓ excel report generator pipeline (xlsx)
 PASS  tests/dbms-relations.test.ts
   ✓ SQL foreign key constraints & atomic commit

Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Status:      Ready for recruitment review 🚀`;

  const jsonSnippet = `{
  "engineer": "Rishabh Pal",
  "focus": "Full-Stack Web Engineering",
  "education": {
    "degree": "Bachelor of Computer Applications (BCA)",
    "collegeLocation": "Sandalpur, Khategaon, MP"
  },
  "technicalPillars": {
    "frontend": ["React", "JavaScript ES6+", "Tailwind CSS"],
    "backend": ["Node.js", "Express.js", "REST APIs", "JWT"],
    "databases": ["MongoDB", "MySQL", "Relational DBMS"]
  },
  "verifiedProjects": 5,
  "openToWork": true
}`;

  const handleCopy = () => {
    const textToCopy =
      activeTab === 'ts' ? heroCodeSnippet : activeTab === 'bash' ? bashSnippet : jsonSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow accents */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main IDE Window Card */}
      <div className="relative bg-[#0d131f] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-xl">
        {/* Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
              rishabh-pal-workspace
            </span>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-1 bg-[#131c2e] p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('ts')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                activeTab === 'ts'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode2 className="w-3 h-3 text-cyan-400" />
              <span>developer.ts</span>
            </button>
            <button
              onClick={() => setActiveTab('bash')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                activeTab === 'bash'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3 h-3 text-emerald-400" />
              <span>test.sh</span>
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                activeTab === 'json'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3 h-3 text-amber-400" />
              <span>stack.json</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="Copy snippet"
            aria-label="Copy snippet to clipboard"
            className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors p-1.5 rounded-md hover:bg-white/5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-[10px]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed max-h-[380px] scrollbar-thin">
          {activeTab === 'ts' && (
            <pre className="text-slate-300 space-y-1">
              <code>
                <span className="text-slate-500">// Rishabh Pal — Developer Profile</span>
                {'\n'}
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-300">candidate</span>:{' '}
                <span className="text-amber-300">Developer</span> = {'{\n'}
                {'  '}<span className="text-slate-400">name</span>:{' '}
                <span className="text-emerald-300">"Rishabh Pal"</span>,{'\n'}
                {'  '}<span className="text-slate-400">role</span>:{' '}
                <span className="text-emerald-300">"Aspiring Full Stack Developer"</span>,{'\n'}
                {'  '}<span className="text-slate-400">status</span>:{' '}
                <span className="text-emerald-300">"BCA Student (Sandalpur, MP)"</span>,{'\n'}
                {'  '}<span className="text-slate-400">coreStack</span>: [{'\n'}
                {'    '}<span className="text-emerald-300">"React.js"</span>,{' '}
                <span className="text-emerald-300">"Node.js"</span>,{' '}
                <span className="text-emerald-300">"Express.js"</span>,{' '}
                <span className="text-emerald-300">"MongoDB"</span>,{' '}
                <span className="text-emerald-300">"Tailwind CSS"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="text-slate-400">databaseFoundations</span>: [{'\n'}
                {'    '}<span className="text-emerald-300">"MongoDB"</span>,{' '}
                <span className="text-emerald-300">"MySQL"</span>,{' '}
                <span className="text-emerald-300">"Relational DBMS"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="text-slate-400">engineeringPrinciples</span>: [{'\n'}
                {'    '}<span className="text-cyan-200">"Clean separation of frontend & REST API"</span>,{'\n'}
                {'    '}<span className="text-cyan-200">"Token-based auth & input sanitization"</span>,{'\n'}
                {'    '}<span className="text-cyan-200">"Continuous learning via real projects"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="text-blue-400">getCurrentGoal</span>: () =&gt;{' '}
                <span className="text-emerald-300">"Contributing to scalable web products"</span>{'\n'}
                {'}'};
              </code>
            </pre>
          )}

          {activeTab === 'bash' && (
            <pre className="text-slate-300 font-mono text-xs leading-loose whitespace-pre-wrap">
              <code>{bashSnippet}</code>
            </pre>
          )}

          {activeTab === 'json' && (
            <pre className="text-slate-300 font-mono text-xs leading-loose whitespace-pre-wrap">
              <code>{jsonSnippet}</code>
            </pre>
          )}
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#080b12] border-t border-slate-800 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TypeScript Ready</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">MERN Architecture</span>
          </div>

          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

