import './globals.css';

import type { Metadata } from 'next';

import { BaseLayout } from '@/components/layouts';
import { NextUIProviders } from '@/providers';
import { LocalFontProviders } from '@/providers/LocalFontProviders';

export const metadata: Metadata = {
  title: {
    default: 'Ocean Script',
    template: `%s | Ocean Script`,
  },
  description: 'ゆるく技術的な記事や趣味のことを投稿してるブログです。気軽に見てってな〜',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>
        <NextUIProviders>
          <LocalFontProviders>
            <BaseLayout>{children}</BaseLayout>
          </LocalFontProviders>
        </NextUIProviders>
      </body>
    </html>
  );
}
