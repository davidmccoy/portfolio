import React from 'react';
import Page from '../../components/page';
import fs from 'fs/promises';
import { marked } from 'marked';
import dynamic from 'next/dynamic';
import { experienceItems } from './data';

const Cv = dynamic(() => import('./cv'), { ssr: false });

const CvPage = async () => {
  const data = await Promise.all(
    experienceItems.map(async (experience) => {
      return {
        ...experience,
        roles: await Promise.all(
          experience.roles.map(async (role) => {
            if (role.description) {
              const fileContents = await fs.readFile(role.description, 'utf8');
              const htmlContent = await marked(fileContents);

              return {
                ...role,
                description: htmlContent,
              };
            } else {
              return role;
            }
          })
        ),
      };
    })
  );

  return (
    <Page title={'/cv'}>
      <Cv experience={data} />
    </Page>
  );
};

export default CvPage;
