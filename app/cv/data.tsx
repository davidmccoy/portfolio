import path from 'path';

export type Experience = {
  company: string;
  location: string;
  roles: Role[];
};

export type Role = {
  id: string;
  title: string;
  startYear: number;
  endYear?: number;
  description?: string;
};

export const experienceItems: Experience[] = [
  {
    company: 'MainStreet',
    location: 'New York, NY/Remote',
    roles: [
      {
        id: '1',
        title: 'Staff Software Engineer',
        startYear: 2023,
        description: path.join(
          process.cwd(),
          'app',
          'cv',
          'content',
          'roles',
          'mainstreet',
          'staff-engineer.md'
        ),
      },
      {
        id: '2',
        title: 'Senior Software Engineer',
        startYear: 2021,
        endYear: 2023,
      },
    ],
  },
  {
    company: 'Upright',
    location: 'New York, NY/Remote',
    roles: [
      {
        id: '3',
        title: 'Lead Software Engineer',
        startYear: 2020,
        endYear: 2021,
        description: path.join(
          process.cwd(),
          'app',
          'cv',
          'content',
          'roles',
          'upright',
          'lead-engineer.md'
        ),
      },
      {
        id: '4',
        title: 'Senior Software Engineer',
        startYear: 2018,
        endYear: 2020,
      },
    ],
  },
  {
    company: 'Redemptive Tech',
    location: 'Remote',
    roles: [
      {
        id: '5',
        title: 'Software Engineer',
        startYear: 2015,
        endYear: 2018,
        description: path.join(
          process.cwd(),
          'app',
          'cv',
          'content',
          'roles',
          'redemptive',
          'software-engineer.md'
        ),
      },
    ],
  },
  {
    company: 'Casthaven',
    location: 'Remote',
    roles: [
      {
        id: '6',
        title: 'Software Engineer',
        startYear: 2015,
        endYear: 2015,
        description: path.join(
          process.cwd(),
          'app',
          'cv',
          'content',
          'roles',
          'casthaven',
          'software-engineer.md'
        ),
      },
    ],
  },
  {
    company: 'Thirty Labs',
    location: 'New York, NY/Remote',
    roles: [
      {
        id: '7',
        title: 'Software Engineer',
        startYear: 2014,
        endYear: 2015,
        description: path.join(
          process.cwd(),
          'app',
          'cv',
          'content',
          'roles',
          'thirtylabs',
          'software-engineer.md'
        ),
      },
    ],
  },
];

type Credential = {
  id: string;
  name: string;
  institution: string;
  startYear: number;
  endYear?: number;
  location: string;
};

export const educationItems: Credential[] = [
  {
    id: '8',
    name: 'Bachelor of Arts in Political Science',
    institution: 'University of Washington',
    startYear: 2006,
    endYear: 2011,
    location: 'Seattle, WA',
  },
  {
    id: '9',
    name: 'Certficate in Informaton Security and Risk Management',
    institution: 'University of Washington',
    startYear: 2014,
    endYear: 2014,
    location: 'Seattle, WA',
  },
];
