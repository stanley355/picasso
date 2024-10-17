import { useShallow } from "zustand/shallow";
import { LuCopy } from "react-icons/lu";
import { useTranslateStore } from "../_stores/useTranslateStore";

import Tabs from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";

const TranslateCompletions = () => {
  const { completions } = useTranslateStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <Tabs
      titles={completions.map((_, index) => `Variant ${index + 1}`)}
      contents={completions.map((completion, index) => (
        <div
          key={`completionContent${index}`}
          className="text-sm p-2 flex gap-2 overflow-auto"
        >
          <div className="flex-1">{completion}</div>
          <Button size="icon" onClick={() => copyToClipboard(completion)}>
            <LuCopy />
          </Button>
        </div>
      ))}
    />
  );
};

export default TranslateCompletions;
