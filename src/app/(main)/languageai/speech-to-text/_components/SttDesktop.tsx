
"use client";
import { useShallow } from "zustand/shallow";
import { useSttStore } from "../_stores/useSttStore";
import SttForm from "./SttForm";
import SttTranscription from "./SttTranscription";

const SttDesktop = () => {
  const { text, words, segments } = useSttStore(
    useShallow((state) => ({
      text: state.text,
      words: state.words,
      segments: state.segments,
    })),
  );

  return (
    <div className="hidden md:flex h-full">
      <div className="flex-1">
        <SttForm />
      </div>
      {text && (
        <div className="flex-1 max-w-[50%] border-l">
          <SttTranscription text={text} words={words} segments={segments} />
        </div>
      )}
    </div>
  );
};

export default SttDesktop;