'use client';

import { useState } from 'react';
import { ChevronUp, FileText } from 'lucide-react';
import React from 'react';
import Grid from '../../components/grid/grid';
import Page from '../../components/page';
import { infoItems } from './data';
import { motion } from 'framer-motion';
import ChevronToggle from '../../components/chevron-toggle';
import Link from 'next/link';

const About = () => {
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

  const columnNames = ['Name', 'Last Modified', 'Size', 'Description'];
  const columnSizes = `sm:grid-cols-[2fr_2fr_1fr_3fr]`;

  return (
    <Page title={'/about'}>
      <Grid columnNames={columnNames} columnSizes={columnSizes}>
        {infoItems.map((item) => (
          <React.Fragment key={item.id}>
            <div
              className={`grid grid-cols-1 ${columnSizes} gap-4 hover:bg-gray-100`}
            >
              <div className="p-4 break-words">
                {item.file ? (
                  <span className="flex items-start gap-2">
                    <FileText className="w-5 h-5 flex-shrink-0  text-blue-600" />
                    <Link
                      href={item.file}
                      target="_blank"
                      className="text-blue-600 hover:underline flex items-center font-bold"
                    >
                      {item.name}
                    </Link>
                  </span>
                ) : (
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-start gap-2 text-blue-600 hover:underline text-left w-full font-bold"
                  >
                    <FileText className="w-5 h-5 flex-shrink-0" />

                    {item.name}
                    {item.component && (
                      <ChevronToggle expanded={expandedItems.has(item.id)} />
                    )}
                  </button>
                )}
                <div className="sm:hidden text-xs text-gray-500 truncate max-w-[90vw] mt-2">
                  {item.description}
                </div>
              </div>
              <div className="p-4 hidden sm:block">{item.lastModified}</div>
              <div className="p-4 hidden sm:block">{item.size}</div>
              <div
                className="p-4 max-w-xs truncate hidden sm:block"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </div>
            <motion.div
              className="overflow-hidden border-t-0 bg-gray-50"
              style={{ borderTop: '0px' }}
              key={`${item.id}-expanded`}
              initial={{ height: 0 }}
              animate={{
                height: expandedItems.has(item.id) ? 'auto' : 0,
                opacity: expandedItems.has(item.id) ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            >
              {item.component}
              {item.showCollapse && (
                <div className="sm:hidden">
                  <div></div>
                  <div>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex items-center text-blue-600 hover:underline p-4"
                    >
                      Collapse{' '}
                      <ChevronUp className="w-4 h-4 ml-2 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </React.Fragment>
        ))}
      </Grid>
    </Page>
  );
};

export default About;
