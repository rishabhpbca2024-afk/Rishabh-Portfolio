import React, { useEffect, useRef } from 'react';
import { X, Download, FileText, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { personalDetails } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (title: string, message: string, type: 'info' | 'success' | 'warning') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadClick = () => {
    onNotify(
      'Download Triggered',
      `Downloading ${personalDetails.resumeFileName}. Ensure the PDF is placed in public/ for local preview.`,
      'info'
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#0f172a] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-lg font-bold text-white">
                Rishabh Pal's Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalDetails.resumeFileName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Recruiter-Focused Profile Overview</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pl-6 list-disc">
              <li>Role: <span className="text-slate-100 font-medium">Software Engineer (Frontend • Backend • Systems)</span></li>
              <li>Education: <span className="text-slate-100 font-medium">BCA @ Sant Singaji Institute, Sandalpur (Expected 2027 • CGPA: 7.65)</span></li>
              <li>Core Stack: <span className="text-cyan-300 font-mono">React.js • Node.js • Express.js • MongoDB • Java • SQL</span></li>
              <li>Location: <span className="text-slate-100">Indore, Dewas, MP</span></li>
              <li>Phone: <span className="text-slate-100 font-mono">+91 7489804514</span></li>
              <li>Certifications: <span className="text-emerald-300">HackerRank Java (Basic) & SQL Certified</span></li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-cyan-300">File Notice:</strong> The resume downloads directly from{' '}
              <code className="text-cyan-200 bg-slate-900 px-1 py-0.5 rounded font-mono">public/{personalDetails.resumeFileName}</code>.
              When updating the portfolio, simply replace that PDF file to keep links synchronized.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
          <a
            href={personalDetails.resumePath}
            download={personalDetails.resumeFileName}
            onClick={handleDownloadClick}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-950/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors"
          >
            Close
          </button>
        </div>

        <div className="mt-4 pt-3 flex items-center justify-center gap-4 text-xs text-slate-400">
          <span>Alternative quick links:</span>
          <a
            href={`mailto:${personalDetails.email}`}
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            <Mail className="w-3 h-3" /> Email
          </a>
          <a
            href={personalDetails.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href={personalDetails.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
