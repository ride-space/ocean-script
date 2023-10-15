import {
  Card as CardWrap,
  CardBody,
  CardHeader,
} from '@nextui-org/card';
import Image from 'next/image';


export const Card = () => {
  return (
    <CardWrap className='py-4 '>
      <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
        <p className='text-tiny font-bold uppercase'>Daily Mix</p>
        <small className='text-default-500'>12 Tracks</small>
        <h4 className='text-large font-bold'>Frontend Radio</h4>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='rounded-xl object-cover'
          src='/images/main-visual.png'
          width={270}
          height={300}
        />
      </CardBody>
    </CardWrap>
  );
};
