import { MetadataRoute } from 'next';

import { getArticles } from '@/lib/newt';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rootUrl = process.env.MY_APP_URL || '';
  const articles = await getArticles();
  const articlesRecords: MetadataRoute.Sitemap = articles.map(a => {
    return {
      url: `${rootUrl}/articles/${a.slug}`,
      lastModified: a._sys.updatedAt || a._sys.updatedAt,
      changeFrequency: 'monthly',
      priority: 1,
    };
  });
  const pagesRecords: MetadataRoute.Sitemap = [
    {
      url: rootUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `${rootUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${rootUrl}/content`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${rootUrl}/copyright`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${rootUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  return [...articlesRecords, ...pagesRecords];
}
