import React from 'react';
import { ShieldCheck, Database, Server, Cpu, Radio, Network, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectVisuals = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-technical-visual-container" aria-label="System Architecture Visual">
      <div className="visual-telemetry-header">
        <div className="visual-status-indicator">
          <span className="telemetry-live-dot" />
          <span className="telemetry-label">SYSTEM TOPOLOGY: {project.index}</span>
        </div>
        <span className="telemetry-mono-tag">{project.tag}</span>
      </div>

      <div className="visual-diagram-canvas">
        {project.id === 'geo-attendance' && (
          <div className="diagram-grid geofence-diagram">
            <div className="diagram-node node-client">
              <Radio size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">CLIENT GPS</span>
                <span className="node-sub">Adaptive Radius</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">REST</span>
            </div>

            <div className="diagram-node node-core">
              <Cpu size={15} className="node-icon violet" />
              <div className="node-info">
                <span className="node-title">EXPRESS CORE</span>
                <span className="node-sub">JWT & Tab Security</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">WRITE</span>
            </div>

            <div className="diagram-node node-db">
              <Database size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">MONGODB</span>
                <span className="node-sub">Attendance Logs</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'safedischarge-ai' && (
          <div className="diagram-grid ai-diagram">
            <div className="diagram-node node-client">
              <Radio size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">CLINICAL PDF</span>
                <span className="node-sub">OCR Ingestion</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">LOOP</span>
            </div>

            <div className="diagram-node node-core">
              <Cpu size={15} className="node-icon violet" />
              <div className="node-info">
                <span className="node-title">CONFLICT CORE</span>
                <span className="node-sub">Med Reconcile</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">STATE</span>
            </div>

            <div className="diagram-node node-db">
              <ShieldCheck size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">MEMORY LAYER</span>
                <span className="node-sub">Clinician Draft</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'myloancredit' && (
          <div className="diagram-grid fintech-diagram">
            <div className="diagram-node node-client">
              <Lock size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">USER INTAKE</span>
                <span className="node-sub">SSL & OTP Form</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">INTAKE</span>
            </div>

            <div className="diagram-node node-core">
              <Server size={15} className="node-icon violet" />
              <div className="node-info">
                <span className="node-title">ADMIN PIPELINE</span>
                <span className="node-sub">Review Flows</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">AUDIT</span>
            </div>

            <div className="diagram-node node-db">
              <ShieldCheck size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">ATLAS DB</span>
                <span className="node-sub">Verified Records</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'roommate-sync' && (
          <div className="diagram-grid roommate-diagram">
            <div className="diagram-node node-client">
              <Network size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">STUDENT HUB</span>
                <span className="node-sub">Mutual Match</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">MATCH</span>
            </div>

            <div className="diagram-node node-core">
              <Cpu size={15} className="node-icon violet" />
              <div className="node-info">
                <span className="node-title">INDEXED CORE</span>
                <span className="node-sub">RBAC & Rules</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">RECS</span>
            </div>

            <div className="diagram-node node-db">
              <Database size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">MONGODB</span>
                <span className="node-sub">Room Allocation</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'dispatch-load-balancer' && (
          <div className="diagram-grid dispatch-diagram">
            <div className="diagram-node node-client">
              <Network size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">ORDER INTAKE</span>
                <span className="node-sub">Priority Queue</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">HAVERSINE</span>
            </div>

            <div className="diagram-node node-core">
              <Cpu size={15} className="node-icon violet" />
              <div className="node-info">
                <span className="node-title">SPRING BOOT</span>
                <span className="node-sub">Greedy Dispatch</span>
              </div>
            </div>

            <div className="diagram-connector">
              <span className="connector-line" />
              <span className="connector-pill">SQL</span>
            </div>

            <div className="diagram-node node-db">
              <Server size={15} className="node-icon cyan" />
              <div className="node-info">
                <span className="node-title">MYSQL CLUSTER</span>
                <span className="node-sub">Fleet Plan</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Metrics Telemetry Bar */}
      <div className="visual-telemetry-metrics">
        {project.metrics.map((metric, i) => (
          <div key={i} className="telemetry-metric-item">
            <span className="metric-label">{metric.label}</span>
            <span className="metric-value">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
