import { ReactElement } from 'react';
import CoFounder from './projects/cofounder';
import MainStreet from './projects/mainstreet';
import Upright from './projects/upright';
import Hipsters from './projects/hipsters';
import Personal from './projects/personal';
import ThousandLeagues from './projects/thousand-leagues';
import MTGCast from './projects/mtgcast';
import TDL from './projects/tdl';

export type Project = {
  id: string;
  name: string;
  stack: string;
  infrastructure: string;
  logo: {
    url: string;
    width: number;
  };
  description: string;
  component?: ReactElement;
  images?: string[];
};

export const professionalProjects: Project[] = [
  {
    id: '1',
    name: 'CoFounder',
    stack: 'TypeScript (React/Next.js), Python (FastAPI)',
    infrastructure: 'Vercel, GCP (Cloud Run)',
    logo: {
      url: '/images/cofounder-logo.svg',
      width: 100,
    },
    description: 'Small business tax, finance, and accounting AI.',
    component: <CoFounder />,
  },
  {
    id: '2',
    name: 'MainStreet',
    stack: 'TypeScript (React/Node.js), Python (FastAPI)',
    infrastructure: 'GCP (GKE and Cloud Run)',
    logo: {
      url: '/images/mainstreet-logo.svg',
      width: 140,
    },
    description:
      'Business tax credit platform that has delivered $200+ million in credits.',
    component: <MainStreet />,
  },
  {
    id: '3',
    name: 'Upright',
    stack: 'Ruby (Rails), JavaScript (React)',
    infrastructure: 'AWS (EKS)',
    logo: {
      url: '/images/upright-logo.png',
      width: 80,
    },
    description: 'Real estate lending and investing platform.',
    component: <Upright />,
  },
];

export const personalProjects: Project[] = [
  {
    id: '4',
    name: 'Personal Website',
    stack: 'TypeScript (React/Next.js)',
    infrastructure: 'Github Pages',
    logo: {
      url: '/images/portfolio-logo.png',
      width: 100,
    },
    description:
      'A full-stack e-commerce solution with real-time inventory management.',
    images: ['https://placecats.com/300/200', 'https://placecats.com/300/200'],
    component: <Personal />,
  },
  {
    id: '5',
    name: 'MTGCast',
    stack: 'Ruby (Rails), JavaScript',
    infrastructure: 'Heroku, AWS (s3)',
    logo: {
      url: '/images/mtgcast-logo.png',
      width: 90,
    },
    description: 'Content creation platform that supported blogs and podcasts.',
    component: <MTGCast />,
  },
  {
    id: '6',
    name: 'Thousand Leagues',
    stack: 'Ruby (Rails), JavaScript (React)',
    infrastructure: 'Heroku',
    logo: {
      url: '/images/thousand-leagues-logo.png',
      width: 140,
    },
    description:
      'First-of-its-kind e-sports fantasy app that supported Magic: The Gathering events and player stats.',
    component: <ThousandLeagues />,
  },
  {
    id: '7',
    name: 'Team Magic League',
    stack: 'Ruby (Rails), JavaScript',
    infrastructure: 'Heroku',
    logo: {
      url: '/images/tdl-logo.jpeg',
      width: 130,
    },
    description:
      'Gaming content and news site that reached over 2 million users annually at peak and 60% growth year-over-year from 2017-2023. Employed a remote team of 10 and generated $100k+ in revenue.',
    component: <TDL />,
  },
  {
    id: '8',
    name: 'Hipsters of the Coast',
    stack: 'PHP (WordPress), JavaScript',
    infrastructure: 'WPEngine',
    logo: {
      url: '/images/hipsters-logo.svg',
      width: 200,
    },
    description:
      'Gaming content and news site that reached over 2 million users annually at peak and 60% growth year-over-year from 2017-2023. Employed a remote team of 10 and generated $100k+ in revenue.',
    component: <Hipsters />,
  },
];
