import { Metadata } from 'next';

import { MainWrap } from '@/components/layouts';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'このブログのプライバシーポリシーです。',
};

export default async function Privacy() {
  return (
    <MainWrap>
      <section>
        <h2 className='my-10 text-center text-2xl md:text-2xl'>
          プライバシーポリシー
        </h2>
        <div className='mt-10'>
          <div>
            <h3>お客様から取得する情報</h3>
            <p>以下の情報を取得します。</p>
          </div>

          <div>
            <h3>お客様から取得する目的</h3>
            <ul>
              <li>
                等プログにおけるお客様の行動履歴を分析し、当サービスの維持改善に役立てるため
              </li>
              <li>お客様からのお問い合わせに対応するため</li>
              <li>規約や法令に違反する行為に対応するため</li>
            </ul>
          </div>

          <div>
            <h3>安全管理のために講じた処置</h3>
            <p>取得した情報に関して安全管理のために講じた措置につきましては、末尾に記載のお問合せ先にご連絡をいただきましたら法令の定めに従い個別にご回答させていただきます。</p>
          </div>

          <div>
            <h3>第三者提供</h3>
            <p>取得した情報に関して安全管理のために講じた措置につきましては、末尾に記載のお問合せ先にご連絡をいただきましたら法令の定めに従い個別にご回答させていただきます。</p>
          </div>
        </div>
      </section>
    </MainWrap>
  );
}
