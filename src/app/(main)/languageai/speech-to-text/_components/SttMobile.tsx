
"use client";
import { useShallow } from "zustand/shallow";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LuSeparatorHorizontal } from "react-icons/lu";
import SttForm from "./SttForm";
import { useSttStore } from "../_stores/useSttStore";

const SttMobile = () => {
  const { text } = useSttStore(
    useShallow((state) => ({
      text: state.text
    })),
  );

  return (
    <div className="md:hidden flex-1">
      <PanelGroup direction="vertical">
        <Panel id="mobileFormPanel" order={1} defaultSize={50}>
          <SttForm />
        </Panel>
        {text && (
          <PanelResizeHandle className="bg-background py-2 flex items-center justify-center">
            <LuSeparatorHorizontal className="text-lg" />
          </PanelResizeHandle>
        )}
        {text && (
          <Panel id="mobileCompletionPanel" order={2} defaultSize={50}>
            {text}
          </Panel>
        )}
      </PanelGroup>
    </div>
  );
};

export default SttMobile;
