import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Santhosh,\n\n${message}\n\nFrom: ${name} (${email})`
    )}`;

    window.location.href = mailtoUrl;
    setStatusMessage('Opening your email client to dispatch the message!');
    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0e17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Mail className="w-4 h-4" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Interested in discussing automotive data science, software development, hackathon collaboration, or internship opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-5">
              <h3 className="text-lg font-bold text-white font-heading">
                Direct Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="space-y-0.5 min-w-0">
                  <p className="text-xs text-slate-400 font-medium">Email Address</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800 transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono-code"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md bg-slate-900 border border-slate-800 transition-colors shrink-0"
                  aria-label="Copy phone"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Permanent Address</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.fullAddress}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Social & Developer Profiles
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>{PERSONAL_INFO.linkedinDisplay}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-cyan-400" />
                      <span>{PERSONAL_INFO.githubDisplay}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-heading">
                Compose a Direct Message
              </h3>
              <p className="text-xs text-slate-400">
                Send a quick note or proposal directly to Santhosh’s inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300" htmlFor="sender-name">
                    Your Name *
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300" htmlFor="sender-email">
                    Your Email *
                  </label>
                  <input
                    id="sender-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300" htmlFor="sender-subject">
                  Subject
                </label>
                <input
                  id="sender-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Opportunity: Internship / Project Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300" htmlFor="sender-message">
                  Message *
                </label>
                <textarea
                  id="sender-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Santhosh, I came across your portfolio and would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/80 text-xs text-cyan-200">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
