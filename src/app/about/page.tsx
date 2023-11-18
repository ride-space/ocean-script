import { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';

export const metadata: Metadata = {
  title: '執筆者について',
  description: 'このブログの執筆者についての説明ページです。',
};

export default async function About() {
  return (
    <MainWrap>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>
          執筆者について
        </h2>
      </section>
    </MainWrap>
  );
}
