import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/contact/',
    },
    sitemap: `${process.env.MY_APP_URL}/sitemap.xml`,
  };
}
