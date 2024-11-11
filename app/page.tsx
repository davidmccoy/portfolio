import Link from 'next/link';
import { Folder } from 'lucide-react';
import { Grid } from '../components/grid/grid';
import Page from '../components/page';

const Home = () => {
  type Section = {
    name: string;
    link: string;
    lastModified: string;
    size: string;
    description: string;
  };

  const sections: Section[] = [
    {
      name: 'About',
      link: '/about',
      lastModified: '27-Jun-2024',
      size: '-',
      description: 'Bio, skills, interests, etc.',
    },
    {
      name: 'CV',
      link: '/cv',
      lastModified: '25-Aug-2024',
      size: '-',
      description: 'Work and education history',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
      lastModified: '25-Oct-2024',
      size: '-',
      description: 'Professional and personal projects',
    },
    {
      name: 'Testimonials',
      link: '/testimonials',
      lastModified: '25-Oct-2024',
      size: '-',
      description: 'A selection of feedback received',
    },
    {
      name: 'Socials and Writing',
      link: '/find-me',
      lastModified: '10-Oct-2024',
      size: '-',
      description: 'Blog, Github, LinkedIn, Twitter, Bluesky',
    },
  ];

  const columnNames = ['Name', 'Last Modified', 'Size', 'Description'];
  const columnSizes = `sm:grid-cols-[2fr_1fr_1fr_2fr] `;

  return (
    <Page showParentDirectoryLink={false}>
      <Grid columnNames={columnNames} columnSizes={columnSizes}>
        {sections.map((file) => (
          <div
            key={file.name}
            className={`grid grid-cols-1 ${columnSizes} hover:bg-gray-100 border-t gap-4`}
          >
            <div className="p-4">
              <Link
                href={file.link}
                className="text-blue-600 hover:underline flex items-center"
              >
                <Folder className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="font-bold">{file.name}</span>
              </Link>
              <div className="sm:hidden text-xs text-gray-500 mt-1">
                {file.description}
              </div>
            </div>
            <div className="p-4 hidden sm:block">{file.lastModified}</div>
            <div className="p-4 hidden sm:block">{file.size}</div>
            <div className="p-4 hidden sm:block truncate">
              {file.description}
            </div>
          </div>
        ))}
      </Grid>
    </Page>
  );
};

export default Home;
