import React, { useState } from 'react';
import {
  Sparkles,
  Trophy,
  Award,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

export const AiAchievementsList = ({ activeTab, onSelectTab }) => {
  const capabilities = PROFILE_DATA.aiCapabilities || [];
  const achievements = PROFILE_DATA.achievements || [];
  const certifications = PROFILE_DATA.certifications || [];

  const [selectedCapId, setSelectedCapId] = useState(capabilities[0]?.id || 'prompt-engineering');
  const [selectedAchId, setSelectedAchId] = useState(achievements[0]?.id || 'hackerrank-orchestrate');
  const [selectedCertId, setSelectedCertId] = useState(certifications[0]?.id || 'mongodb-dba');

  const tabs = [
    { id: 'capabilities', label: 'AI CAPABILITIES', icon: Sparkles, count: capabilities.length },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy, count: achievements.length },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: Award, count: certifications.length }
  ];

  return (
    <div className="ai-workstation-container ui-interactive" aria-label="AI and Achievements Workstation">
      {/* Category Tabs */}
      <div className="ai-tabs-header" role="tablist" aria-label="AI and Achievements Navigation">
        {tabs.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={`ai-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTab(tab.id)}
            >
              <IconComp size={14} className="ai-tab-icon" />
              <span>{tab.label}</span>
              <span className="ai-tab-count">{tab.count}</span>
            </button>
          );
        })}
      </div>

      {/* Content Panels */}
      <div className="ai-panels-container">
        {/* TAB 1: AI / GenAI Capabilities */}
        {activeTab === 'capabilities' && (
          <div className="ai-capability-grid" role="tabpanel" aria-label="AI Capabilities">
            {capabilities.map((cap) => {
              const isSelected = selectedCapId === cap.id;

              return (
                <article
                  key={cap.id}
                  className={`ai-card capability-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedCapId(cap.id)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCapId(cap.id)}
                  role="region"
                  aria-label={cap.title}
                >
                  <div className="ai-card-header">
                    <div className="ai-badge-group">
                      <span className="ai-index-badge">{cap.index}</span>
                      <span className="ai-category-tag">{cap.tag}</span>
                    </div>
                  </div>

                  <div className="ai-title-block">
                    <h3 className="ai-main-title">{cap.title}</h3>
                    <span className="ai-tagline">{cap.tagline}</span>
                  </div>

                  <p className="ai-desc">{cap.description}</p>

                  <ul className="ai-highlights-list">
                    {cap.highlights.map((point, idx) => (
                      <li key={idx} className="ai-highlight-item">
                        <CheckCircle2 size={13} className="ai-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {cap.projectRef && (
                    <div className="ai-project-ref-box">
                      <Cpu size={12} style={{ color: 'var(--accent-cyan)' }} />
                      <span>{cap.projectRef}</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* TAB 2: Documented Achievements */}
        {activeTab === 'achievements' && (
          <div className="ai-achievements-grid" role="tabpanel" aria-label="Documented Achievements">
            {achievements.map((ach) => {
              const isSelected = selectedAchId === ach.id;

              return (
                <article
                  key={ach.id}
                  className={`ai-card achievement-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedAchId(ach.id)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedAchId(ach.id)}
                  role="region"
                  aria-label={ach.title}
                >
                  <div className="ai-card-header">
                    <div className="ai-badge-group">
                      <span className="ai-index-badge">{ach.index}</span>
                      <span className="ai-category-tag">{ach.tag}</span>
                    </div>
                    <div className="ai-rank-pill">
                      <Trophy size={13} style={{ color: 'var(--accent-cyan)' }} />
                      <span>{ach.rank}</span>
                    </div>
                  </div>

                  <div className="ai-title-block">
                    <h3 className="ai-main-title">{ach.title}</h3>
                    <span className="ai-tagline">{ach.category} • {ach.period}</span>
                  </div>

                  <p className="ai-desc">{ach.description}</p>

                  <ul className="ai-highlights-list">
                    {ach.highlights.map((point, idx) => (
                      <li key={idx} className="ai-highlight-item">
                        <CheckCircle2 size={13} className="ai-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        )}

        {/* TAB 3: Documented Certifications */}
        {activeTab === 'certifications' && (
          <div className="ai-certifications-grid" role="tabpanel" aria-label="Documented Certifications">
            {certifications.map((cert) => {
              const isSelected = selectedCertId === cert.id;

              return (
                <article
                  key={cert.id}
                  className={`ai-card certification-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedCertId(cert.id)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCertId(cert.id)}
                  role="region"
                  aria-label={cert.title}
                >
                  <div className="ai-card-header">
                    <div className="ai-badge-group">
                      <span className="ai-index-badge">{cert.index}</span>
                      <span className="ai-category-tag">{cert.tag}</span>
                    </div>
                    <span className="ai-issuer-tag">{cert.issuer}</span>
                  </div>

                  <div className="ai-title-block">
                    <h3 className="ai-main-title">{cert.title}</h3>
                    <span className="ai-tagline">{cert.category}</span>
                  </div>

                  <p className="ai-desc">{cert.description}</p>

                  <ul className="ai-highlights-list">
                    {cert.highlights.map((point, idx) => (
                      <li key={idx} className="ai-highlight-item">
                        <CheckCircle2 size={13} className="ai-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
