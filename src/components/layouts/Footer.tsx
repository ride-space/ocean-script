import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer>
      <div
        className={
          'mx-auto w-full px-6 md:max-w-5xl py-10 ' + //
          'grid grid-cols-1 gap-y-6'
        }>
        <div
          className={
            'flex flex-col items-center justify-center gap-y-6 ' + //
            'md:flex-row md:justify-between md:gap-y-0'
          }>
          <h2 className=' text-5xl'>Ocean Script</h2>
          <div className=' grid grid-cols-1 gap-4'>
            <Link href='#'>執筆者について</Link>
            <Link href='#'>お問い合わせ</Link>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Link href='#'>利用規約・免責・著作権 </Link>
          <Link href='#'>プライバシーポリシー</Link>
          <Link href='#'>品質への取り組み</Link>
        </div>
        <div className='flex items-center justify-center'>
          <small className='flex items-center gap-x-1'>
            <FaRegCopyright />
            Ocean Script
          </small>
        </div>
      </div>
    </footer>
  );
};
