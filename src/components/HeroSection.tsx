import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ArrowRight, Check, Copy, Upload, Camera, RefreshCw } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { photoUrl, isCustomPhoto, uploadPhoto, resetPhoto } = usePhoto();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadPhoto(file);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await uploadPhoto(file);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-blue pointer-events-none -z-10 blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-cyan pointer-events-none -z-10 blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status kicker - clean unboxed metadata with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Open for Engineering Roles & Internships</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Computer Science & Design</span>
              <span aria-hidden="true">·</span>
              <span>Hosur, India</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Summary from Resume */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* Quick Contact & Verification Row */}
            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {/* Email */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2.5 truncate hover:text-cyan-400 transition-colors"
                  title="Send email"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate text-xs sm:text-sm">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1 hover:text-white text-slate-500 rounded transition-colors ml-1"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors"
                  title="Call phone"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono-code">{PERSONAL_INFO.phoneFormatted}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 hover:text-white text-slate-500 rounded transition-colors ml-1"
                  aria-label="Copy phone"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 sm:col-span-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-400 truncate">
                  {PERSONAL_INFO.location}
                  <span className="hidden md:inline text-slate-500"> — {PERSONAL_INFO.fullAddress}</span>
                </span>
              </div>
            </div>

            {/* CTAs and Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                  aria-label="LinkedIn profile"
                  title="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
                  aria-label="GitHub profile"
                  title="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Photo Attachment Uploader */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Decorative accent glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-3xl blur-md -z-10"></div>

              {/* Main Photo Card with Drag & Drop */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-2xl p-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                  aria-label="Upload original photo file"
                />

                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-slate-950 cursor-pointer group transition-all ${
                    isDragging ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900' : ''
                  }`}
                  title="Click or drop your photo file to attach your exact original picture"
                >
                  <img
                    src={photoUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center">
                    <span className="text-4xl font-bold text-cyan-400 mb-2">SK</span>
                    <p className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</p>
                    <p className="text-xs text-slate-500">{PERSONAL_INFO.headline}</p>
                  </div>

                  {/* Gradient bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>

                  {/* Hover upload trigger overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <div className="p-3 rounded-full bg-cyan-400 text-slate-950 shadow-lg">
                      <Camera className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-bold text-white">Click to Attach Original Photo</p>
                    <p className="text-[11px] text-slate-300">
                      Select {`IMG-20260918-WA0009(1).jpg`} directly
                    </p>
                  </div>

                  {/* Drop state indicator */}
                  {isDragging && (
                    <div className="absolute inset-0 bg-cyan-950/90 flex flex-col items-center justify-center gap-2 p-4 text-center z-20">
                      <Upload className="w-8 h-8 text-cyan-300 animate-bounce" />
                      <p className="text-sm font-bold text-cyan-200">Drop your photo here</p>
                    </div>
                  )}

                  {/* Bottom caption with details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <p className="text-sm font-bold tracking-tight">{PERSONAL_INFO.name}</p>
                    <p className="text-xs text-slate-300">SNSCT (713525CD051) · B.E. Computer Science & Design</p>
                  </div>
                </div>

                {/* Direct "Attach Original Photo" Button Strip */}
                <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-500/30 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isCustomPhoto ? 'Change Photo' : 'Attach Original Photo'}</span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={resetPhoto}
                      className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 transition-colors"
                      title="Reset to default"
                      aria-label="Reset photo"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {uploadSuccess && (
                  <div className="mt-2 p-2 rounded-lg bg-emerald-950/80 border border-emerald-800 text-center text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Original photo attached with zero alteration!</span>
                  </div>
                )}

                {/* Quantitative Metric Ribbons (Adjacent proof points) */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <p className="text-lg font-bold text-cyan-400 font-mono-code tabular-nums">02</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Internships</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <p className="text-lg font-bold text-sky-400 font-mono-code tabular-nums">03</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Hackathons</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <p className="text-lg font-bold text-indigo-400 font-mono-code tabular-nums">05</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
