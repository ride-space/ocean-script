import { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'このブログのプライバシーポリシーです。',
};

export default async function Privacy() {
  return (
    <MainWrap>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>
          プライバシーポリシー
        </h2>
      </section>
    </MainWrap>
  );
}
