import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationItems } from './data';
import { renderDateRange } from '../shared/utils';

type EducationProps = {
  columnSizes: string;
};

const Education = ({ columnSizes }: EducationProps) => {
  return (
    <>
      <div className={`grid grid-cols-1 ${columnSizes} border-t`}>
        <div className="col-span-1 sm:col-span-4 p-4 font-bold">
          <GraduationCap className="w-4 h-4 inline mr-2" />
          Education
        </div>
      </div>
      {educationItems.map((edu) => (
        <div
          key={`edu-${edu.id}`}
          className={`grid grid-cols-1 ${columnSizes} border-t`}
        >
          <div className="p-4 hidden sm:block">
            {renderDateRange(edu.startYear, edu.endYear)}
          </div>
          <div className="p-4">
            <span className="text-blue-600 font-bold">{edu.name}</span>
            <div className="sm:hidden text-xs text-gray-500 mt-1">
              {renderDateRange(edu.startYear, edu.endYear)} | {edu.institution}
            </div>
          </div>
          <div className="p-4 hidden sm:block">{edu.institution}</div>
          <div className="p-4 hidden sm:block">{edu.location}</div>
        </div>
      ))}
    </>
  );
};

export default Education;
