import { Card as CardWrap,CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Skeleton } from '@nextui-org/skeleton';
import { Link as TransitionLink } from 'next-view-transitions';

import { ArticleListItem } from '@/types/article';

export const Card = ({ title, slug, coverImage }: ArticleListItem) => {
  return (
    <CardWrap
      as={TransitionLink}
      href={`articles/${slug}`}
      className=''
      isPressable
      fullWidth
      isHoverable>
      <Image
        shadow='sm'
        radius='none'
        width='100%'
        className='h-[140px] w-full object-cover'
        isZoomed
        alt={coverImage?.altText || ''}
        src={coverImage?.src || '/images/main-visual.png'}
      />
      <CardBody className='gap-y-2'>
        <small className='line-clamp-2 break-all text-default-500'>
          {slug}
        </small>
        <h2 className='line-clamp-4 break-all text-large font-bold'>{title}</h2>
      </CardBody>
    </CardWrap>
  );
};

export const SkeletonCard = () => (
  <CardWrap className=''>
    <Skeleton className='h-[140px] rounded-t-md' />
    <div className='p-3'>
      <Skeleton className='h-5 w-3/5 rounded-lg' />
      <Skeleton className='mt-3 h-6 w-full rounded-lg' />
    </div>
  </CardWrap>
);
