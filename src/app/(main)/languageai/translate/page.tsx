import TranslateDesktop from "./_components/TranslateDesktop";
import TranslateMobile from "./_components/TranslateMobile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Languageai Translate",
  description:
    "Translate texts & full document files instantly. Accurate translations for individuals and Teams. Millions translate with Languageai every day.",
  keywords:
    "translate, translations, translation, translator, machine translation, online translation",
};

const TranslatePage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Translate</h1>
      <TranslateMobile />
      <TranslateDesktop />
    </div>
  );
};

export default TranslatePage;
