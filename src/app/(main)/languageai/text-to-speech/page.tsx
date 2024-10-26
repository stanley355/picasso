import TtsDesktop from "./_components/TtsDesktop";
import TtsMobile from "./_components/TtsMobile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Text to Speech Online - Languageai",
  description:
    "Languageai is a free text-to-speech tool and an online text reader that can convert text to speech, it supports 50+ languages, powerful neural network makes speech sound more natural, you can listen online, or download audio files in mp3 format",
  keywords: "tts, free text to speech, languageai",
};

const TtsPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-lg font-semibold p-2 border-b">Text to Speech</h1>
      <TtsMobile />
      <TtsDesktop />
    </div>
  );
};

export default TtsPage;
