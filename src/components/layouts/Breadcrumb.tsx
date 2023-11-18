'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

export const Breadcrumb = ({
  breadcrumbList,
}: {
  breadcrumbList: { href?: string; label: string }[];
}) => {
  return (
    <Breadcrumbs
      maxItems={3}
      itemsBeforeCollapse={1}
      itemsAfterCollapse={2}
      underline={'always'}
      color='primary'
      className='truncate pt-3'>
      {breadcrumbList?.map((item, i) => {
        return (
          <BreadcrumbItem key={i} href={item.href ? item.href : '#'}>
            {item.label}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};
