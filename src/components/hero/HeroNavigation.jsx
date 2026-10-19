import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Menu, X, ChevronRight, FileText, Github, Linkedin, Mail, Sparkles, ArrowUpRight } from 'lucide-react';

const chapterDetails = {
  '#about': { index: '01', sub: 'Engineering Identity & Core Pillars' },
  '#experience': { index: '02', sub: 'Full Stack & Backend Track Record' },
  '#projects': { index: '03', sub: 'Production Systems & Architectures' },
  '#skills': { index: '04', sub: 'Interactive Tech Constellation' },
  '#ai': { index: '05', sub: 'GenAI, LLMs & Competitions' },
  '#contact': { index: '06', sub: "Let's Build What's Next" }
};

export const HeroNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Track active section on scroll for mobile indicator
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'projects', 'skills', 'ai', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="hero-nav ui-interactive" role="banner">
        {/* Brand Left */}
        <a 
          href="#" 
          className="nav-brand" 
          onClick={handleLogoClick}
          aria-label="Shubham Raj Sharma Home"
        >
          <div className="brand-badge">{PROFILE_DATA.shortName}</div>
          <span className="brand-text">SHUBHAM</span>
        </a>

        {/* Center Professional Identifier (Desktop Only) */}
        <a
          href={PROFILE_DATA.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-center-tag"
          title="View LinkedIn Profile"
        >
          <span className="status-dot" aria-hidden="true"></span>
          <span>{PROFILE_DATA.socials.linkedinTag}</span>
        </a>

        {/* Desktop Nav Links (Large Screens Only) */}
        <nav className="nav-links" aria-label="Main Navigation">
          {PROFILE_DATA.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeSection === link.href ? 'active-nav-link' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
              {link.placeholder && <span className="nav-link-badge">P3</span>}
            </a>
          ))}
        </nav>

        {/* Modern Cyber Mobile Menu Toggle (Small/Mobile Screens Only) */}
        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
        >
          <div className="mobile-toggle-bars" aria-hidden="true">
            <span className="toggle-bar bar-1"></span>
            <span className="toggle-bar bar-2"></span>
            <span className="toggle-bar bar-3"></span>
          </div>
        </button>
      </header>

      {/* Modern Cybernetic Mobile Navigation Drawer (Small/Mobile Screens Only) */}
      <div 
        id="mobile-navigation-drawer"
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        aria-hidden={!isMobileMenuOpen}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        {/* Background Click Shield */}
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Window Content */}
        <div className="mobile-nav-panel">
          {/* Drawer Cyber Header */}
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-badge-group">
              <span className="mobile-pulse-dot" aria-hidden="true" />
              <div className="mobile-telemetry-text">
                <span className="telemetry-label">NAVIGATIONAL MATRIX</span>
                <span className="telemetry-status">ONLINE // 07 CHAPTERS</span>
              </div>
            </div>

            <button
              type="button"
              className="mobile-drawer-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chapter Links List */}
          <nav className="mobile-drawer-links" aria-label="Mobile Chapter Navigation">
            {PROFILE_DATA.navLinks.map((link) => {
              const meta = chapterDetails[link.href] || { index: '•', sub: 'Portfolio Section' };
              const isCurrent = activeSection === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`mobile-drawer-link-card ${isCurrent ? 'current' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <div className="mobile-link-index-box">
                    <span className="mobile-link-num">{meta.index}</span>
                  </div>

                  <div className="mobile-link-info">
                    <span className="mobile-link-title">{link.label}</span>
                    <span className="mobile-link-desc">{meta.sub}</span>
                  </div>

                  <ChevronRight size={16} className="mobile-link-arrow" />
                </a>
              );
            })}
          </nav>

          {/* Drawer Quick Actions Footer */}
          <div className="mobile-drawer-footer">
            <a
              href={PROFILE_DATA.resumePath || "/Shubham_Raj_Sharma_SDE.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-drawer-resume-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Download Resume PDF"
            >
              <FileText size={15} />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight size={13} style={{ marginLeft: 'auto' }} />
            </a>

            <div className="mobile-drawer-socials">
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-pill"
                aria-label="GitHub Profile"
              >
                <Github size={14} />
                <span>GITHUB</span>
              </a>

              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-pill"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={14} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={PROFILE_DATA.socials.email}
                className="mobile-social-pill"
                aria-label="Direct Email"
              >
                <Mail size={14} />
                <span>EMAIL</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
