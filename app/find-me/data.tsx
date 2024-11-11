import { ReactElement } from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

type FindMeItem = {
  id: string;
  name: string;
  icon: ReactElement;
  link: string;
  content: string;
  joined: string;
  active: string;
};

export const findMeItems: FindMeItem[] = [
  {
    id: '1',
    name: 'Github',
    icon: <Github className="w-5 h-5 mr-2" />,
    link: 'https://github.com/davidmccoy',
    content:
      'JavaScript, TypeScript, React, Node.js, Python, Ruby, Ruby on Rails, etc',
    joined: '27-Jan-2014',
    active: 'Active',
  },
  {
    id: '2',
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5 mr-2" />,
    link: 'https://www.linkedin.com/in/rdmccoy/',
    content: 'Actively avoiding being posted on r/LinkedInLunatics',
    joined: '02-Mar-2008',
    active: 'Monitoring',
  },
  {
    id: '3',
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5 mr-2" />,
    link: 'https://twitter.com/dmccoy',
    content: 'Sports, technology, and news',
    joined: '01-Mar-2008',
    active: 'Active',
  },
  {
    id: '4',
    name: 'Bluesky',
    icon: <ExternalLink className="w-5 h-5 mr-2" />,
    link: 'https://bsky.app/profile/davidmccoy.com',
    content: 'Keeping that old-Twitter vibe alive',
    joined: '13-May-2023',
    active: 'Active',
  },
];
