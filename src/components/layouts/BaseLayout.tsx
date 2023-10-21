import { Breadcrumb } from './Breadcrumb';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainVisual } from './MainVisual';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='mx-auto w-full px-6 md:max-w-5xl'>
        <MainVisual />
        <Breadcrumb />
        <div className='pb-24 pt-14'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
