import { useEffect, useState, memo } from "react";
import { LuCopy } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { cn } from "@/lib/utils";
import { TTranscriptionSegment, TTranscriptionWord } from "@/lib/api/author/types/TTranscription";
import SttWordTable from "./SttWordTable";
import SttSegmentTable from "./SttSegmentTable";

type TSttTranscription = {
  text: string;
  words: TTranscriptionWord[] | null,
  segments: TTranscriptionSegment[] | null
};

const SttTranscription = ({ text, words, segments }: TSttTranscription) => {
  const [showTimestamp, setShowTimestamp] = useState(false);

  useEffect(() => {
    // reset index if user reprompt
    if (text) {
      setShowTimestamp(false);
    }
  }, [text, setShowTimestamp]);

  return (
    <div className="w-full h-full p-2 flex flex-col">
      <div className="flex gap-2 mb-2">
        <Button
          className="flex-1"
          variant={showTimestamp ? "ghost" : "secondary"}
          onClick={() => setShowTimestamp(false)}
        >
          Transcription
        </Button>
        {(words || segments) && <Button
          className="flex-1"
          variant={showTimestamp ? "secondary" : "ghost"}
          onClick={() => setShowTimestamp(true)}
        >
          Timestamp
        </Button>}
      </div>
      <div className="flex-1 overflow-auto">
        <div className={cn(
          "text-sm p-2 gap-2",
          showTimestamp ? "hidden" : "flex",
        )}>
          <div className="flex-1">{text}</div>
          <Button size="icon" onClick={() => copyToClipboard(text)}>
            <LuCopy />
          </Button>
        </div>
        <div className={cn(
          "text-sm p-2 gap-2",
          showTimestamp ? "flex" : "hidden",
        )}>
          {words && <SttWordTable words={words} />}
          {segments && <SttSegmentTable segments={segments} />}
        </div>
      </div>
    </div>
  );
};

export default memo(SttTranscription);
