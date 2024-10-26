import SttDesktop from "./_components/SttDesktop";
import SttMobile from "./_components/SttMobile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech to Text LanguageAI: speech recognition and transcription",
  description:
    "Accurately convert voice to text in over 40 languages and variants using languageai. Our AI converts speech to text online. Dictate your notes in real time, or upload recordings and get them transcribed automatically in no time.",
  keywords: "speech to text, transcribe, transcription, languageai",
};

const SpeechToText = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Speech to Text</h1>
      <SttMobile />
      <SttDesktop />
    </div>
  );
};

export default SpeechToText;
