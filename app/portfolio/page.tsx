'use client';

import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import React from 'react';
import Grid from '../../components/grid/grid';
import Page from '../../components/page';
import { professionalProjects, personalProjects } from './data';
import ProjectDetails from './project-details';

const Portfolio = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const columnNames = ['Name', 'Stack', 'Infrastructure', 'Description'];
  const columnSizes = `sm:grid-cols-[1fr_1fr_1fr_1fr] `;

  return (
    <Page title={'/portfolio'}>
      <Grid columnNames={columnNames}>
        {/* Professional Projects Section */}
        <div className={`grid grid-cols-1 ${columnSizes} gap-4 border-t`}>
          <div className="col-span-1 sm:col-span-4 py-4 px-4 font-bold">
            <Briefcase className="w-4 h-4 inline mr-2" />
            Professional Projects
          </div>
        </div>
        {professionalProjects.map((project) => (
          <ProjectDetails
            key={project.id}
            project={project}
            isExpanded={expandedItems.has(project.id)}
            toggleProject={toggleExpand}
          />
        ))}

        {/* Personal Projects Section */}
        <div className={`grid grid-cols-1 ${columnSizes} gap-4 border-t`}>
          <div className="col-span-1 sm:col-span-4 py-4 px-4 font-bold">
            <Briefcase className="w-4 h-4 inline mr-2" />
            Personal Projects
          </div>
        </div>
        {personalProjects.map((project) => (
          <ProjectDetails
            key={project.id}
            project={project}
            isExpanded={expandedItems.has(project.id)}
            toggleProject={toggleExpand}
          />
        ))}
      </Grid>
    </Page>
  );
};

export default Portfolio;
