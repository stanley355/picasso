'use client'
import { MdTerminal } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import { AiTwotoneAudio } from "react-icons/ai";
import { RiVoiceprintLine } from "react-icons/ri";
import {useRouter} from "next/navigation";

const LanguageaiHome = () => {
    const router = useRouter();
  return (
    <div className="grid grid-rows-4 gap-4 md:p-4 md:grid-rows-none md:grid-cols-2 h-full">
      <div className="bg-primary text-primary-foreground rounded-md p-4 cursor-pointer" onClick={()=> router.push("/languageai/checkbot")}>
        <div className="flex items-center gap-2 text-2xl md:text-5xl mb-4">
          <MdTerminal />
          <span>Checkbot</span>
        </div>
        <div className="md:text-4xl">
          Why pay for grammarly when you can check your writing for free?
        </div>
      </div>
      <div className="bg-primary text-primary-foreground rounded-md p-4 cursor-pointer" onClick={()=> router.push("/languageai/translate")}>
        <div className="flex items-center gap-2  text-2xl md:text-5xl mb-4">
          <IoLanguageOutline />
          <span>Translate</span>
        </div>
        <div className=" md:text-4xl">
          Is it better than Google Translate? Try with idioms.
        </div>
      </div>
      <div className="bg-primary text-primary-foreground rounded-md p-4 cursor-pointer" onClick={()=> router.push("/languageai/speech-to-text")}>
        <div className="flex items-center gap-2  text-2xl md:text-5xl mb-4">
          <AiTwotoneAudio />
          <span>Speech to Text</span>
        </div>
        <div className=" md:text-4xl">
          Embrace your freedom of speech. Pour your idea of thought.
        </div>
      </div>
      <div className="bg-primary text-primary-foreground rounded-md p-4 w-full cursor-pointer" onClick={()=> router.push("/languageai/text-to-speech")}>
        <div className="flex items-center gap-2  text-2xl md:text-5xl mb-4">
          <RiVoiceprintLine />
          <span>Text to Speech</span>
        </div>
        <audio controls className=" w-full">
          <source src="/tts.mp3" />
        </audio>
      </div>
    </div>
  );
};

export default LanguageaiHome;
