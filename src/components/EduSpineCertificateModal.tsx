import React, { useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Download, Printer } from 'lucide-react';

interface EduSpineCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EduSpineCertificateModal: React.FC<EduSpineCertificateModalProps> = ({ isOpen, onClose }) => {
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
              Official Credential Verification · EduSpine India
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

        {/* Scrollable Document Canvas (Faithful Digital Reproduction of the Uploaded Certificate) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0b0f17]">
          <div className="bg-white text-slate-900 rounded-xl shadow-2xl max-w-2xl mx-auto p-6 sm:p-10 border border-slate-200 relative overflow-hidden font-sans">
            {/* Top Blue Wave Geometry */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-[#035b96] via-[#0084c8] to-[#044c7e] rounded-t-xl"></div>
            <div className="absolute top-10 right-8 text-xs font-bold text-slate-700 pt-6">
              Date : <span className="font-semibold">30.06.2026</span>
            </div>

            {/* EduSpine Branding */}
            <div className="relative pt-8 pb-6 flex items-center gap-2">
              <div className="text-2xl font-black tracking-widest text-[#006ca8] flex items-center gap-2">
                <span className="text-3xl font-serif">≡</span>
                <span>EDUSPINE</span>
              </div>
            </div>

            {/* Certificate Header */}
            <div className="text-center my-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-900 uppercase">
                INTERNSHIP CERTIFICATE
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-700 tracking-wider uppercase border-b-2 border-slate-900 inline-block pb-0.5">
                TO WHOMSOEVER IT MAY CONCERN
              </p>
            </div>

            {/* Certificate Body Paragraphs */}
            <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-slate-800 text-justify">
              <p>
                This is to certify that{' '}
                <strong className="text-slate-950 font-bold">SANTHOSH KUMAR. M (713525CD051)</strong>, student of{' '}
                <strong className="text-slate-950 font-bold">SNSCT</strong> has completed internship at{' '}
                <strong className="text-slate-950 font-bold">EduSpine (15.06.2026 to 29.06.2026)</strong>.
              </p>

              <p>
                During the internship, he/she gained knowledge in field of{' '}
                <strong className="text-slate-950 font-bold">Jr. AI Software developement</strong>. He/she also
                contributed to real-time AI based projects and accompanied in tasks such as{' '}
                <span className="font-semibold text-slate-900">front-end development</span>,{' '}
                <span className="font-semibold text-slate-900">back-end integration</span>,{' '}
                <span className="font-semibold text-slate-900">Network Designing</span>,{' '}
                <span className="font-semibold text-slate-900">model training</span> and{' '}
                <span className="font-semibold text-slate-900">pen-testing</span>, showcasing solid analytical skills
                and a keen interest in software domain.
              </p>

              <p className="pt-2">
                We appreciate his/her contribution and wish success in all future endeavours.
              </p>
            </div>

            {/* Signatures & Accreditation Footer */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-700 mb-4">Authorized Signatory</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Signatory & Round Seal */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#006ca8] flex items-center justify-center p-1 text-[8px] font-bold text-[#006ca8] text-center leading-tight">
                    <span>ELEVATE · EMPOWER · EDUSPINE</span>
                  </div>
                  <div className="text-xs space-y-0.5">
                    <p className="font-serif italic font-bold text-slate-900 text-sm">Sauvik Deb</p>
                    <p className="font-bold text-slate-900">Sauvik Deb</p>
                    <p className="text-slate-600">CEO & Founder</p>
                    <p className="text-slate-600">EduSpine India</p>
                    <p className="text-[10px] text-slate-500">Contact: +91 99941 19005</p>
                    <p className="text-[10px] text-slate-500">Mail: helpdesk@eduspine.in</p>
                  </div>
                </div>

                {/* ISO Seal & MSME Govt of India Emblem */}
                <div className="flex items-center gap-4 self-end sm:self-center">
                  <div className="w-16 h-16 rounded-full border border-blue-600 flex flex-col items-center justify-center text-center p-1 bg-blue-50/50">
                    <span className="text-[8px] text-slate-600 font-semibold uppercase">CERTIFIED</span>
                    <span className="text-[10px] font-black text-blue-800">ISO</span>
                    <span className="text-[7px] text-slate-600 font-medium">9001:2015</span>
                    <span className="text-[7px] text-slate-500 uppercase">COMPANY</span>
                  </div>

                  <div className="border border-slate-300 rounded p-1.5 text-center bg-slate-50">
                    <p className="text-[11px] font-extrabold tracking-wider text-slate-900">MSME</p>
                    <p className="text-[7px] text-slate-600 font-medium">Ministry of MSME, Govt. of India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Dark Navy Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0a2540]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
