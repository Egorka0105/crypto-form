import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './index.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
