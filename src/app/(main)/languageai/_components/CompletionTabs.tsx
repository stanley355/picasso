import {memo, useEffect, useState} from "react";
import {LuCopy} from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {copyToClipboard} from "@/lib/copyToClipboard";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";

type TCompletionTabs = {
    completions: string[];
};

const CompletionTabs = ({completions}: TCompletionTabs) => {
    const [activeTab, setActiveTab] = useState(`completion_0`);

    useEffect(() => {
        if (completions.length> 0) {
            setActiveTab(`completion_0`)
        }
    }, [completions]);

    return (
        <div className="w-full h-full p-2">
            <Tabs defaultValue={`completion_0`} value={activeTab} onValueChange={value => setActiveTab(value)}>
                <TabsList >
                    {[...Array.from({length: completions.length})].map((_, index) =>
                        <TabsTrigger value={`completion_${index}`} key={`completionTrigger_${index}`}>
                            Variant {index + 1}
                        </TabsTrigger>
                    )}
                </TabsList>
                {completions.map((completion, index) => (
                    <TabsContent
                        key={`completionContent${index}`}
                        value={`completion_${index}`}
                    >
                        <div className="p-2 border flex rounded-md overflow-auto max-h-[75vh]">
                            <div className="flex-1">{completion}</div>
                            <Button size="icon" onClick={() => copyToClipboard(completion)}>
                                <LuCopy/>
                            </Button>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default memo(CompletionTabs);
