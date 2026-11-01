import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  MapPin,
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
      `${personalDetails.email} copied to your clipboard.`,
      'success'
    );
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (target: 'gmail' | 'default') => {
    // 1. Silent Security Check: Block malicious script tags, javascript protocols, and executable payloads
    const rawInput = `${name} ${subject} ${message}`;
    const maliciousRegex = /(<script|javascript:|vbscript:|data:text\/html|\.exe|\.bat|\.vbs|\.scr|\.cmd|\.ps1)/i;

    if (maliciousRegex.test(rawInput)) {
      onNotify(
        'Submission Notice',
        'Please enter plain text only. Unsafe script characters are not allowed.',
        'warning'
      );
      return;
    }

    // 2. CRLF & Header Injection Sanitization
    const cleanSubject = subject.replace(/[\r\n]+/g, ' ').trim();
    const mailSubject = encodeURIComponent(
      cleanSubject ? `[Portfolio Inquiry] ${cleanSubject}` : `[Portfolio Inquiry] Opportunity / Connect with Rishabh`
    );
    const cleanBody = message.replace(/<[^>]*>?/gm, ''); // strip any HTML tags
    const bodyContent = encodeURIComponent(
      `${cleanBody ? cleanBody : 'Hello Rishabh,\n\nI came across your developer portfolio and would like to connect regarding an opportunity...'}\n\nFrom: ${name || 'Recruiter / Hiring Team'}`
    );

    if (target === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.email}&su=${mailSubject}&body=${bodyContent}`;
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      onNotify(
        'Opening Gmail',
        'Launching Gmail in a new tab with your pre-filled message.',
        'info'
      );
    } else {
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${mailSubject}&body=${bodyContent}`;
      window.location.href = mailtoUrl;
      onNotify(
        'Mail Client Opened',
        'Opening your default email client with pre-filled message.',
        'info'
      );
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage('gmail');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Get In Touch"
          subtitle="Currently open to full-stack developer roles, software engineering internships, and collaborative opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Direct Email</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="font-mono text-sm sm:text-base font-bold text-white break-all">
                {personalDetails.email}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleSendMessage('gmail')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-xs text-cyan-300 border border-cyan-500/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* LinkedIn */}
              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in <strong className="text-white">Indore, Dewas, MP</strong>. Open to local & remote engineering roles.</span>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Send an Inquiry
                </h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full-Stack Developer Opportunity"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a brief note or share role details..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none resize-none transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Gmail</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendMessage('default')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Default Mail</span>
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
