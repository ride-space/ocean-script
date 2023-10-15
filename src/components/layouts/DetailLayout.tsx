import { Breadcrumb } from './Breadcrumb';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainVisual } from './MainVisual';
import { Sidebar } from './Sidebar';

export const DetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='mx-auto w-full px-6 md:max-w-5xl'>
        <MainVisual />
        <Breadcrumb />
        <div className='grid grid-cols-[1fr_200px] gap-x-10'>
          <div className='py-10'>

          {children}
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
};
