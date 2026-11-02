import React from 'react';
import {
  Layers,
  CheckCircle2,
  Briefcase,
  MessageSquareText,
  Building2,
  Car,
  Smartphone,
  ChevronRight,
  Download,
  ExternalLink,
} from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';
import { GithubIcon } from '../common/Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-cyan-400" />,
    MessageSquareText: <MessageSquareText className="w-5 h-5 text-emerald-400" />,
    Building2: <Building2 className="w-5 h-5 text-amber-400" />,
    Car: <Car className="w-5 h-5 text-purple-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <article
      className="flex flex-col justify-between rounded-2xl bg-[#0f172a]/80 border border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-950/20 transition-all duration-300 shadow-xl group overflow-hidden"
    >
      {/* Top Banner with Project Type & Verification */}
      <div className="p-6 pb-4 border-b border-slate-800/60 bg-[#0c121e]">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-105 transition-transform">
              {iconMap[project.iconName] || <Layers className="w-5 h-5 text-cyan-400" />}
            </div>
            <div>
              <span className="text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-wider">
                {project.category === 'mern'
                  ? 'Full-Stack MERN'
                  : project.category === 'mobile'
                  ? 'Mobile & SQLite'
                  : 'Backend & Systems'}
              </span>
              {project.academicContext && (
                <span className="block text-[10px] text-slate-400">
                  {project.academicContext}
                </span>
              )}
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-1.5">
            {project.demoStatus === 'live' && project.demoUrl ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-mono mt-1 line-clamp-1">
          {project.subtitle}
        </p>
      </div>

      {/* Body: Description & Key Highlights */}
      <div className="p-6 space-y-4 flex-1">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Key Feature Bullets */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
            Key Architecture Features
          </span>
          <ul className="space-y-1.5">
            {project.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                <span className="line-clamp-2">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Pills */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Direct APK Download Banner if available */}
        {project.downloadUrl && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="p-1.5 rounded-lg bg-emerald-900/60 text-emerald-400 shrink-0">
                <Download className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-emerald-300 truncate">Android APK Ready</p>
                <p className="text-[10px] text-emerald-400/80 font-mono">v1.0 • Direct Install ({project.apkSize || '14.8 MB'})</p>
              </div>
            </div>
            <a
              href={project.downloadUrl}
              download
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-sm"
              aria-label={`Download ${project.title} APK`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get APK</span>
            </a>
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 bg-[#0a0e17] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Repository</span>
          </a>

          {project.demoStatus === 'live' && project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live website for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live Demo</span>
            </a>
          )}

          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download
              aria-label={`Download ${project.title} APK`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>APK</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold shadow-md shadow-cyan-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ml-auto"
        >
          <span>Deep Dive</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
