import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactFooter = () => {
  const socials = PROFILE_DATA.socials || {};

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="contact-final-footer ui-interactive" role="contentinfo" aria-label="Portfolio Footer">
      <div className="footer-inner">
        {/* Top brand signature */}
        <div className="footer-brand-section">
          <div className="footer-brand-header">
            <span className="footer-brand-badge">{PROFILE_DATA.shortName}</span>
            <div className="footer-brand-text">
              <span className="footer-name">{PROFILE_DATA.name.toUpperCase()}</span>
              <span className="footer-role">{PROFILE_DATA.role.toUpperCase()}</span>
            </div>
          </div>

          <p className="footer-closing-line">
            Built with curiosity, code and a lot of iteration.
          </p>
        </div>

        {/* Social Navigation Links */}
        <div className="footer-nav-section">
          <div className="footer-links-row">
            <a
              href={socials.github || "https://github.com/shubh100802"}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              aria-label="GitHub Profile"
            >
              <Github size={14} />
              <span>GITHUB</span>
            </a>

            <a
              href={socials.linkedin || "https://www.linkedin.com/in/shubham-raj-sharma/"}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
              <span>LINKEDIN</span>
            </a>

            <a
              href={socials.email || "mailto:shubhamraj1414@gmail.com"}
              className="footer-nav-link"
              aria-label="Direct Email"
            >
              <Mail size={14} />
              <span>EMAIL</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={handleScrollTop}
            className="footer-back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
