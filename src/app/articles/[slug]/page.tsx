import type { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';
import { descriptionMaxLength } from '@/const/urls';
import { truncateText } from '@/features';
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
  const description = truncateText(article?.body || '', descriptionMaxLength);

  return {
    title: article?.title,
    description,
  };
}

export default async function ArticleById({ params }: Props) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  let modifiedHTML = '';
  if (article && article.body) {
    const encodeTextForId = (text: string) => {
      return encodeURIComponent(text).replace(/[!'()*]/g, c => {
        return '%' + c.charCodeAt(0).toString(16);
      });
    };

    modifiedHTML = article.body.replace(
      /<(h1|h2|h3)[^>]*>(.*?)<\/\1>/g,
      (match, group, innerText) => {
        const encodedText = encodeTextForId(innerText);
        return `<${group} id="${encodedText}">${innerText}</${group}>`;
      }
    );
  } else {
    return;
  }

  return (
    <MainWrap slug={slug}>
      <article id='article'>
        <div
          className='prose break-all dark:prose-invert'
          dangerouslySetInnerHTML={{ __html: modifiedHTML }}
        />
      </article>
    </MainWrap>
  );
}
