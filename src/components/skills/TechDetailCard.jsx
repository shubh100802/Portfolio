import React from 'react';
import { Cpu, CheckCircle2, Link2, Sparkles, Layers, ArrowRight } from 'lucide-react';

export const TechDetailCard = ({ node, allNodes = [], onSelectNode }) => {
  if (!node) return null;

  const relatedNodes = allNodes.filter((n) => node.related?.includes(n.id));

  return (
    <div className="tech-detail-card ui-interactive" aria-label={`Telemetry for ${node.name}`}>
      <div className="tech-detail-header">
        <div className="tech-detail-title-group">
          <div className="tech-detail-badge-group">
            <span className="tech-detail-cat-pill">{node.categoryLabel}</span>
            <span className="tech-detail-node-id">SYSTEM://{node.id.toUpperCase()}</span>
          </div>
          <h3 className="tech-detail-name">{node.name}</h3>
          <p className="tech-detail-tagline">{node.tagline}</p>
        </div>
      </div>

      <p className="tech-detail-desc">{node.description}</p>

      {node.practicalUse && (
        <div className="tech-practical-box">
          <div className="tech-practical-label">
            <Cpu size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>REAL-WORLD IMPLEMENTATION</span>
          </div>
          <p className="tech-practical-val">{node.practicalUse}</p>
        </div>
      )}

      {relatedNodes.length > 0 && (
        <div className="tech-related-section">
          <div className="tech-related-header">
            <Link2 size={13} style={{ color: 'var(--accent-violet)' }} />
            <span>CONNECTED IN ARCHITECTURE:</span>
          </div>
          <div className="tech-related-pills">
            {relatedNodes.map((rel) => (
              <button
                key={rel.id}
                type="button"
                className="tech-related-pill-btn"
                onClick={() => onSelectNode(rel.id)}
                aria-label={`Jump to ${rel.name}`}
              >
                <span>{rel.name}</span>
                <ArrowRight size={11} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
