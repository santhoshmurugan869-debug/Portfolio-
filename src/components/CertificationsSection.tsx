import React, { useState } from 'react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck, FileCheck, Eye, Sparkles } from 'lucide-react';
import { EduSpineCertificateModal } from './EduSpineCertificateModal';
import { AnthropicCertificateModal } from './AnthropicCertificateModal';

export const CertificationsSection: React.FC = () => {
  const [eduSpineModalOpen, setEduSpineModalOpen] = useState(false);
  const [anthropicModalOpen, setAnthropicModalOpen] = useState(false);

  return (
    <section id="certifications" className="py-24 bg-[#0b0f17] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Award className="w-4 h-4" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Verified Certifications & Accreditations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Industry credentials from Anthropic (Claude API), EduSpine India (Govt. MSME & ISO 9001:2015), YuvaIntern Automotive Telematics, Scaler Python, and IBM Enterprise Design Thinking.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isEduSpine = cert.id === 'eduspine-ai-internship';
            const isAnthropic = cert.id === 'anthropic-claude-api';

            return (
              <div
                key={cert.id}
                className={`rounded-2xl bg-slate-900/60 border p-6 flex flex-col justify-between space-y-6 transition-all group ${
                  isAnthropic
                    ? 'border-blue-500/40 bg-gradient-to-b from-blue-950/30 to-slate-900/90 shadow-lg shadow-blue-950/20'
                    : isEduSpine
                    ? 'border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 to-slate-900/90 shadow-lg shadow-cyan-950/20'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                        isAnthropic
                          ? 'bg-blue-950/60 border-blue-800/60 text-blue-300'
                          : 'bg-cyan-950/50 border-cyan-800/40 text-cyan-400'
                      }`}
                    >
                      {isAnthropic ? (
                        <Sparkles className="w-6 h-6 text-blue-300" />
                      ) : isEduSpine ? (
                        <FileCheck className="w-6 h-6 text-cyan-300" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2.5 py-1 rounded-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-heading leading-snug">
                      {cert.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold mt-1 ${
                        isAnthropic ? 'text-blue-300' : 'text-cyan-400'
                      }`}
                    >
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <p className="text-[11px] text-slate-400 font-mono-code mt-0.5">
                        Issued: {cert.date}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.summary}
                  </p>

                  {/* Skills Learned */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Validated Competencies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                  {isAnthropic ? (
                    <button
                      onClick={() => setAnthropicModalOpen(true)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-blue-500 text-slate-950 hover:bg-blue-400 transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Anthropic Certificate</span>
                    </button>
                  ) : isEduSpine ? (
                    <button
                      onClick={() => setEduSpineModalOpen(true)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View EduSpine Certificate</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-1 text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Completed</span>
                      </span>
                      <span className="font-mono-code text-[10px] text-slate-500 truncate max-w-[120px]">{cert.type}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EduSpine Certificate Modal */}
      <EduSpineCertificateModal
        isOpen={eduSpineModalOpen}
        onClose={() => setEduSpineModalOpen(false)}
      />

      {/* Anthropic Certificate Modal */}
      <AnthropicCertificateModal
        isOpen={anthropicModalOpen}
        onClose={() => setAnthropicModalOpen(false)}
      />
    </section>
  );
};
