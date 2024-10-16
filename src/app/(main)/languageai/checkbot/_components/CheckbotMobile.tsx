"use client";
import { useShallow } from "zustand/shallow";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { useCheckbotStore } from "../_stores/useCheckbotStore";
import CheckbotForm from "./CheckbotForm";
import CheckbotCompletions from "./CheckbotCompletions";

const CheckbotMobile = () => {
  const { completions } = useCheckbotStore(
    useShallow((state) => ({
      completions: state.completions
    })),
  );

  return (
    <PanelGroup direction="vertical">
      <Panel id="mobileFormPanel" order={1} defaultSize={50} >
        <CheckbotForm />
      </Panel>
      {completions.length > 0 &&
        <PanelResizeHandle className="bg-foreground text-background py-2 flex items-center justify-center">
          <LuSeparatorHorizontal className="text-lg" />
        </PanelResizeHandle >
      }
      {completions.length > 0 && <Panel id="mobileCompletionPanel" order={2} defaultSize={50}  >
        <CheckbotCompletions />
      </Panel>}
    </PanelGroup>
  );
};

export default CheckbotMobile;
