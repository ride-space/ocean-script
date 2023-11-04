import { Card as CardWrap,CardBody, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import Image from 'next/image';
import Link from 'next/link';

import { Article } from '@/types/article';

export const Card = ({ title, slug, coverImage }: Article) => {
  return (
    <CardWrap
      as={Link}
      href={`articles/${slug}`}
      className='p-4'
      isPressable
      fullWidth
      isHoverable>
      <CardHeader className='  relative h-[150px]  w-full items-start '>
        <Image
          alt={coverImage?.altText || ''}
          className='rounded-md object-cover'
          src={coverImage?.src || '/images/main-visual.png'}
          fill
          quality={50}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          unoptimized={true}
        />
      </CardHeader>
      <CardBody className='gap-y-2 px-0'>
        <small className='line-clamp-2 break-all text-default-500'>
          {slug}
        </small>
        <h2 className='line-clamp-4 break-all text-large font-bold'>{title}</h2>
      </CardBody>
    </CardWrap>
  );
};

export const SkeletonCard = () => (
  <CardWrap className='p-4'>
    <Skeleton className='h-[150px] rounded-md' />
    <div className='py-5'>
      <Skeleton className='h-4 w-3/5 rounded-lg' />
      <Skeleton className='mt-3 h-5 w-full rounded-lg' />
      <Skeleton className='mt-2 h-5 w-2/5 rounded-lg' />
    </div>
  </CardWrap>
);
