'use client';
import { Card } from '@nextui-org/card';
import { ScrollShadow } from '@nextui-org/react';
import { useEffect } from 'react';
import tocbot from 'tocbot';

export const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '#tocNav',
      contentSelector: '#article',
      headingSelector: 'h1, h2, h3',
      hasInnerContainers: true,
      collapseDepth: 6,
      scrollSmooth: true,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: -100,
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className='flex w-full gap-x-10'>
      <div className='w-[70%] pb-20 pt-12'>{children}</div>
      <Sidebar />
    </div>
  );
};

export const Sidebar = () => {
  return (
    <aside className='w-[calc(30%_-_40px)]'>
      <Card className='sticky top-20 mt-5 '>
        <ScrollShadow id='tocNav' className=' px-4 py-5'></ScrollShadow>
      </Card>
    </aside>
  );
};
