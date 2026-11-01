import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import type { ProjectCategory, ProjectItem } from '../../types/portfolio';
import { Card3DTilt } from '../common/Card3DTilt';

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
      label: 'Backend & Systems',
      count: projects.filter((p) => p.category === 'systems').length,
    },
  ].filter((c) => c.id === 'all' || c.count > 0);

  const filteredProjects = projects.filter((p) =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered Systems & Applications"
          subtitle="Production-grade projects built with clean architectures, robust database models, and verified public repositories."
        />

        {/* Minimalist Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeCategory === cat.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <Card3DTilt key={project.id} maxTilt={7} className="h-full">
              <ProjectCard
                project={project}
                onSelect={setSelectedProject}
              />
            </Card3DTilt>
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
