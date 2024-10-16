import { useCheckbotStore } from "../_stores/useCheckbotStore";
import { useShallow } from "zustand/shallow";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
    <Tabs className="h-full" defaultValue="completion0">
      <TabsList className="w-full rounded-none gap-1 mb-2">
        {completions.map((_, index) => (
          <TabsTrigger
            value={`completion${index}`}
            key={`completionTrigger${index}`}
            className="rounded-md"
          >
            Variant {index + 1}
          </TabsTrigger>
        ))}
      </TabsList>
      {completions.map((completion, index) => (
        <TabsContent
          value={`completion${index}`}
          key={`completionContent${index}`}
          className="text-sm flex gap-1 pr-2"
        >
          <div className="flex-1 px-2">{completion}</div>
          <Button size="icon" onClick={() => copyToClipboard(completion)}>
            <LuCopy />
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CheckbotCompletions;
