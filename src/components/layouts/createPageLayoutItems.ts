import { getArticleBySlug } from '@/lib/newt';
import { headers } from 'next/headers';

export type PageLayoutItems = {
  title: string;
  subTitle: string;
  href: string;
  isBreadcrumb: boolean;
  isSidebar: boolean;
  breadcrumbList: { href: string; label: string }[];
};

export const createPageLayoutItems = async (
  slug: string | undefined
): Promise<PageLayoutItems> => {
  const headersList = headers();
  const headerUrl =
    headersList.get('x-url') === null
      ? ''
      : (headersList.get('x-url') as string);
  const urlObject = new URL(headerUrl);
  const path = urlObject.pathname;

  if (path.startsWith('/articles') && slug) {
    const article = await getArticleBySlug(slug);
    return {
      title: 'Article',
      subTitle: article?.title || '',
      href: `/articles/${article?.slug}`,
      isBreadcrumb: true,
      isSidebar: true,
      breadcrumbList: [
        { href: '/', label: 'トップ' },
        { href: `/articles/${article?.slug}`, label: article?.title || '' },
      ],
    };
  }

  switch (path) {
    case '/about':
      return {
        title: 'About',
        subTitle: '執筆者について',
        href: '/about',
        isBreadcrumb: true,
        isSidebar: true,
        breadcrumbList: [
          { href: '/', label: 'トップ' },
          { href: '/about', label: '執筆者について' },
        ],
      };
    case '/contact':
      return {
        title: 'Contact',
        subTitle: 'お問い合わせ',
        href: '/contact',
        isBreadcrumb: true,
        isSidebar: false,
        breadcrumbList: [
          { href: '/', label: 'トップ' },
          { href: '/contact', label: 'お問い合わせ' },
        ],
      };
    case '/copyright':
      return {
        title: 'Copyright',
        subTitle: '利用規約・免責・著作権',
        href: '/copyright',
        isBreadcrumb: true,
        isSidebar: true,
        breadcrumbList: [
          { href: '/', label: 'トップ' },
          { href: '/copyright', label: '利用規約・免責・著作権' },
        ],
      };
    case '/privacy':
      return {
        title: 'Privacy',
        subTitle: 'プライバシーポリシー',
        href: '/privacy',
        isBreadcrumb: true,
        isSidebar: true,
        breadcrumbList: [
          { href: '/', label: 'トップ' },
          { href: '/privacy', label: 'プライバシーポリシー' },
        ],
      };
    default:
      return {
        title: 'Ocean Script',
        subTitle: 'エンジニアブログ',
        href: '/',
        isBreadcrumb: false,
        isSidebar: false,
        breadcrumbList: [{ href: '/', label: 'トップ' }],
      };
  }
};
