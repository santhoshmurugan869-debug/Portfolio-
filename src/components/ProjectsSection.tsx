import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Eye } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering', 'Design & UX'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#0a0e17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Featured Projects & Engineering Work
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Highlighting real-world automotive data science pipelines, national hackathon challenges, and human-centered design systems.
            </p>
          </div>

          {/* Filter Bar (Functional buttons / segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.id === 'automotive-data-science';

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/10 ${
                  isFeatured ? 'md:col-span-2 lg:grid lg:grid-cols-12' : ''
                }`}
              >
                {/* Visual Thumbnail Frame */}
                <div
                  className={`relative overflow-hidden bg-slate-950 ${
                    isFeatured ? 'lg:col-span-6 h-64 sm:h-80 lg:h-full' : 'h-56 sm:h-64'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-slate-900 text-slate-400 text-sm">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Clean unboxed tag overlay */}
                  <div className="absolute top-4 left-4 text-xs font-medium text-slate-200 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-md border border-slate-800">
                    <span>{project.organizationOrEvent}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div
                  className={`p-6 sm:p-7 flex flex-col justify-between space-y-6 ${
                    isFeatured ? 'lg:col-span-6' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Metadata line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span className="text-cyan-400">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric strip */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-center">
                          <p className="text-sm font-bold text-cyan-400 font-mono-code tabular-nums">
                            {m.value}
                          </p>
                          <p className="text-[10px] text-slate-500 font-medium truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/30 text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{isFeatured ? 'Open Telemetry Simulator & Details' : 'View Full Case Study'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>

                    {project.demoType === 'automotive-simulator' && (
                      <span className="text-[11px] text-cyan-300 bg-cyan-950/80 border border-cyan-800/50 px-2 py-0.5 rounded">
                        Interactive Demo Ready
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
