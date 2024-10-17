import { useCheckbotStore } from "../_stores/useCheckbotStore";
import { useShallow } from "zustand/shallow";
import Tabs from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";

const CheckbotCompletions = () => {
  const { completions } = useCheckbotStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <Tabs
      titles={completions.map((_, index) => `Variant ${index + 1}`)}
      contents={
        completions.map((completion, index) => (
          <div
            key={`completionContent${index}`}
            className="text-sm p-2 flex gap-2 overflow-auto"
          >
            <div className="flex-1">{completion}</div>
            <Button size="icon" onClick={() => copyToClipboard(completion)}>
              <LuCopy />
            </Button>
          </div>
        ))
      }
    />
  );
};

export default CheckbotCompletions;
