import { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';

import { Form } from './Form';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'このブログの執筆者にお問い合わせできるページです。',
};

export default async function Contact() {
  return (
    <MainWrap>
      <section>
        <Form />
      </section>
    </MainWrap>
  );
}
