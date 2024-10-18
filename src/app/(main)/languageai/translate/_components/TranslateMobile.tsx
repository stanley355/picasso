"use client";
import { useShallow } from "zustand/shallow";
import { LuSeparatorHorizontal } from "react-icons/lu";
import { useTranslateStore } from "../_stores/useTranslateStore";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import TranslateForm from "./TranslateForm";
import CompletionTabs from "../../_components/CompletionTabs";

const TranslateMobile = () => {
  const { completions } = useTranslateStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <div className="h-full lg:hidden">
      <PanelGroup direction="vertical">
        <Panel id="mobileFormPanel" order={1} defaultSize={50}>
          <TranslateForm />
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

export default TranslateMobile;
