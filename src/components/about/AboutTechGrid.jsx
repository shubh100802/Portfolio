import React from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { Cpu, Layers, Sparkles } from 'lucide-react';

export const AboutTechGrid = ({ activeNodeId, onSelectNode }) => {
  const nodes = PROFILE_DATA.techNodes;
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="about-tech-container ui-interactive" role="region" aria-label="Interactive Technical Architecture">
      <div className="tech-header">
        <div className="tech-eyebrow">
          <Layers size={13} style={{ color: 'var(--accent-cyan)' }} />
          <span>TECHNICAL FOCUS & ARCHITECTURE</span>
        </div>
        <span className="tech-sublabel">Select technology focus</span>
      </div>

      {/* Interactive Tech Node Pills */}
      <div className="tech-pills-row">
        {nodes.map((node) => {
          const isSelected = (activeNodeId || nodes[0].id) === node.id;
          return (
            <button
              key={node.id}
              className={`tech-pill-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectNode(node.id)}
              style={{
                '--node-color': node.color,
                '--node-glow': node.glowColor
              }}
              aria-pressed={isSelected}
            >
              <span className="tech-pill-dot" style={{ backgroundColor: node.color }} />
              <span className="tech-pill-name">{node.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      {activeNode && (
        <div className="active-node-card" style={{ '--card-accent': activeNode.color }}>
          <div className="active-node-top">
            <div className="active-node-badge">
              <Cpu size={14} style={{ color: activeNode.color }} />
              <span>{activeNode.category}</span>
            </div>
            <span className="active-node-tagline">{activeNode.tagline}</span>
          </div>

          <p className="active-node-desc">
            {activeNode.description}
          </p>
        </div>
      )}
    </div>
  );
};
