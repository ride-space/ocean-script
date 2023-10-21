import { Card } from '@/components/common';
import { getArticles, getPickUpArticles } from '@/lib/newt';

export default async function Home() {
  const articles = await getArticles();
  const pickUpArticles = await getPickUpArticles();

  return (
    <div className=''>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>Pick up</h2>
        <div className='grid grid-cols-3 gap-x-4'>
          {pickUpArticles.map(article => (
            <Card key={article._id} {...article} />
          ))}
        </div>
      </section>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>Articles</h2>
        <div className='grid grid-cols-3 grid-rows-[1ft] gap-x-4'>
          {articles.map(article => (
            <Card key={article._id} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
}
