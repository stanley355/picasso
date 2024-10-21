"use client";
import { Panel, PanelGroup } from "react-resizable-panels";
import TtsForm from "./TtsForm";

const TtsMobile = () => {
  return (
    <div className="md:hidden flex-1">
      <PanelGroup direction="vertical">
        <Panel id="mobileFormPanel" order={1} defaultSize={50}>
          <TtsForm />
        </Panel>
        {/* {text && (
          <PanelResizeHandle className="bg-background py-2 flex items-center justify-center">
            <LuSeparatorHorizontal className="text-lg" />
          </PanelResizeHandle>
        )} */}
        {/* {text && (
          <Panel id="mobileCompletionPanel" order={2} defaultSize={50}>
            <SttTranscription text={text} words={words} segments={segments} />
          </Panel>
        )} */}
      </PanelGroup>
    </div>
  );
};

export default TtsMobile;
