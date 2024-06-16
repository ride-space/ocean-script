
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa6';

export const Footer = () => {

  return (
    <footer className="bg-[#f5f5f5] dark:bg-[#18181B]">
      <div
        className={
          'mx-auto w-full px-6 md:max-w-6xl pt-10 pb-6 ' + //
          'grid grid-cols-1 gap-y-6 '
        }>
        <div
          className={
            'flex flex-col items-center justify-center gap-y-6 ' + //
            'md:flex-row md:justify-between md:gap-y-0'
          }>
          <h2 className=' text-3xl'>Ocean Script</h2>
          <div className=' grid grid-cols-1 gap-4'>
            <Link href='/about' className='text-sm'>執筆者について</Link>
            <Link href='/contact' className='text-sm'>お問い合わせ</Link>
          </div>
        </div>
        <div>
        <div className='mt-10 flex items-center justify-center gap-4 text-xs'>
          <Link href='/copyright' >利用規約・免責・著作権 </Link>
          <p>/</p>
          <Link href='/privacy'>プライバシーポリシー</Link>
          {/* <Link href='#'>品質への取り組み</Link> */}
        </div>
        <div className=' mt-2 text-center text-xs'>
          <small className='inline-flex items-center gap-x-1'>
            <FaRegCopyright />
            Ocean Script
          </small>
        </div>
        </div>

      </div>
    </footer>
  );
};
