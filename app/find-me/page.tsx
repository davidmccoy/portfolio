'use client';

import Link from 'next/link';
import React from 'react';
import Grid from '../../components/grid/grid';
import Page from '../../components/page';
import { findMeItems } from './data';

const FindMe = () => {
  const columnNames = ['Site', 'Joined', 'Status', 'Description'];
  const columnSizes = `sm:grid-cols-[1fr_1fr_1fr_2fr] `;

  return (
    <Page title={'/find-me'}>
      <Grid columnNames={columnNames} columnSizes={columnSizes}>
        {findMeItems.map((item) => (
          <div
            key={item.id}
            className={`grid grid-cols-1 ${columnSizes} gap-4 hover:bg-gray-100`}
          >
            <div className="p-4">
              <Link
                href={item.link}
                target="_blank"
                className="text-blue-600 hover:underline flex items-center font-bold"
              >
                {item.icon}
                {item.name}
              </Link>
              <div className="sm:hidden text-xs text-gray-500 mt-1">
                Joined {item.joined} | {item.active}
              </div>
            </div>
            <div className="hidden sm:block p-4">{item.joined}</div>
            <div className="hidden sm:block p-4">{item.active}</div>
            <div className="hidden sm:block p-4 truncate">{item.content}</div>
          </div>
        ))}
      </Grid>
    </Page>
  );
};

export default FindMe;
