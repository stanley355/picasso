"use client";
import { useShallow } from "zustand/shallow";
import { useTtsStore } from "../_stores/useTtsStore";
import TtsForm from "./TtsForm";
import TtsResult from "./TtsResult";

const TtsDesktop = () => {
  const { tts } = useTtsStore(
    useShallow((state) => ({
      tts: state.tts,
    })),
  );

  return (
    <div className="hidden md:flex h-full">
      <div className="flex-1">
        <TtsForm />
      </div>
      {tts && (
        <div className="flex-1 max-w-[50%] border-l">
          <TtsResult tts={tts} />
        </div>
      )}
    </div>
  );
};

export default TtsDesktop;
