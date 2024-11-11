import { ReactElement } from 'react';
import Bio from './bio';
import Skills from './skills';
import Interests from './interests';
import Contact from './contact';

type InfoItem = {
  id: string;
  name: string;
  description: string;
  lastModified: string;
  size: string;
  component?: ReactElement;
  file?: string;
  showCollapse?: boolean;
};

export const infoItems: InfoItem[] = [
  {
    id: '1',
    name: 'Bio.txt',
    description:
      "I'm a software engineer with over 10 years of experience in software development and technical leadership.",
    lastModified: '01-Jul-2024',
    size: '2.1K',
    component: <Bio />,
    showCollapse: true,
  },
  {
    id: '2',
    name: 'CV.pdf',
    description: '',
    lastModified: '10-10-2024',
    size: '100K',
    file: '/files/david-mccoy-resume.pdf',
  },
  {
    id: '3',
    name: 'Skills and Technology.xls',
    description: 'JavaScript, TypeScript, React, Node.js, Python, Ruby',
    lastModified: 'Just now',
    size: '4.5K',
    component: <Skills />,
    showCollapse: true,
  },
  {
    id: '4',
    name: 'Interests.doc',
    description: '',
    lastModified: '05-Jun-2024',
    size: '1.8K',
    component: <Interests />,
    showCollapse: true,
  },
  {
    id: '5',
    name: 'Contact.rtf',
    description: '',
    lastModified: '20-Jul-2024',
    size: '0.5K',
    component: <Contact />,
  },
];
