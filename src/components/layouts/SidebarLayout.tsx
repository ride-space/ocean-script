'use client';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { ScrollShadow } from '@nextui-org/react';
import { User } from '@nextui-org/user';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import tocbot from 'tocbot';

import { x } from '@/const/urls';

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
      <Card>
        <CardHeader className='justify-between'>
          <User
            name='しの'
            avatarProps={{
              src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            }}
          />
        </CardHeader>
        <div className='px-3 py-0 text-small text-default-400'>
          <p>
            都内でフロントエンドエンジニアやってます。アメ車好きの犬派です。
          </p>
        </div>
        <CardFooter className='gap-3'>
          <Link
            href={x}
            target='blank'
            rel='noopener noreferrer'
            className='pt-2'>
            follow me <FaSquareXTwitter size={20} className='inline' />
          </Link>
        </CardFooter>
      </Card>
      <Card className='sticky top-20 mt-5 '>
        <ScrollShadow id='tocNav' className=' px-4 py-5'></ScrollShadow>
      </Card>
    </aside>
  );
};
