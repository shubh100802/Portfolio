import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Send,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactCard = () => {
  const socials = PROFILE_DATA.socials || {};
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email Composer state
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleComposerSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Project Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Shubham,\n\n${message}\n\nBest regards,\n${senderName || 'Sender'}`
    );
    window.location.href = `mailto:${socials.emailRaw || 'shubhamraj1414@gmail.com'}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="contact-card-workstation ui-interactive" aria-label="Contact Channels and Actions">
      {/* Primary Action Buttons Hub */}
      <div className="contact-actions-row">
        <a
          href={socials.email || "mailto:shubhamraj1414@gmail.com"}
          className="contact-primary-btn contact-email-btn"
          aria-label="Send direct email to Shubham Raj Sharma"
        >
          <Mail size={16} />
          <span>EMAIL ME</span>
          <ArrowUpRight size={14} className="btn-arrow" />
        </a>

        <a
          href={socials.github || "https://github.com/shubh100802"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-primary-btn contact-github-btn"
          aria-label="View Shubham's GitHub profile (opens in new tab)"
        >
          <Github size={16} />
          <span>VIEW GITHUB</span>
          <ExternalLink size={13} className="btn-arrow" />
        </a>

        <a
          href={socials.linkedin || "https://www.linkedin.com/in/shubham-raj-sharma/"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-primary-btn contact-linkedin-btn"
          aria-label="Connect with Shubham on LinkedIn (opens in new tab)"
        >
          <Linkedin size={16} />
          <span>CONNECT ON LINKEDIN</span>
          <ExternalLink size={13} className="btn-arrow" />
        </a>

        <a
          href={PROFILE_DATA.resumePath || "/Shubham_Raj_Sharma_SDE.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-primary-btn contact-resume-btn"
          aria-label="Download Shubham Raj Sharma's Resume PDF"
        >
          <FileText size={16} />
          <span>DOWNLOAD RESUME</span>
          <ArrowUpRight size={14} className="btn-arrow" />
        </a>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="contact-channels-grid">
        {/* Email Channel */}
        <div className="contact-channel-item">
          <div className="channel-icon-box">
            <Mail size={16} className="channel-icon cyan" />
          </div>
          <div className="channel-info">
            <span className="channel-label">EMAIL ADDRESS</span>
            <a href={socials.email || "mailto:shubhamraj1414@gmail.com"} className="channel-val">
              {socials.emailRaw || "shubhamraj1414@gmail.com"}
            </a>
          </div>
          <button
            type="button"
            className="channel-copy-btn"
            onClick={() => handleCopy(socials.emailRaw || "shubhamraj1414@gmail.com", 'email')}
            aria-label="Copy email address"
            title="Copy email to clipboard"
          >
            {copiedEmail ? <Check size={14} style={{ color: 'var(--accent-cyan)' }} /> : <Copy size={14} />}
          </button>
        </div>

        {/* LinkedIn Profile Channel */}
        <div className="contact-channel-item">
          <div className="channel-icon-box">
            <Linkedin size={16} className="channel-icon violet" />
          </div>
          <div className="channel-info">
            <span className="channel-label">LINKEDIN</span>
            <a
              href={socials.linkedin || "https://www.linkedin.com/in/shubham-raj-sharma/"}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-val"
            >
              {socials.linkedinTag || "in/shubham-raj-sharma"}
            </a>
          </div>
          <a
            href={socials.linkedin || "https://www.linkedin.com/in/shubham-raj-sharma/"}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-copy-btn"
            aria-label="Open LinkedIn profile"
            title="Open LinkedIn"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Location Channel */}
        <div className="contact-channel-item">
          <div className="channel-icon-box">
            <MapPin size={16} className="channel-icon pink" />
          </div>
          <div className="channel-info">
            <span className="channel-label">LOCATION</span>
            <span className="channel-val">{socials.location || "Noida, India"}</span>
          </div>
        </div>
      </div>

      {/* Direct Client-Side Message Composer */}
      <div className="contact-composer-container">
        <div className="composer-header">
          <div className="composer-badge-group">
            <Send size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span className="composer-title">DIRECT MESSAGE COMPOSER</span>
          </div>
          <span className="composer-tag">PRE-FILLS YOUR EMAIL CLIENT</span>
        </div>

        <form onSubmit={handleComposerSubmit} className="contact-composer-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sender-name" className="form-label">YOUR NAME</label>
              <input
                id="sender-name"
                type="text"
                className="form-input"
                placeholder="e.g. Alex Rivera"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject-line" className="form-label">SUBJECT</label>
              <input
                id="subject-line"
                type="text"
                className="form-input"
                placeholder="e.g. Engineering Opportunity / Collaboration"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message-body" className="form-label">MESSAGE</label>
            <textarea
              id="message-body"
              rows={4}
              className="form-textarea"
              placeholder="Tell me about your project, idea, or role..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="composer-actions">
            <button type="submit" className="composer-submit-btn">
              <Send size={14} />
              <span>LAUNCH EMAIL CLIENT</span>
            </button>
            <span className="composer-hint">
              Opens directly in your default email client with your pre-filled message.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
