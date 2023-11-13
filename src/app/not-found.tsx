import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-full flex-col items-center justify-center gap-6'>
      <h2>404 Not Found</h2>
      <p>このページは存在しません。</p>
      <Button href='/' as={Link} color='primary' variant='solid'>
        トップページに戻る
      </Button>
    </div>
  );
}
