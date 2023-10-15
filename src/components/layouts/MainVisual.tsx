import Image from 'next/image';

export const MainVisual = () => (
  <BackgroundImage>
    <Content />
  </BackgroundImage>
);
const BackgroundImage = ({ children }: { children: React.ReactNode }) => (
  <section className='relative left-0 z-10 mx-[calc(50%-50vw)] h-60 w-screen md:h-[230px]'>
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
        'h-[69.1%] w-full ' +
        'bg-gradient-to-t from-black  opacity-40'
      }
    />
    {children}
  </section>
);

const Content = () => (
  <div
    className={
      'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform ' +
      'max-w-[1024px] w-full mx-auto px-6 md:px-8 text-center '
    }>
    <div className='relative mx-auto mb-7 aspect-square h-20 w-20 md:mb-[26px] md:h-[132px] md:w-[132px]'>
      sub title
    </div>
    <div className='md:mt-[26px]'>
      <h1 className='break-all text-xl font-bold text-white md:text-2xl'>
        Ocean Script
      </h1>
    </div>
  </div>
);
