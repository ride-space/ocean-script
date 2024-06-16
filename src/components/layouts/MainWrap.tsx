import { Breadcrumb } from './Breadcrumb';
import { createPageLayoutItems } from './createPageLayoutItems';
import { MainVisual } from './MainVisual';
import { SidebarLayout } from './SidebarLayout';

export const MainWrap = async ({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug?: string;
}) => {
  const pageItems = await createPageLayoutItems(slug);

  return (
    <>
      <MainVisual pageItems={pageItems} />
      {pageItems.isBreadcrumb ? (
        <Breadcrumb breadcrumbList={pageItems.breadcrumbList} />
      ) : null}
      {pageItems.isSidebar ? (
        <SidebarLayout>{children}</SidebarLayout>
      ) : (
        <div className='pb-24 pt-14'>{children}</div>
      )}
    </>
  );
};
