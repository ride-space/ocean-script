import type { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';
import { getArticleBySlug, getArticles } from '@/lib/newt';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map(article => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  };
}

export default async function ArticleById({ params }: Props) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (!article) return;
  return (
    <MainWrap slug={slug}>
      <article id='article'>
        <h1>{article.title}</h1>
        <div className='prose dark:prose-invert' dangerouslySetInnerHTML={{ __html: article.body }} />
      </article>
    </MainWrap>
  );
}
