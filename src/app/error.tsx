'use client';

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex min-h-full flex-col items-center justify-center gap-6'>
      <h2>エラーが発生しました。</h2>
      <p>申し訳ございませんが下記のボタンを押してリセットをしてください。</p>
      <Button onClick={() => reset()}>リセット</Button>
    </div>
  );
}
