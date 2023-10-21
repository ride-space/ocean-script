import { Breadcrumb } from './Breadcrumb';
import { DetailMain } from './DetailMain';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainVisual } from './MainVisual';

export const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='mx-auto w-full px-6 md:max-w-5xl'>
        <MainVisual />
        <Breadcrumb />
        <DetailMain>{children}</DetailMain>
      </main>
      <Footer />
    </div>
  );
};
