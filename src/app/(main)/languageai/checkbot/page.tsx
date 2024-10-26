import CheckbotDesktop from "./_components/CheckbotDesktop";
import CheckbotMobile from "./_components/CheckbotMobile";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Languageai Checkbot",
    description: "Fix your writing easily. Check grammar and spelling, analyse strength and weakness, provide suggestions, and paraphrase in one click. All in Languageai Checkbot.",
    keywords: "fix writing, check grammar, check spelling, text paraphrase, languageai checkbot",
};

const CheckbotPage = () => {
  return (
    <div className=" w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Checkbot</h1>
      <CheckbotMobile />
      <CheckbotDesktop />
    </div>
  );
};

export default CheckbotPage;
