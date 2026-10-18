import React from 'react';
import { Mail, Github, Linkedin, Sparkles, Send, ArrowRight } from 'lucide-react';
import { ContactDialogue } from './ContactDialogue';
import { ContactCard } from './ContactCard';
import { ContactFooter } from './ContactFooter';
import { MasterCharacter } from '../character/MasterCharacter';
import { PROFILE_DATA } from '../../data/profile';

export const Contact = ({
  onSpeakingChange,
  onLineChange
}) => {
  const socials = PROFILE_DATA.socials || {};

  return (
    <section className="contact-section-container" id="contact" aria-label="Contact and Final Scene Chapter">
      <div className="contact-ui-wrapper">
        {/* Chapter Header */}
        <header className="contact-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">CONTACT</span>
          </div>

          <h2 className="contact-headline">
            LET'S BUILD <span className="contact-headline-gradient">SOMETHING</span>
          </h2>

          <p className="contact-sub-headline">
            Have an idea, opportunity, project, or just want to talk engineering? Let's connect.
          </p>
        </header>

        {/* 2-Column Split Content Grid */}
        <div className="contact-content-grid">
          {/* Left Column: Master Character Presentation Stage & Telemetry Status Card */}
          <div className="contact-character-stage-container ui-interactive">
            <MasterCharacter
              animation="contact_welcome"
              className="contact-character-placement"
            />

            <div className="contact-telemetry-badge-card">
              <div className="telemetry-live-dot" />
              <div className="telemetry-badge-info">
                <span className="telemetry-badge-title">OPEN TO OPPORTUNITIES</span>
                <span className="telemetry-badge-sub">Full Stack • Backend • AI / GenAI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative HUD & Contact Action Hub */}
          <div className="contact-narrative-column ui-interactive">
            {/* Monologue HUD */}
            <ContactDialogue
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
            />

            {/* Contact Actions, Channels & Client-Side Composer */}
            <ContactCard />
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="contact-final-cta-banner ui-interactive">
          <div className="final-cta-content">
            {/* <span className="final-cta-eyebrow">FINAL CHAPTER // HORIZON</span> */}
            <h3 className="final-cta-title">LET'S BUILD WHAT'S NEXT.</h3>
            <p className="final-cta-desc">
              Whether you're scaling a backend system, exploring AI agent workflows, or building something entirely new — I'm ready to contribute.
            </p>
          </div>

          <div className="final-cta-actions">
            <a
              href={socials.email || "mailto:shubhamraj1414@gmail.com"}
              className="final-cta-btn cta-email"
            >
              <Mail size={15} />
              <span>EMAIL ME</span>
            </a>
            <a
              href={socials.github || "https://github.com/shubh100802"}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-btn cta-github"
            >
              <Github size={15} />
              <span>VIEW GITHUB</span>
            </a>
            <a
              href={socials.linkedin || "https://www.linkedin.com/in/shubham-raj-sharma/"}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-btn cta-linkedin"
            >
              <Linkedin size={15} />
              <span>CONNECT ON LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Minimal Closing Scene Footer */}
        <ContactFooter />
      </div>
    </section>
  );
};
