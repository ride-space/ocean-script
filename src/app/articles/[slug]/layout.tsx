import { DetailLayout } from '@/components/layouts/DetailLayout';

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DetailLayout>{children}</DetailLayout>;
}
