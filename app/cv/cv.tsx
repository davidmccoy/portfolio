'use client';

import Grid from '../../components/grid/grid';
import { Experience } from './data';
import Education from './education';
import ProfessionalExperience from './professional-experience';

type CvParams = {
  experience: Experience[];
};

const Cv = ({ experience }: CvParams) => {
  const columnNames = ['Start - End', 'Title', 'Company', 'Location'];
  const columnSizes = `sm:grid-cols-[1fr_3fr_1fr_1fr] `;

  return (
    <Grid
      columnNames={columnNames}
      columnSizes={columnSizes}
      primaryColumnIndex={1}
    >
      <ProfessionalExperience
        experience={experience}
        columnSizes={columnSizes}
      />
      <Education columnSizes={columnSizes} />
    </Grid>
  );
};

export default Cv;
