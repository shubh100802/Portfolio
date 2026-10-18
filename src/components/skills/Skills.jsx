import React, { useState } from 'react';
import { PROFILE_DATA } from '../../data/profile';
import { SkillsDialogue } from './SkillsDialogue';
import { TechConstellation } from './TechConstellation';
import { TechDetailCard } from './TechDetailCard';
import { MasterCharacter } from '../character/MasterCharacter';

export const Skills = ({
  onSpeakingChange,
  onLineChange
}) => {
  const allNodes = PROFILE_DATA.techUniverseNodes || [];
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeNodeId, setActiveNodeId] = useState(allNodes[0]?.id || 'java');

  const activeNode = allNodes.find((n) => n.id === activeNodeId) || allNodes[0];

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    // If current selected node doesn't belong to the newly selected category, switch active node to first in that category
    if (catId !== 'all') {
      const match = allNodes.find((n) => n.category === catId);
      if (match) {
        setActiveNodeId(match.id);
      }
    }
  };

  const handleNodeSelect = (nodeId) => {
    setActiveNodeId(nodeId);
    const targetNode = allNodes.find((n) => n.id === nodeId);
    if (targetNode && activeCategory !== 'all' && targetNode.category !== activeCategory) {
      setActiveCategory(targetNode.category);
    }
  };

  return (
    <section className="skills-section-container" id="skills" aria-label="Skills and Tech Universe Chapter">
      <div className="skills-ui-wrapper">
        {/* Chapter Header */}
        <header className="skills-header ui-interactive">
          <div className="chapter-indicator">
            <span className="chapter-title">SKILLS</span>
          </div>

          <h2 className="skills-headline">
            THE TECH <span className="skills-headline-gradient">UNIVERSE</span>
          </h2>

          <p className="skills-sub-headline">
            The tools, systems and technologies I use to turn ideas into working software.
          </p>
        </header>

        {/* 2-Column Split Content Grid */}
        <div className="skills-content-grid">
          {/* Left Column: Master Character Presentation Stage */}
          <div className="skills-character-stage-container ui-interactive">
            <MasterCharacter
              animation="skills_interact"
              className="skills-character-placement"
            />
          </div>

          {/* Right Column: Narrative HUD & Tech Constellation */}
          <div className="skills-narrative-column ui-interactive">
            {/* Monologue HUD */}
            <SkillsDialogue
              activeCategory={activeCategory}
              activeNode={activeNode}
              onSpeakingChange={onSpeakingChange}
              onLineChange={onLineChange}
            />

            {/* Interactive Tech Constellation */}
            <TechConstellation
              activeCategory={activeCategory}
              onSelectCategory={handleCategorySelect}
              activeNodeId={activeNodeId}
              onSelectNode={handleNodeSelect}
            />

            {/* Selected Node Telemetry Inspector */}
            <TechDetailCard
              node={activeNode}
              allNodes={allNodes}
              onSelectNode={handleNodeSelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
