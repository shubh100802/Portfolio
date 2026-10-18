import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Cpu,
  Cloud,
  Layers,
  CheckCircle2,
  Radio,
  Orbit,
  Network
} from 'lucide-react';
import { PROFILE_DATA } from '../../data/profile';

const categoryIcons = {
  all: Orbit,
  languages: Code2,
  backend: Server,
  database: Database,
  ai: Sparkles,
  engineering: Cpu,
  tools: Cloud
};

export const TechConstellation = ({
  activeCategory,
  onSelectCategory,
  activeNodeId,
  onSelectNode
}) => {
  const categories = PROFILE_DATA.techUniverseCategories || [];
  const allNodes = PROFILE_DATA.techUniverseNodes || [];
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Filter nodes according to category
  const filteredNodes = activeCategory === 'all'
    ? allNodes
    : allNodes.filter((node) => node.category === activeCategory);

  const activeOrHoveredNode = allNodes.find((n) => n.id === (hoveredNodeId || activeNodeId));
  const relatedIds = activeOrHoveredNode ? activeOrHoveredNode.related || [] : [];

  return (
    <div className="tech-constellation-wrapper ui-interactive" aria-label="Technology Constellation Hub">
      {/* Category Filter Pills Bar */}
      <div className="tech-category-bar" role="tablist" aria-label="Technology Categories">
        {categories.map((cat) => {
          const IconComp = categoryIcons[cat.id] || Layers;
          const isCatActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isCatActive}
              className={`tech-cat-tab-btn ${isCatActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <IconComp size={13} className="cat-tab-icon" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Constellation Nodes Grid */}
      <div className="tech-nodes-constellation" role="region" aria-label="Interactive Technology Nodes">
        <div className="constellation-telemetry-badge">
          <span className="telemetry-pulse-dot" />
          <span className="constellation-counter">
            {filteredNodes.length} NODES ACTIVE • CLICK NODE TO INSPECT
          </span>
        </div>

        <div className="tech-nodes-grid">
          {filteredNodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            const isRelated = relatedIds.includes(node.id) && !isSelected;
            const isDimmed = activeOrHoveredNode && !isSelected && !isRelated;

            return (
              <button
                key={node.id}
                type="button"
                className={`tech-node-chip ${isSelected ? 'active' : ''} ${isRelated ? 'related-highlight' : ''} ${isDimmed ? 'dimmed' : ''}`}
                onClick={() => onSelectNode(node.id)}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                aria-pressed={isSelected}
                aria-label={`${node.name} (${node.categoryLabel}) - ${node.tagline}`}
              >
                <div className="node-chip-indicator">
                  <span className={`node-dot ${node.accentColor || 'cyan'}`} />
                </div>
                <div className="node-chip-content">
                  <span className="node-chip-name">{node.name}</span>
                  <span className="node-chip-cat">{node.categoryLabel}</span>
                </div>
                {isRelated && (
                  <span className="node-link-pill" title="Connected in System Architecture">
                    LINKED
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
