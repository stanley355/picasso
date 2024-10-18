import { useEffect, useState, memo } from "react";
import { LuCopy } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { cn } from "@/lib/utils";

type TCompletionTabs = {
  completions: string[];
};

const CompletionTabs = ({ completions }: TCompletionTabs) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // reset index if user reprompt
    if (completions.length > 0) {
      setActiveTab(activeTab);
    }
  }, [completions, setActiveTab]);

  return (
    <div className="w-full h-full p-2">
      <div className="flex gap-2 mb-2">
        {[...Array(completions.length)].map((_, index) => (
          <Button
            key={`completionTrigger${index}`}
            className="flex-1"
            variant={index === activeTab ? "secondary" : "ghost"}
            onClick={() => setActiveTab(index)}
          >
            Variant {index + 1}
          </Button>
        ))}
      </div>
      <div>
        {completions.map((completion, index) => (
          <div
            key={`completionContent${index}`}
            className={cn(
              "text-sm p-2 gap-2 overflow-auto",
              activeTab === index ? "flex " : "hidden",
            )}
          >
            <div className="flex-1">{completion}</div>
            <Button size="icon" onClick={() => copyToClipboard(completion)}>
              <LuCopy />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CompletionTabs);
