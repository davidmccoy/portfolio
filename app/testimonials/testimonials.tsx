'use client';

import React, { useState } from 'react';
import Grid from '../../components/grid/grid';
import { Testimonial } from './data';
import { ChevronUp, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import ChevronToggle from '../../components/chevron-toggle';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const columnNames = ['From', 'Relationship', 'Type', 'Themes'];
  const columnSizes = `sm:grid-cols-[1fr_1fr_1fr_1fr]`;
  return (
    <Grid columnNames={columnNames} columnSizes={columnSizes}>
      <div className={`grid grid-cols-1 gap-4`}>
        <div className="p-4 italic">
          Excerpts posted with permission. Slightly edited to preserve anonymity
          and business details. Boldface added by me.
        </div>
      </div>
      {testimonials.map((testimonial, index) => (
        <React.Fragment key={`testimonial-${index}`}>
          <div
            className={`grid grid-cols-1 ${columnSizes} gap-4 hover:bg-gray-100`}
          >
            <div className="p-4 break-words">
              <button
                onClick={() => toggleExpand(testimonial.id)}
                className="flex items-start gap-2 text-blue-600 hover:underline text-left w-full font-bold"
              >
                <FileText className="w-5 h-5 flex-shrink-0" />
                {testimonial.from}
                <ChevronToggle expanded={expandedItems.has(testimonial.id)} />
              </button>
              <div className="sm:hidden text-xs text-gray-500 truncate max-w-[90vw] mt-1">
                {testimonial.themes}
              </div>
            </div>
            <div className="p-4 hidden sm:block">
              {testimonial.relationship}
            </div>
            <div className="p-4 hidden sm:block">{testimonial.type}</div>
            <div className="p-4 max-w-xs truncate hidden sm:block">
              {testimonial.themes}
            </div>
          </div>
          <motion.div
            className="overflow-hidden border-t-0 bg-gray-50"
            style={{ borderTop: '0px' }}
            key={`${testimonial.id}-expanded`}
            initial={{ height: 0 }}
            animate={{
              height: expandedItems.has(testimonial.id) ? 'auto' : 0,
              opacity: expandedItems.has(testimonial.id) ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <div
              className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-4`}
            >
              <div></div>
              <div
                className="py-2 px-3 testimonial-text"
                dangerouslySetInnerHTML={{ __html: testimonial.review }}
              ></div>
              <div></div>
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-4`}
            >
              <div></div>
              <div>
                <button
                  onClick={() => toggleExpand(testimonial.id)}
                  className="flex items-center text-blue-600 hover:underline p-4"
                >
                  Collapse <ChevronUp className="w-4 h-4 ml-2 flex-shrink-0" />
                </button>
              </div>
              <div></div>
            </div>
          </motion.div>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Testimonials;
