import React, { useMemo } from "react";
import { buttonVariants } from "@/components/ui/button";
import { TTextToSpeech } from "@/lib/api/author/types/TTextToSpeech";
import { RiVoiceprintLine } from "react-icons/ri";

type TTtsResult = {
  tts: TTextToSpeech;
};

const TtsResult = ({ tts }: TTtsResult) => {
  const fileUrl = useMemo(() => {
    const baseUrl = String(process.env.NEXT_PUBLIC_FILE_URL);
    return baseUrl + tts?.id + "." + tts?.response_format;
  }, [tts]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <RiVoiceprintLine className="text-lg" />
      <div>{tts?.id + "." + tts?.response_format}</div>
      <a href={fileUrl} target="_blank" className={buttonVariants({ variant: "default" })}>
        Click here to download
      </a>
    </div>
  );
};

export default TtsResult;
