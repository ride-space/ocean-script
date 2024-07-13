import { Suspense } from 'react';

import { Card } from '@/components/common';
import { MainWrap } from '@/components/layouts';
import { getArticles } from '@/lib/newt';
import { Metadata } from 'next';
import { GiPalmTree } from 'react-icons/gi';

export const metadata: Metadata = {
  title: '記事一覧',
  description: 'Ocean Scriptに投稿された記事一覧です。',
};

export default async function Home() {
  return (
    <MainWrap>
      <section className='py-10'>
        <div className='mb-10 flex items-center gap-x-2'>
          <h2 className='text-2xl font-bold md:text-4xl'>Articles</h2>
          <GiPalmTree size={40} />
        </div>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          <Suspense fallback={<SkeletonCards />}>
            <Articles />
          </Suspense>
        </div>
      </section>
    </MainWrap>
  );
}

const SkeletonCards = () => {
  return <div></div>;
};

const Articles = async () => {
  const articles = await getArticles();
  return articles.map(article => <Card key={article._id} {...article} />);
};
