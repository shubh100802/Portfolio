import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const HeroSocials = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: PROFILE_DATA.socials.github,
      icon: <Github size={18} />,
      label: 'github.com/shubh100802',
      brandColor: '#ffffff',
      brandGlow: 'rgba(255, 255, 255, 0.4)',
      brandBg: 'rgba(255, 255, 255, 0.08)'
    },
    {
      name: 'LinkedIn',
      href: PROFILE_DATA.socials.linkedin,
      icon: <Linkedin size={18} />,
      label: 'linkedin.com/in/shubham-raj-sharma',
      brandColor: '#0a66c2',
      brandGlow: 'rgba(10, 102, 194, 0.5)',
      brandBg: 'rgba(10, 102, 194, 0.12)'
    },
    {
      name: 'Email',
      href: PROFILE_DATA.socials.email,
      icon: <Mail size={18} />,
      label: 'shubhamraj1414@gmail.com',
      brandColor: '#ea4335',
      brandGlow: 'rgba(234, 67, 53, 0.5)',
      brandBg: 'rgba(234, 67, 53, 0.12)'
    }
  ];

  return (
    <div className="socials-container ui-interactive" aria-label="Social Links">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-item"
          aria-label={item.name}
          style={{
            '--brand-color': item.brandColor,
            '--brand-glow': item.brandGlow,
            '--brand-bg': item.brandBg
          }}
        >
          <div className="social-icon-box">
            {item.icon}
          </div>
          <span className="social-name">{item.name}</span>
        </a>
      ))}
    </div>
  );
};
