import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const workSans = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Languageai.id",
  description: "One AI for language and writing",
  keywords:
    "languageai, fix writing, check grammar, check spelling, text paraphrase,translate, translations, translation, translator, machine translation, online translation",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
