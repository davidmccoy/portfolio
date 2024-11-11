import dynamic from 'next/dynamic';
import { testimonialItems } from './data';
import { marked } from 'marked';
import fs from 'fs/promises';
import Page from '../../components/page';

const Testimonials = dynamic(() => import('./testimonials'), { ssr: false });

const TestimonialsPage = async () => {
  const data = await Promise.all(
    testimonialItems.map(async (testimonial) => {
      const fileContents = await fs.readFile(testimonial.review, 'utf8');
      const htmlContent = await marked(fileContents);

      return {
        ...testimonial,
        review: htmlContent, // Just return the resolved content
      };
    })
  );

  return (
    <Page title={'/testimonials'}>
      <Testimonials testimonials={data} />
    </Page>
  );
};

export default TestimonialsPage;
