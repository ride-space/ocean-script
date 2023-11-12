import { Footer } from './Footer';
import { Header } from './Header';

export const BaseLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]'>
      <Header />
      <main className='mx-auto w-full px-6 md:max-w-5xl'>{children}</main>
      <Footer />
    </div>
  );
};
