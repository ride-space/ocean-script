import localFont from 'next/font/local';
import type { ReactNode } from 'react';

/*!
 * "LINESeed" licensed under the SIL Open Font License
 * https://seed.line.me/index_jp.html（配布元のURL）
 */

const font = localFont({
  src: [
    { path: '../../public/fonts/LINESeedJP_OTF_Eb.woff2', weight: '800 900' },
    { path: '../../public/fonts/LINESeedJP_OTF_Bd.woff2', weight: '500 700' },
    { path: '../../public/fonts/LINESeedJP_OTF_Rg.woff2', weight: '300 400' },
    { path: '../../public/fonts/LINESeedJP_OTF_Th.woff2', weight: '100 200' },
  ],
});
export const LocalFontProviders = ({ children }: { children: ReactNode }) => {
  return <div className={`${font.className} h-full`}>{children}</div>;
};
