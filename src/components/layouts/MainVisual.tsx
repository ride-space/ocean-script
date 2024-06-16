import Image from 'next/image';

import { PageLayoutItems } from './createPageLayoutItems';

export const MainVisual = ({ pageItems }: { pageItems: PageLayoutItems }) => (
  <BackgroundImage>
    <Content pageItems={pageItems} />
  </BackgroundImage>
);
const BackgroundImage = ({ children }: { children: React.ReactNode }) => (
  <section className='relative left-0 z-10 mx-[calc(50%-50vw)] h-60 w-screen md:h-[256px]'>
    <Image
      src='/images/main-visual.png'
      alt='メインビジュアル'
      className='object-cover'
      priority
      fill
    />
    <div
      className={
        'absolute bottom-0 left-0 z-10 ' +
        'h-[76.4%] w-full ' +
        'bg-gradient-to-t from-black  opacity-80'
      }
    />
    {children}
  </section>
);

const Content = ({ pageItems }: { pageItems: PageLayoutItems }) => (
  <div
    className={
      'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform ' +
      'max-w-[1024px] w-full mx-auto px-6 md:px-8 text-center '
    }>
    <div className=''>
      <h1 className='break-all text-[clamp(24px,calc(16px_+_2vw),40px)] font-bold text-white '>
        {pageItems.title}
      </h1>
    </div>
    <h2 className='mt-3 text-white'>{pageItems.subTitle}</h2>
  </div>
);
