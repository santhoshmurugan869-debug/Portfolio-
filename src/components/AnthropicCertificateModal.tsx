import React, { useEffect } from 'react';
import { X, Check, Printer, ShieldCheck } from 'lucide-react';

interface AnthropicCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnthropicCertificateModal: React.FC<AnthropicCertificateModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#0f1422] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between p-4 sm:px-6 bg-[#0a0e1a] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-bold text-white font-heading">
              Official Credential Verification · Anthropic
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Canvas (Faithful Digital Reproduction of the Uploaded Anthropic Certificate) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0b0f17]">
          {/* Certificate Card Container */}
          <div className="bg-[#5b9bd5] text-slate-900 rounded-2xl shadow-2xl max-w-2xl mx-auto p-8 sm:p-14 border border-blue-400/40 relative overflow-hidden flex flex-col items-center justify-between min-h-[460px] text-center select-none">
            {/* Top Badge: Pill Enclosure matching original certificate */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border-2 border-slate-900/90 bg-transparent text-slate-950 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-sm">
              <span className="w-5 h-5 rounded-full border-2 border-slate-900 flex items-center justify-center bg-white text-slate-950">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>CERTIFICATE of COMPLETION</span>
            </div>

            {/* Middle Section: Recipient & Course Title */}
            <div className="my-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-950 tracking-tight font-normal">
                Santhosh kumar. M
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-900/80 tracking-wide">
                has completed
              </p>

              <div className="space-y-1 pt-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight font-sans">
                  Claude with the<br />Anthropic API
                </h2>
              </div>
            </div>

            {/* Bottom Wordmark: ANTHROP\C */}
            <div className="pt-4 pb-2">
              <p className="text-sm sm:text-base font-black tracking-[0.25em] text-slate-950 uppercase font-sans">
                ANTHROP\C
              </p>
            </div>
          </div>

          {/* Validation & Curriculum Details Strip below certificate */}
          <div className="max-w-2xl mx-auto mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Anthropic Completion Credential</span>
              </div>
              <span className="font-mono-code text-[11px] text-slate-400">Issuer: Anthropic</span>
            </div>

            <p className="leading-relaxed text-slate-300">
              Validates developer expertise in integrating the Anthropic API with Python and TypeScript, mastering prompt structure, Claude 3.5 Sonnet tooling, function calling, tool use, streaming tokens, and agentic LLM systems.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Claude 3.5 Sonnet', 'Anthropic API SDK', 'Prompt Engineering', 'Tool Use & Function Calling', 'Streaming Output', 'System Prompts'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
