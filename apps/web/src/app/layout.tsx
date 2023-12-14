import { Noto_Sans_Javanese } from 'next/font/google';

import '@/styles/global.scss';
import { createMetadata } from '@/utils/metadata';

const fontStyles = Noto_Sans_Javanese({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = createMetadata({
  title: 'Next.js FullStack Template',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={fontStyles.className}>{children}</body>
    </html>
  );
}
