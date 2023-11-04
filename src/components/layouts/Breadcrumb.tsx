'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import Link from 'next/link';

export const Breadcrumb = ({
  breadcrumbList,
}: {
  breadcrumbList: { href?: string; label: string }[];
}) => {
  return (
    <Breadcrumbs underline={'always'} className='pt-3'>
      {breadcrumbList?.map((item, i) => {
        return (
          <BreadcrumbItem key={i}>
            <Link
              href={item.href ? item.href : '#'}
              className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'>
              {item.label}
            </Link>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
