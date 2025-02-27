import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import { Header } from "@/components/Header/Header";

import "./globals.css";

const PoppinsSans = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--body-font',
});

export const metadata: Metadata = {
  title: 'Alyment test kaique',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsSans.variable} antialiased`}
      >
        <Header />

        <ToastContainer />

        {children}
      </body>
    </html>
  );
}
