import React, { useState, useEffect } from 'react';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';
import { Ai } from './components/ai/Ai';
import { Contact } from './components/contact/Contact';
import { Scene } from './components/three/Scene';
import { Loader } from './components/ui/Loader';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Hero state
  const [heroSpeaking, setHeroSpeaking] = useState(false);
  const [heroDialogueIndex, setHeroDialogueIndex] = useState(0);

  // About state
  const [aboutSpeaking, setAboutSpeaking] = useState(false);
  const [aboutDialogueIndex, setAboutDialogueIndex] = useState(0);
  const [activeTechNodeId, setActiveTechNodeId] = useState('java');

  // Experience state
  const [experienceSpeaking, setExperienceSpeaking] = useState(false);
  const [experienceDialogueIndex, setExperienceDialogueIndex] = useState(0);

  // Projects state
  const [projectsSpeaking, setProjectsSpeaking] = useState(false);
  const [projectsDialogueIndex, setProjectsDialogueIndex] = useState(0);

  // Skills state
  const [skillsSpeaking, setSkillsSpeaking] = useState(false);
  const [skillsDialogueIndex, setSkillsDialogueIndex] = useState(0);

  // AI state
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [aiDialogueIndex, setAiDialogueIndex] = useState(0);

  // Contact state
  const [contactSpeaking, setContactSpeaking] = useState(false);
  const [contactDialogueIndex, setContactDialogueIndex] = useState(0);

  // Scroll Progress (0.0 = Hero, 1.0 = Bottom)
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight || 1;
      const totalDocHeight = document.documentElement.scrollHeight - windowHeight || 1;
      const progress = Math.min(Math.max(scrollY / totalDocHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* 3D Initial Loader */}
      <Loader onLoaded={() => setIsLoaded(true)} />

      {/* Global Fixed 3D Narrative Canvas */}
      <Scene scrollProgress={scrollProgress} />

      {/* Scrollable Storytelling Sections */}
      <main className="narrative-content-stream">
        {/* Chapter 01: Hero Experience */}
        <Hero
          onSpeakingChange={setHeroSpeaking}
          onLineChange={setHeroDialogueIndex}
        />

        {/* Chapter 02: About / Who I Am Experience */}
        <About
          onSpeakingChange={setAboutSpeaking}
          onLineChange={setAboutDialogueIndex}
          activeTechNodeId={activeTechNodeId}
          onSelectTechNode={setActiveTechNodeId}
        />

        {/* Chapter 03: Experience / Engineering In Practice */}
        <Experience
          onSpeakingChange={setExperienceSpeaking}
          onLineChange={setExperienceDialogueIndex}
        />

        {/* Chapter 04: Projects / Built In The Real World */}
        <Projects
          onSpeakingChange={setProjectsSpeaking}
          onLineChange={setProjectsDialogueIndex}
        />

        {/* Chapter 05: Skills / The Tech Universe */}
        <Skills
          onSpeakingChange={setSkillsSpeaking}
          onLineChange={setSkillsDialogueIndex}
        />

        {/* Chapter 06: AI & Achievements / Building with Intelligence */}
        <Ai
          onSpeakingChange={setAiSpeaking}
          onLineChange={setAiDialogueIndex}
        />

        {/* Chapter 07: Contact / Final Scene */}
        <Contact
          onSpeakingChange={setContactSpeaking}
          onLineChange={setContactDialogueIndex}
        />
      </main>
    </div>
  );
}

export default App;
