import React, { useState } from 'react';
import { Experience } from './data';
import ChevronToggle from '../../components/chevron-toggle';
import { Briefcase, FileText } from 'lucide-react';
import { renderDateRange } from '../shared/utils';
import RoleDetails from './role-details';
import Link from 'next/link';

type ExperienceParams = {
  experience: Experience[];
  columnSizes: string;
};

const ProfessionalExperience = ({
  experience,
  columnSizes,
}: ExperienceParams) => {
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

  return (
    <>
      <div className={`grid grid-cols-1 ${columnSizes} gap-4 border-t}`}>
        <div className="p-4 font-bold">
          <Briefcase className="w-4 h-4 inline mr-2" />
          <span>
            Experience{' '}
            <span>
              <Link
                href={'/files/david-mccoy-resume.pdf'}
                target="_blank"
                className="text-blue-600 hover:underline items-center font-normal inline sm:hidden"
              >
                (PDF)
              </Link>
            </span>
          </span>
        </div>
        <div className="hidden sm:block"></div>
        <div className="hidden sm:block"></div>
        <div className="hidden sm:block px-2 py-4 font-bold">
          <span className="flex items-start gap-2">
            <FileText className="w-5 h-5 flex-shrink-0 text-blue-600" />
            <Link
              href={'/files/david-mccoy-resume.pdf'}
              target="_blank"
              className="text-blue-600 hover:underline flex items-center font-bold"
            >
              Download PDF
            </Link>
          </span>
        </div>
      </div>
      {experience.map((exp, expIndex) => (
        <React.Fragment key={`exp-${expIndex}`}>
          {exp.roles.map((role, roleIndex) => (
            <React.Fragment key={`exp-role-${roleIndex}`}>
              <div
                className={`
                  grid grid-cols-1 ${columnSizes} gap-4
                  ${role.description ? 'hover:bg-gray-100' : ''}
                  ${roleIndex !== 0 ? 'border-none' : ''}
                `}
              >
                <div className="p-4 hidden sm:block">
                  {renderDateRange(role.startYear, role.endYear)}
                </div>
                <div className="p-4">
                  {role.description ? (
                    <button
                      onClick={() => toggleExpand(role.id)}
                      className="flex items-start gap-2 text-blue-600 hover:underline text-left w-full font-bold"
                    >
                      {role.title}
                      <ChevronToggle expanded={expandedItems.has(role.id)} />
                    </button>
                  ) : (
                    <span className="flex-grow text-blue-600 font-bold">
                      {role.title}
                    </span>
                  )}
                  <div className="sm:hidden text-xs text-gray-500 mt-1">
                    {renderDateRange(role.startYear, role.endYear)} |{' '}
                    {exp.company}
                  </div>
                </div>
                <div className="p-4 hidden sm:block">
                  {roleIndex === 0 ? exp.company : ''}
                </div>
                <div className="p-4 hidden sm:block">
                  {roleIndex === 0 ? exp.location : ''}
                </div>
              </div>
              <RoleDetails
                isVisible={expandedItems.has(role.id)}
                role={role}
                columnSizes={columnSizes}
                toggleExpand={toggleExpand}
              />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default ProfessionalExperience;
