import React from 'react';
import { CORE_SKILLS, TECHNICAL_SKILLS } from '../data/portfolioData';
import { Code2, Compass, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0e17] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Code2 className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Skills & Competency Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Proficiencies across algorithmic coding, automotive data pipelines, and core interpersonal problem-solving as outlined in my professional curriculum vitae.
          </p>
        </div>

        {/* 2-Column Layout: Core Soft / Analytical Skills (with Resume Progress Bars) + Technical Stacks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Analytical & Team Skills (From Resume Skills Bar) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-6">
            <div className="space-y-1 pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Core Professional Skills</span>
              </h3>
              <p className="text-xs text-slate-400">
                Self-evaluation bars reflecting the foundational attributes from my resume.
              </p>
            </div>

            <div className="space-y-5">
              {CORE_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <div className="flex items-center gap-1.5 font-mono-code text-cyan-400 tabular-nums">
                      <span>{skill.level}</span>
                      <span className="text-slate-600">/</span>
                      <span className="text-slate-500">{skill.maxLevel}</span>
                    </div>
                  </div>

                  {/* Visual 5-segmented indicator matching resume style */}
                  <div className="grid grid-cols-5 gap-1.5 h-2">
                    {[1, 2, 3, 4, 5].map((seg) => {
                      const isFull = seg <= Math.floor(skill.level);
                      const isHalf = seg === Math.ceil(skill.level) && skill.level % 1 !== 0;

                      return (
                        <div
                          key={seg}
                          className="h-full rounded-sm overflow-hidden bg-slate-800"
                        >
                          {isFull && <div className="h-full w-full bg-cyan-400"></div>}
                          {isHalf && <div className="h-full w-1/2 bg-cyan-400"></div>}
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-[11px] text-slate-400 leading-snug">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Foundation: Computer Science & Design</span>
              <span className="text-cyan-400 font-medium">B.E. Candidate</span>
            </div>
          </div>

          {/* Right Column: Programming & Domain Skills */}
          <div className="lg:col-span-7 space-y-6">
            {TECHNICAL_SKILLS.map((group, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-white font-heading">
                    {group.category}
                  </h4>
                  <span className="text-[11px] font-mono-code text-slate-400">
                    {group.skills.length} competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {group.skills.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <p className="text-sm font-bold text-white">{item.name}</p>
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        </div>
                        <p className="text-[11px] text-cyan-300 font-medium">
                          {item.status}
                        </p>
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-800/50">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
