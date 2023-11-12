import { Suspense } from 'react';

import { Card } from '@/components/common';
import { SkeletonCard } from '@/components/common/Card';
import { MainWrap } from '@/components/layouts';
import { getArticles, getPickUpArticles } from '@/lib/newt';

export default async function Home() {
  return (
    <MainWrap>
      <section className='py-10'>
        <h2 className='mb-10 text-center text-2xl font-bold md:text-4xl'>
          Pick up
        </h2>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          <Suspense fallback={<SkeletonCards />}>
            <PickUpArticles />
          </Suspense>
        </div>
      </section>
      <section className='py-10'>
        <h2 className='mb-10 text-center text-2xl font-bold md:text-4xl'>
          Articles
        </h2>
        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
          <Suspense fallback={<SkeletonCards />}>
            <Articles />
          </Suspense>
        </div>
      </section>
    </MainWrap>
  );
}

const sleep = (waitTime: number) =>
  new Promise(resolve => setTimeout(resolve, waitTime));

const SkeletonCards = () => (
  <>
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </>
);

const PickUpArticles = async () => {
  await sleep(5000);
  const pickUpArticles = await getPickUpArticles();
  return pickUpArticles.map(article => <Card key={article._id} {...article} />);
};

const Articles = async () => {
  await sleep(10000);
  const articles = await getArticles();
  return articles.map(article => <Card key={article._id} {...article} />);
};
