import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Muhammad Hafidz Portofolio',
  description: 'Hafidz Portofolio build by next js',
  icons : {
    icon : [
   "./favicon.ico?v=4"
    ],
    apple : [
   "./apple-touch-icon.png?v=4"
    ],
    shortcut : [
      '../public/apple-touch-icon.png'
    ]
   },
   manifest : '/site.webmanifest'
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body  className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
