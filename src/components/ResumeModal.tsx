import React, { useEffect, useState, useRef } from 'react';
import { PERSONAL_INFO, CORE_SKILLS, CERTIFICATIONS, HACKATHONS, EXPERIENCE } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';
import { X, Printer, Download, Check, Mail, Phone, MapPin, Upload } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl, uploadPhoto } = usePhoto();
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdownResume = () => {
    const md = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Education: ${PERSONAL_INFO.degree} | Reg No: ${PERSONAL_INFO.studentId}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

## SUMMARY
${PERSONAL_INFO.summary}

## CORE SKILLS
- Problem Solving: 4/5
- Analytical Thinking: 3.5/5
- Good Team Coordination: 4.5/5
- Communication: 5/5

## PROGRAMMING SKILLS
- Proficient in Python
- Currently enhancing skills in Java programming
- Strong foundation in programming logic and problem-solving

## PROFESSIONAL EXPERIENCE & INTERNSHIPS
- Jr. AI Software Developer at EduSpine India (15.06.2026 to 29.06.2026)
  * Real-time AI software development, model training, full-stack integration, network designing, and penetration testing.
- Automotive Data Science Analyst at YuvaIntern
  * CAN bus telematics data analysis, sensor anomaly detection, predictive maintenance modeling.

## HACKATHON PARTICIPATION
- Fluid hackathon - KPR Institute of Engineering and Technology
- CYBERZEC 2K26 - Karpagam Academy of Higher Education
- Vibe codeing Hackathone - Nxtgensec (online)

## CERTIFICATIONS
- Successfully completed "Claude with the Anthropic API" Certificate of Completion from Anthropic
- Successfully completed Jr. AI Software Development Internship Certificate from EduSpine India (ISO 9001:2015 & Govt. MSME)
- Successfully completed Automotive Data Science Analyst Certificate from YuvaIntern
- Successfully completed Python Certification from Scaler
- Successfully completed Enterprise Design Thinking Practitioner (IBM skillsBuild)
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f1422] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Toolbar (hidden on print) */}
        <div className="no-print flex items-center justify-between p-4 sm:px-6 bg-[#0a0e1a] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-bold text-white font-heading">
              Digital ATS Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyMarkdownResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy markdown text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied MD' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0b0f17]">
          {/* Printable White Document Canvas (Mirroring the Original Resume Format) */}
          <div className="resume-print-card bg-white text-slate-900 rounded-xl shadow-xl max-w-3xl mx-auto overflow-hidden print:p-0 print:shadow-none print:rounded-none">
            {/* Two-Column Resume Grid (Matching the exact uploaded resume layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[900px]">
              {/* Left Column (Grey Sidebar matching original resume) */}
              <div className="md:col-span-4 bg-[#f0f3f6] p-6 sm:p-7 border-r border-slate-200 space-y-6 text-slate-800">
                {/* Profile Photo Thumbnail */}
                <div className="flex justify-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadPhoto(f);
                    }}
                    accept="image/*"
                    className="hidden"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-slate-300 bg-slate-200 shadow-sm cursor-pointer group relative"
                    title="Click to attach or change photo"
                  >
                    <img
                      src={photoUrl}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="no-print absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-medium text-center p-2">
                      Click to Change
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-4 space-y-5">
                  <h3 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                    SKILLS
                  </h3>

                  <div className="space-y-4">
                    {CORE_SKILLS.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                          <span>• {skill.name}</span>
                        </div>
                        {/* 5-Segmented Bar matching the exact original resume graphic */}
                        <div className="grid grid-cols-5 gap-1 h-2">
                          {[1, 2, 3, 4, 5].map((seg) => {
                            const isFull = seg <= Math.floor(skill.level);
                            const isHalf = seg === Math.ceil(skill.level) && skill.level % 1 !== 0;

                            return (
                              <div key={seg} className="h-full bg-slate-300 rounded-[1px] overflow-hidden">
                                {isFull && <div className="h-full w-full bg-[#1e293b]"></div>}
                                {isHalf && <div className="h-full w-1/2 bg-[#1e293b]"></div>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Quick Notes */}
                <div className="border-t border-slate-300 pt-4 text-xs text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-800 uppercase text-[11px] tracking-wider">
                    Core Attributes
                  </p>
                  <p>• Time Management</p>
                  <p>• Adaptability & Responsibility</p>
                  <p>• Independent & Team Execution</p>
                </div>
              </div>

              {/* Right Column (Main Resume Content) */}
              <div className="md:col-span-8 p-6 sm:p-8 space-y-6 text-slate-800">
                {/* Header Information */}
                <div className="space-y-3 pb-5 border-b border-slate-200">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      {PERSONAL_INFO.headline}
                    </p>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                        {PERSONAL_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                      <span>{PERSONAL_INFO.fullAddress}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </p>
                  </div>
                </div>

                {/* SUMMARY */}
                <div className="space-y-2">
                  <h2 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    SUMMARY
                  </h2>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 text-justify">
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                {/* EXPERIENCE & PROGRAMMING SKILLS */}
                <div className="space-y-3">
                  <h2 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    EXPERIENCE
                  </h2>

                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      PROGRAMMING SKILLS
                    </h3>
                    <ul className="list-disc list-inside text-xs sm:text-[13px] text-slate-700 space-y-1 pl-1">
                      <li>Proficient in Python</li>
                      <li>Currently enhancing skills in Java programming</li>
                      <li>Strong foundation in programming logic and problem-solving</li>
                    </ul>
                  </div>

                  {/* Professional Internships */}
                  <div className="pt-1 space-y-3">
                    <h3 className="text-xs font-bold text-slate-900 uppercase">
                      PROFESSIONAL INTERNSHIPS
                    </h3>
                    <div className="space-y-3 pl-1">
                      {EXPERIENCE.map((exp, i) => (
                        <div key={i} className="text-xs sm:text-[13px] text-slate-700">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <p className="font-semibold text-slate-900">
                              {exp.role} — {exp.company}
                            </p>
                            <span className="text-[11px] font-mono-code text-slate-500">{exp.period}</span>
                          </div>
                          <p className="text-slate-600 italic text-[11px] mb-1">
                            {exp.accreditation}
                          </p>
                          <p className="text-xs text-slate-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* HACKATHON PARTICIPATION */}
                <div className="space-y-2">
                  <h2 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    HACKATHON PARTICIPATION
                  </h2>
                  <ul className="list-disc list-inside text-xs sm:text-[13px] text-slate-700 space-y-1 pl-1">
                    {HACKATHONS.map((h) => (
                      <li key={h.id}>
                        <span className="font-semibold">{h.title}</span> — {h.organizer}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CERTIFICATIONS */}
                <div className="space-y-2">
                  <h2 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    CERTIFICATIONS
                  </h2>
                  <ul className="list-disc list-inside text-xs sm:text-[13px] text-slate-700 space-y-1 pl-1">
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.id}>
                        Successfully completed <span className="font-semibold">{cert.title}</span> from {cert.issuer}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WEBSITES AND SOCIAL LINKS */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <h2 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    WEBSITES AND SOCIAL LINKS
                  </h2>
                  <div className="text-xs space-y-1 text-slate-700">
                    <p>
                      <span className="font-semibold text-slate-900">LinkedIn:</span>{' '}
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {PERSONAL_INFO.linkedinDisplay}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Github:</span>{' '}
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {PERSONAL_INFO.github}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
