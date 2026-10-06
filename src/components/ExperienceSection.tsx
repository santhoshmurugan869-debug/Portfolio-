import React, { useState } from 'react';
import { EXPERIENCE, HACKATHONS } from '../data/portfolioData';
import { Briefcase, Trophy, CheckCircle2, Calendar, MapPin, Sparkles, FileCheck, Eye } from 'lucide-react';
import { EduSpineCertificateModal } from './EduSpineCertificateModal';

export const ExperienceSection: React.FC = () => {
  const [eduSpineModalOpen, setEduSpineModalOpen] = useState(false);

  return (
    <section id="experience" className="py-24 bg-[#0b0f17] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Briefcase className="w-4 h-4" />
            <span>Professional Career & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Experience & Hackathon History
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Hands-on industry engineering in Jr. AI Software Development at EduSpine and Automotive Telematics at YuvaIntern, coupled with competitive hackathon execution across premier institutes.
          </p>
        </div>

        {/* Part 1: Professional Experience / Internship Highlights */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <span>Professional Internships</span>
          </h3>

          <div className="space-y-6">
            {EXPERIENCE.map((exp, index) => {
              const isEduSpine = exp.company === 'EduSpine India';

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl bg-slate-900/70 border p-6 sm:p-8 transition-all space-y-6 ${
                    isEduSpine
                      ? 'border-cyan-500/40 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/20 shadow-lg shadow-cyan-950/10'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Header of Experience Card */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        {isEduSpine && (
                          <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 rounded">
                            Recent Completion
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-cyan-400 mt-0.5">{exp.company}</p>
                      {exp.accreditation && (
                        <p className="text-xs text-slate-400 mt-0.5 font-medium">
                          Accreditation: {exp.accreditation}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono-code shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-semibold">Verified</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Core Internship Deliverables
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills tags and certificate action */}
                  <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium mr-2">Key Skills:</span>
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-800 border border-slate-700/60 text-slate-300 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {isEduSpine && (
                      <button
                        onClick={() => setEduSpineModalOpen(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shrink-0 shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Hackathon Participation */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Hackathon Participations</span>
            </h3>
            <span className="text-xs text-slate-400">3 Competitive hackathon challenges delivered</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HACKATHONS.map((hackathon) => (
              <div
                key={hackathon.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono-code text-cyan-400">
                      {hackathon.format}
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400/80" />
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {hackathon.title}
                  </h4>

                  <p className="text-xs font-semibold text-slate-300">
                    {hackathon.organizer}
                  </p>

                  <div className="pt-2 text-xs text-slate-400 space-y-2 border-t border-slate-800/80">
                    <div>
                      <span className="text-slate-500 block font-medium">Domain:</span>
                      <span className="text-slate-300">{hackathon.focus}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block font-medium">Project Delivered:</span>
                      <span className="text-slate-300">{hackathon.projectBuilt}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-500 block font-medium">Key Takeaway:</span>
                  <p className="mt-0.5 leading-relaxed">{hackathon.learnings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EduSpine Certificate Modal */}
      <EduSpineCertificateModal
        isOpen={eduSpineModalOpen}
        onClose={() => setEduSpineModalOpen(false)}
      />
    </section>
  );
};
