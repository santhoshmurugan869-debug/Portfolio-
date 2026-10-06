import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
        <div id="top" />

        {/* Top Bar Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Full Digital ATS Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </PhotoProvider>
  );
}
