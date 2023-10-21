import { Card as CardWrap,CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@/types/article';

export const Card = ({ title, slug, coverImage }: Article) => {
  return (
    <Link href={`articles/${slug}`}>
      <CardWrap className='py-4 '>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <p className='text-tiny font-bold uppercase'>Daily Mix</p>
          <small className='text-default-500'>{slug}</small>
          <h4 className='text-large font-bold'>{title}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt={coverImage?.altText || ''}
            className='rounded-xl object-cover'
            src={coverImage?.src || '/images/main-visual.png'}
            width={270}
            height={300}
            quality={50}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            unoptimized={true}
          />
        </CardBody>
      </CardWrap>
    </Link>
  );
};
