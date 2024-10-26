import Link from "next/link";
import { MdTerminal } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { AiTwotoneAudio } from "react-icons/ai";
import { RiVoiceprintLine } from "react-icons/ri";

const LanguageaiHome = () => {
  return (
    <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 h-full place-items-center md:place-items-center">
      <Link href="/languageai/checkbot">
        <div className="flex items-center gap-2 px-4 text-2xl md:text-5xl mb-4">
          <MdTerminal />
          <span>Checkbot</span>
        </div>
        <div className="px-4 md:text-4xl">
          Why pay for grammarly when you can check your writing for free?
        </div>
      </Link>
      <Link href="/languageai/translate">
        <div className="flex items-center gap-2 px-4 text-2xl md:text-5xl mb-4">
          <IoLanguageOutline />
          <span>Translate</span>
        </div>
        <div className="px-4 md:text-4xl">
          Is it better than Google Translate? Try with idioms.
        </div>
      </Link>
      <Link href="/languageai/speech-to-text">
        <div className="flex items-center gap-2 px-4 text-2xl md:text-5xl mb-4">
          <AiTwotoneAudio />
          <span>Speech to Text</span>
        </div>
        <div className="px-4 md:text-4xl">
          Embrace your freedom of speech. Pour your idea of thought.
        </div>
      </Link>
      <Link href="/languageai/text-to-speech" className="w-full">
        <div className="flex items-center gap-2 px-4 text-2xl md:text-5xl mb-4">
          <RiVoiceprintLine />
          <span>Text to Speech</span>
        </div>
        <audio controls className="px-4 w-full">
          <source src="/tts.mp3" />
        </audio>
      </Link>
    </div>
  );
};

export default LanguageaiHome;
