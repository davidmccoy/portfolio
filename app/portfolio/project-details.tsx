import React from 'react';
import Image from 'next/image';
import { Project } from './data';
import { motion } from 'framer-motion';
import ChevronToggle from '../../components/chevron-toggle';
import { ChevronUp } from 'lucide-react';

type ProjectDetailsProps = {
  project: Project;
  isExpanded: boolean;
  toggleProject: (id: string) => void;
};

const ProjectDetails = ({
  project,
  isExpanded,
  toggleProject,
}: ProjectDetailsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr] gap-4 hover:bg-gray-100 border-t">
        <div className="py-2 px-4">
          <button
            onClick={() => toggleProject(project.id)}
            className="flex items-center text-blue-600 hover:underline font-bold"
          >
            <Image
              src={project.logo.url}
              alt={project.name}
              width={project.logo.width}
              height={24}
              className="mr-4 py-2 min-w-[75px] object-contain"
            />
            <ChevronToggle expanded={isExpanded} />
          </button>
          <div className="sm:hidden text-xs text-gray-500 mt-2 border-l-2 pl-2">
            Built with {project.stack}
          </div>
          <div className="sm:hidden text-xs text-gray-500 mt-2 border-l-2 pl-2">
            {project.description}
          </div>
        </div>
        <div className="p-4 hidden sm:block">{project.stack}</div>
        <div className="p-4 hidden sm:block">{project.infrastructure}</div>
        <div className="p-4 max-w-xs truncate hidden sm:block">
          {project.description}
        </div>
      </div>

      <motion.div
        className="border-none overflow-hidden  bg-gray-50"
        key={`${project.id}-expanded`}
        initial={{ height: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,300px)_2fr] xl:grid-cols-[1fr_2fr_1fr] gap-2">
          {project?.component}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,300px)_2fr] xl:grid-cols-[1fr_2fr_1fr] gap-2">
          <div></div>
          <div>
            <button
              onClick={() => toggleProject(project.id)}
              className="flex items-center text-blue-600 hover:underline p-4"
            >
              Collapse <ChevronUp className="w-4 h-4 ml-2 flex-shrink-0" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
