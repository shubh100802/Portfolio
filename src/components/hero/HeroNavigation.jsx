import React from 'react';
import { PROFILE_DATA } from '../../data/profile';

export const HeroNavigation = () => {
  const handleNavClick = (e, href, placeholder) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="hero-nav ui-interactive" role="banner">
      {/* Brand Left */}
      <a 
        href="#" 
        className="nav-brand" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Shubham Raj Sharma Home"
      >
        <div className="brand-badge">{PROFILE_DATA.shortName}</div>
        <span className="brand-text">SHUBHAM</span>
      </a>

      {/* Center Professional Identifier */}
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

      {/* Nav Links Right */}
      <nav className="nav-links" aria-label="Main Navigation">
        {PROFILE_DATA.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="nav-link"
            onClick={(e) => handleNavClick(e, link.href, link.placeholder)}
          >
            {link.label}
            {link.placeholder && <span className="nav-link-badge">P3</span>}
          </a>
        ))}
      </nav>
    </header>
  );
};
