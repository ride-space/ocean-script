import { Spinner } from '@nextui-org/spinner';

export default function Loading() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Spinner label='Loading...' color='warning' />
    </div>
  );
}
