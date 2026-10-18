import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, ShieldCheck, ArrowRight, Radio } from 'lucide-react';

const pipelineStages = [
  {
    id: 'input',
    label: 'INPUT STREAM',
    sub: 'PDF / OCR / Text',
    icon: Radio,
    accent: 'cyan'
  },
  {
    id: 'prompt',
    label: 'PROMPT SCHEMA',
    sub: 'Strict Guardrails',
    icon: Terminal,
    accent: 'violet'
  },
  {
    id: 'agent',
    label: 'AGENTIC LOOP',
    sub: 'Gemini Reasoning',
    icon: Cpu,
    accent: 'pink'
  },
  {
    id: 'output',
    label: 'VERIFIED OUTPUT',
    sub: 'Structured Payload',
    icon: ShieldCheck,
    accent: 'cyan'
  }
];

export const AiPipelineVisual = () => {
  const [activeStageId, setActiveStageId] = useState('agent');

  return (
    <div className="ai-pipeline-container ui-interactive" aria-label="Abstract AI Processing Pipeline Visual">
      <div className="ai-pipeline-header">
        <div className="ai-status-indicator">
          <span className="telemetry-live-dot ai-live-dot" />
          <span className="telemetry-label ai-telemetry-label">NEURAL PIPELINE TOPOLOGY</span>
        </div>
        <span className="ai-mono-tag">DETERMINISTIC // AGENTIC</span>
      </div>

      <div className="ai-pipeline-canvas">
        <div className="ai-pipeline-grid">
          {pipelineStages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isSelected = activeStageId === stage.id;

            return (
              <React.Fragment key={stage.id}>
                <button
                  type="button"
                  className={`ai-pipeline-node ${isSelected ? 'active' : ''} ${stage.accent}`}
                  onClick={() => setActiveStageId(stage.id)}
                  aria-label={`${stage.label}: ${stage.sub}`}
                >
                  <IconComp size={15} className={`stage-icon ${stage.accent}`} />
                  <div className="stage-info">
                    <span className="stage-title">{stage.label}</span>
                    <span className="stage-sub">{stage.sub}</span>
                  </div>
                </button>

                {idx < pipelineStages.length - 1 && (
                  <div className="ai-pipeline-connector">
                    <span className="ai-connector-line" />
                    <span className="ai-connector-pill">PASS</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Abstract Telemetry Indicator Footer */}
      <div className="ai-pipeline-footer">
        <div className="ai-telemetry-metric">
          <span className="ai-metric-label">PIPELINE ARCHITECTURE</span>
          <span className="ai-metric-val">Bounded Agentic Loops</span>
        </div>
        <div className="ai-telemetry-metric">
          <span className="ai-metric-label">OUTPUT VALIDATION</span>
          <span className="ai-metric-val">Strict Schema Enforcement</span>
        </div>
        <div className="ai-telemetry-metric">
          <span className="ai-metric-label">REASONING ENGINE</span>
          <span className="ai-metric-val">Gemini API Multimodal</span>
        </div>
      </div>
    </div>
  );
};
