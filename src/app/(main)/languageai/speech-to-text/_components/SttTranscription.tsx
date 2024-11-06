import { useEffect, useState, memo } from "react";
import { LuCopy } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import {
  TTranscriptionSegment,
  TTranscriptionWord,
} from "@/lib/api/author/types/TTranscription";
import SttWordTable from "./SttWordTable";
import SttSegmentTable from "./SttSegmentTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TSttTranscription = {
  text: string;
  words: TTranscriptionWord[] | null;
  segments: TTranscriptionSegment[] | null;
};

const SttTranscription = ({ text, words, segments }: TSttTranscription) => {
  const [showTimestamp, setShowTimestamp] = useState("0");

  useEffect(() => {
    // reset index if user reprompt
    if (text) {
      setShowTimestamp("0");
    }
  }, [text, setShowTimestamp]);

  return (
    <div className="w-full h-full p-2">
      <Tabs
        defaultValue={"0"}
        value={showTimestamp}
        onValueChange={(value) => setShowTimestamp(value)}
      >
        <TabsList>
          <TabsTrigger value="0">Transcription</TabsTrigger>
          {(words || segments) && (
            <TabsTrigger value="1">Timestamp</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="0">
          <div className="gap-2 flex max-h-[75vh] overflow-auto border p-2">
            <div className="flex-1">{text}</div>
            <Button size="icon" onClick={() => copyToClipboard(text)}>
              <LuCopy />
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="1">
          <div className="gap-2 flex max-h-[75vh] overflow-auto">
            {words && <SttWordTable words={words} />}
            {segments && <SttSegmentTable segments={segments} />}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default memo(SttTranscription);
