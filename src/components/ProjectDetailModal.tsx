import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { AutomotiveTelemetrySimulator } from './AutomotiveTelemetrySimulator';
import { X, ExternalLink, Github, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d1320] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header bar with clean close button */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            {/* Clean unboxed metadata with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5">
              <span className="text-cyan-400 font-semibold">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.organizationOrEvent}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Hero Visual Frame */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm sm:text-base font-medium text-slate-200">{project.tagline}</p>
          </div>
        </div>

        {/* Quantitative Proof Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono-code tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* If automotive simulator, embed the live interactive diagnostic bench */}
        {project.demoType === 'automotive-simulator' && (
          <div className="pt-2">
            <AutomotiveTelemetrySimulator />
          </div>
        )}

        {/* If AI model training, embed real-time training & pen-test telemetry */}
        {project.demoType === 'ai-model-training' && (
          <div className="rounded-xl bg-black border border-slate-800 p-4 font-mono-code text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-900">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>eduspine_ai_pipeline --train --network-audit --pentest</span>
              </span>
              <span className="text-[10px] text-emerald-400">CERTIFIED: ISO 9001:2015</span>
            </div>
            <p className="text-cyan-400">[EPOCH 1/5] Loss: 0.3842 | Acc: 89.4% | Batch Latency: 14ms</p>
            <p className="text-cyan-400">[EPOCH 5/5] Loss: 0.0891 | Acc: 97.6% | Model Converged ✓</p>
            <p className="text-slate-400">[FRONT-END] React SPA Client connected to FastREST AI inference worker</p>
            <p className="text-emerald-400">[PEN-TEST] Executed OWASP Top 10 automated vulnerability attack simulations</p>
            <p className="text-emerald-400">[RESULT] 0 Critical vulnerabilities detected · Network hardening validated</p>
          </div>
        )}
        {project.demoType === 'code-preview' && (
          <div className="rounded-xl bg-black border border-slate-800 p-4 font-mono-code text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-900">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>cyberzec_recon_probe.py --target subnet/24</span>
              </span>
              <span className="text-[10px] text-emerald-400">STATUS: CONCLUDED (0.84s)</span>
            </div>
            <p className="text-cyan-400">[+] Discovered open services on host 192.168.1.104:</p>
            <p className="text-slate-400">    PORT 22/tcp  OPEN  OpenSSH 8.9p1 (Audit: Pass)</p>
            <p className="text-slate-400">    PORT 80/tcp  OPEN  HTTP Nginx 1.18 (Audit: Pass)</p>
            <p className="text-amber-400">    PORT 8080/tcp OPEN  Java Spring Debug Console (VULNERABILITY DETECTED)</p>
            <p className="text-emerald-400">[✓] Vulnerability report compiled to output/risk_matrix.json</p>
          </div>
        )}

        {/* Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white font-heading">Project Overview & Architecture</h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 pt-2">
            Key Engineering Contributions
          </h4>
          <div className="space-y-2.5">
            {project.keyContributions.map((point, index) => (
              <div key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies & Tools</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
