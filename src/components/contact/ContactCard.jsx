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
  Sparkles,
  Loader2,
  AlertCircle,
  Instagram
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const ContactCard = () => {
  const socials = PROFILE_DATA.socials || {};
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email Composer state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const escapeHtml = (text) => {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  const handleComposerSubmit = async (e) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    setStatus('loading');
    setErrorMessage('');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      setStatus('error');
      setErrorMessage('Transmission dispatch configuration unavailable. Please contact via direct email or social channels.');
      return;
    }

    const telegramText =
      `⚡ <b>New Portfolio Message / Query</b>

👤 <b>Sender:</b> ${escapeHtml(senderName || 'Anonymous')}
📧 <b>Email:</b> ${escapeHtml(senderEmail)}
📌 <b>Subject:</b> ${escapeHtml(subject || 'General Inquiry')}

💬 <b>Message:</b>
${escapeHtml(message)}

⏰ <i>${new Date().toLocaleString()}</i>`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramText,
          parse_mode: 'HTML'
        })
      });

      const data = await response.json();
      if (data.ok) {
        setStatus('success');
        setSenderName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => {
          setStatus('idle');
        }, 6000);
      } else {
        throw new Error(data.description || 'Transmission failed');
      }
    } catch (err) {
      console.error('Telegram dispatch error:', err);
      setStatus('error');
      setErrorMessage('Direct dispatch failed. Please use direct email above.');
    }
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
          href={socials.instagram || "https://www.instagram.com/itsmeshubh1008?xtok=dzZ5cmgyNzhkanRp"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-primary-btn contact-instagram-btn"
          aria-label="Follow Shubham on Instagram (opens in new tab)"
        >
          <Instagram size={16} />
          <span>INSTAGRAM</span>
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

        {/* Instagram Profile Channel */}
        <div className="contact-channel-item">
          <div className="channel-icon-box">
            <Instagram size={16} className="channel-icon pink" />
          </div>
          <div className="channel-info">
            <span className="channel-label">INSTAGRAM</span>
            <a
              href={socials.instagram || "https://www.instagram.com/itsmeshubh1008?xtok=dzZ5cmgyNzhkanRp"}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-val"
            >
              {socials.instagramTag || "@itsmeshubh1008"}
            </a>
          </div>
          <a
            href={socials.instagram || "https://www.instagram.com/itsmeshubh1008?xtok=dzZ5cmgyNzhkanRp"}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-copy-btn"
            aria-label="Open Instagram profile"
            title="Open Instagram"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Direct Client-Side Message Composer */}
      <div className="contact-composer-container">
        <div className="composer-header">
          <div className="composer-badge-group">
            <Send size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span className="composer-title">DIRECT MESSAGE COMPOSER</span>
          </div>
          <span className="composer-tag">DIRECT INBOX</span>
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
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sender-email" className="form-label">YOUR EMAIL *</label>
              <input
                id="sender-email"
                type="email"
                className="form-input"
                placeholder="e.g. alex@example.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
            </div>
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
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message-body" className="form-label">MESSAGE *</label>
            <textarea
              id="message-body"
              rows={4}
              className="form-textarea"
              placeholder="Tell me about your project, idea, or role..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={status === 'loading'}
            />
          </div>

          {status === 'success' && (
            <div className="composer-status-banner success" role="alert">
              <Check size={16} />
              <span>Query transmitted successfully! I will reach out to your email shortly.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="composer-status-banner error" role="alert">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="composer-actions">
            <button
              type="submit"
              className="composer-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={14} className="spin-icon" />
                  <span>SUBMITTING...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <Check size={14} />
                  <span>QUERY SUBMITTED</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>SUBMIT QUERY</span>
                </>
              )}
            </button>
            <span className="composer-hint">
              Typically responds within 24 hours.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
