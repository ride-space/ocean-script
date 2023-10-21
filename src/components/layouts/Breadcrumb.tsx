import Link from 'next/link';

export const Breadcrumb = () => {
  return (
    <nav className='w-full rounded-md pt-3'>
      <ol className='flex'>
        <li>
          <Link
            href='#'
            className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'>
            Home
          </Link>
        </li>
        <li>
          <span className='mx-2 text-neutral-500 dark:text-neutral-400'>/</span>
        </li>
        <li>
          <Link
            href='#'
            className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'>
            Library
          </Link>
        </li>
        <li>
          <span className='mx-2 text-neutral-500 dark:text-neutral-400'>/</span>
        </li>
        <li className='text-neutral-500 dark:text-neutral-400'>Data</li>
      </ol>
    </nav>
  );
};
