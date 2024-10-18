"use client";
import { useShallow } from "zustand/shallow";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { useCheckbotStore } from "../_stores/useCheckbotStore";
import CheckbotForm from "./CheckbotForm";
import CompletionTabs from "../../_components/CompletionTabs";

const CheckbotMobile = () => {
  const { completions } = useCheckbotStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <div className="lg:hidden flex-1">
      <PanelGroup direction="vertical">
        <Panel id="mobileFormPanel" order={1} defaultSize={50}>
          <CheckbotForm />
        </Panel>
        {completions.length > 0 && (
          <PanelResizeHandle className="bg-background py-2 flex items-center justify-center">
            <LuSeparatorHorizontal className="text-lg" />
          </PanelResizeHandle>
        )}
        {completions.length > 0 && (
          <Panel id="mobileCompletionPanel" order={2} defaultSize={50}>
            <CompletionTabs completions={completions} />
          </Panel>
        )}
      </PanelGroup>
    </div>
  );
};

export default CheckbotMobile;
