import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalDetails } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface ContactSectionProps {
  onNotify: (title: string, message: string, type: 'info' | 'success' | 'warning') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    onNotify(
      'Email Copied',
      `${personalDetails.email} has been copied to your clipboard.`,
      'success'
    );
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (target: 'gmail' | 'default') => {
    // 1. Security Check: Block malicious script tags, javascript protocols, and executable payloads
    const rawInput = `${name} ${subject} ${message}`;
    const maliciousRegex = /(<script|javascript:|vbscript:|data:text\/html|\.exe|\.bat|\.vbs|\.scr|\.cmd|\.ps1)/i;

    if (maliciousRegex.test(rawInput)) {
      onNotify(
        'Security Block',
        'Suspicious executable script or unsafe pattern detected. Submission blocked for safety.',
        'warning'
      );
      return;
    }

    // 2. CRLF & Header Injection Sanitization
    const cleanSubject = subject.replace(/[\r\n]+/g, ' ').trim();
    const mailSubject = encodeURIComponent(
      cleanSubject ? `[Portfolio Inquiry] ${cleanSubject}` : `[Portfolio Inquiry] Opportunity / Connect with Rishabh`
    );
    const cleanBody = message.replace(/<[^>]*>?/gm, ''); // strip any potential HTML tags
    const bodyContent = encodeURIComponent(
      `${cleanBody ? cleanBody : 'Hello Rishabh,\n\nI came across your developer portfolio and would like to connect regarding an opportunity...'}\n\nFrom: ${name || 'Recruiter / Hiring Team'}`
    );

    if (target === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.email}&su=${mailSubject}&body=${bodyContent}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      onNotify('Gmail Web Opened', 'Opening Gmail composer in a secure tab with prefilled message.', 'info');
    } else {
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${mailSubject}&body=${bodyContent}`;
      window.location.href = mailtoUrl;
      onNotify('Email Client Opened', 'Opening default email composer with prefilled message.', 'info');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage('gmail');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Direct Contact & Opportunities"
          subtitle="Actively exploring full-stack internships, junior engineering opportunities, and technical conversations. Reach out directly via email or professional profiles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Profile Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f172a]/80 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Verified Contact Channels</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/30 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Primary Email
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
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
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors block break-all font-mono"
                >
                  {personalDetails.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/30 transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </span>
                </div>
                <a
                  href={`tel:${personalDetails.phone}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors block font-mono"
                >
                  {personalDetails.phone}
                </a>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/30 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-blue-400">
                    <LinkedinIcon className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Professional Network
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  linkedin.com/in/rishabh-pal-18r
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Connect for opportunities, reviews, and network updates
                </p>
              </a>

              {/* GitHub Card */}
              <a
                href={personalDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/30 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      GitHub Repositories
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="mt-2 text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                  github.com/rishabhpbca2024-afk
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Inspect repositories, commit histories, and setup instructions
                </p>
              </a>
            </div>

            {/* Recruiter Availability Box */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
              <span className="text-cyan-400 font-semibold block text-sm">
                Location & Relocation Preferences
              </span>
              <p className="leading-relaxed">
                Based in <strong className="text-white">Indore, Dewas, MP</strong>. Actively open to
                on-site roles locally, hybrid arrangements, and remote opportunities across India.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Mailto Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/80 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Direct Email Composer</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Safe mailto link dispatcher
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  No DB / No Fake Backend
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-emerald-300">Sanitized Threat Protection:</strong> Submissions are validated against XSS scripts, CRLF header injection, and dangerous payloads before dispatching to{' '}
                  <strong className="text-cyan-300">{personalDetails.email}</strong>.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Your Name / Organization
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Subject Line
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Developer Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a brief note about the position, team, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSendMessage('gmail')}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-cyan-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Gmail Web</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendMessage('default')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Default Mail Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
