import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const BpsDynamicDataTabs = () => {
    return (
        <Tabs>
            <TabsList>
                <TabsTrigger value="1">
                    Satu
                </TabsTrigger>
                <TabsTrigger value="2">
                    Satu
                </TabsTrigger>
            </TabsList>
            <TabsContent value="1">
                Satu
            </TabsContent>
            <TabsContent value="2">
                Dua
            </TabsContent>
        </Tabs>
    )
};

export default BpsDynamicDataTabs