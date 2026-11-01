import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import type { ProjectCategory, ProjectItem } from '../../types/portfolio';
import { CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'mern',
      label: 'Full-Stack MERN',
      count: projects.filter((p) => p.category === 'mern').length,
    },
    {
      id: 'mobile',
      label: 'Mobile & SQLite',
      count: projects.filter((p) => p.category === 'mobile').length,
    },
    {
      id: 'systems',
      label: 'Core Systems & DBMS',
      count: projects.filter((p) => p.category === 'systems').length,
    },
  ];

  const filteredProjects = projects.filter((p) =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Verified Work & Architecture"
          subtitle="Real projects verified directly on GitHub. Headlined by Singaji Feedback System, followed by enterprise Java/SQL systems, offline-first mobile apps, and full-stack MERN portals."
        />

        {/* Verification Note */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Recruiter Verification:</strong> Every repository link
              below has been confirmed against my public GitHub profile. Each project reflects direct,
              hands-on programming with complete source code and commit histories.
            </p>
          </div>
          <a
            href="https://github.com/rishabhpbca2024-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>@rishabhpbca2024-afk</span>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`ml-2 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  activeCategory === cat.id
                    ? 'bg-slate-950/20 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Deep Dive Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
