"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import TtsForm from "./TtsForm";
import { useTtsStore } from "../_stores/useTtsStore";
import { useShallow } from "zustand/shallow";
import { LuSeparatorHorizontal } from "react-icons/lu";
import TtsResult from "./TtsResult";

const TtsMobile = () => {
  const { tts } = useTtsStore(
    useShallow((state) => ({
      tts: state.tts,
    })),
  );

  return (
    <div className="md:hidden flex-1">
      <PanelGroup direction="vertical">
        <Panel id="mobileFormPanel" order={1} defaultSize={50}>
          <TtsForm />
        </Panel>
        {tts && (
          <PanelResizeHandle className="bg-background py-2 flex items-center justify-center">
            <LuSeparatorHorizontal className="text-lg" />
          </PanelResizeHandle>
        )}
        {tts && (
          <Panel id="mobileCompletionPanel" order={2} defaultSize={50}>
            <TtsResult tts={tts} />
          </Panel>
        )}
      </PanelGroup>
    </div>
  );
};

export default TtsMobile;
