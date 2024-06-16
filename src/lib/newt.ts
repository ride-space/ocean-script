import 'server-only';

import { createClient } from 'newt-client-js';
import { cache } from 'react';

import { Article, ArticleListItem } from '@/types/article';

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
});

export const getArticles = cache(async () => {
  const { items } = await client.getContents<ArticleListItem>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'coverImage',
        'tags',
        'category',
      ],
    },
  });

  return items;
});
export const getPickUpArticles = cache(async () => {
  const { items } = await client.getContents<ArticleListItem>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'body', 'tags', 'category'],
      limit: 3,
    },
  });
  return items;
});

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: ['_id', 'title', 'slug', 'body', 'coverImage', 'category'],
    },
  });
  console.log(article?.tags);

  return article;
});
