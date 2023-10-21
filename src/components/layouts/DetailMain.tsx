'use client';
import { useEffect } from 'react';
import tocbot from 'tocbot';

import { Sidebar } from './Sidebar';

export const DetailMain = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '#tocNav',
      contentSelector: '#article',
      headingSelector: 'h2, h3',
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className='grid grid-cols-[1fr_300px] gap-x-10'>
      <div className='py-10'>{children}</div>
      <Sidebar />
    </div>
  );
};
