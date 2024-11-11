import path from "path";

export type Testimonial = {
  id: string;
  from: string;
  type: string;
  relationship: string;
  date: string;
  themes: string;
  review: string;
}

export const testimonialItems: Testimonial[] = [
  {
    id: '1',
    from: 'Engineering Manager',
    type: 'Performance Review',
    relationship: 'Manager',
    date: '2022-11-04',
    themes: 'Leadership, influence, process',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-1.md',
    )
  },
  {
    id: '3',
    from: 'Product Manager',
    type: 'Ad Hoc',
    relationship: 'Peer',
    date: '2023-05-30',
    themes: 'Mentorship, inclusion',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-3.md',
    )
  },
  {
    id: '4',
    from: 'Product Manager',
    type: 'Performance Review',
    relationship: 'Teammate',
    date: '2023-11-17',
    themes: 'Domain expertise, testing, customer centricity, inclusion, feedback',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-4.md',
    )
  },
  {
    id: '10',
    from: 'Product Manager',
    type: 'Performance Review',
    relationship: 'Teammate',
    date: '2023-11-17',
    themes: 'Communication, leadership, mentorship',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-10.md',
    )
  },
  {
    id: '5',
    from: 'Senior Engineer',
    type: 'Performance Review',
    relationship: 'Teammate',
    date: '2024-03-15',
    themes: 'Leadership, technical expertise, prioritization',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-5.md',
    )
  },
  {
    id: '2',
    from: 'Product Manager',
    type: 'Ad Hoc',
    relationship: 'Teammate',
    date: '2023-05-30',
    themes: 'Domain expertise, technical ability, leadership',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-2.md',
    )
  },
  {
    id: '6',
    from: 'Engineering Manager',
    type: 'Performance Review',
    relationship: 'Manager',
    date: '2024-03-15',
    themes: 'Leadership, planning',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-6.md',
    )
  },
  {
    id: '7',
    from: 'Engineering Manager',
    type: 'Performance Review',
    relationship: 'Manager',
    date: '2024-03-15',
    themes: 'Ownership, influence, culture',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-7.md',
    )
  },
  {
    id: '8',
    from: 'Engineering Manager',
    type: 'Performance Review',
    relationship: 'Manager',
    date: '2024-03-15',
    themes: 'Adaptability, ownership, urgency, customer centricity',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-8.md',
    )
  },
  {
    id: '9',
    from: 'Staff Engineer',
    type: 'Performance Review',
    relationship: 'Peer',
    date: '2024-03-15',
    themes: 'Impact, ownership',
    review: path.join(
      process.cwd(),
      'app',
      'testimonials',
      'content',
      'review-9.md',
    )
  },
]
