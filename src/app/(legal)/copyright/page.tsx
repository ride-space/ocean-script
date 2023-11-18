import { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';

export const metadata: Metadata = {
  title: '利用規約・免責・著作権',
  description:
    'このブログの利用規約・免責・著作権です。',
};

export default async function Copyright() {
  return (
    <MainWrap>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>
          利用規約・免責・著作権
        </h2>
      </section>
    </MainWrap>
  );
}
