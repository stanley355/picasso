import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TBpsDynamicData } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import DynamicDataSetting from "@/app/(main)/bps/dynamic-data/_components/setting";
import DynamicDataDisplaySetting from "@/app/(main)/bps/dynamic-data/_components/setting/DisplaySetting";

type TBpsDynamicDataTable = {
  baseDynamicData: TBpsDynamicData;
};

const BpsDynamicDataTabs = ({ baseDynamicData }: TBpsDynamicDataTable) => {
  return (
    <Tabs defaultValue="data">
      <TabsList>
        <TabsTrigger value="data">Data</TabsTrigger>
        <TabsTrigger value="display">Display</TabsTrigger>
      </TabsList>
      <TabsContent value="data">
        <DynamicDataSetting
          vervars={baseDynamicData.vervar}
          turvars={baseDynamicData.turvar}
          years={baseDynamicData.tahun}
          turyears={baseDynamicData.turtahun}
        />
      </TabsContent>
      <TabsContent value="display">
        <DynamicDataDisplaySetting />
      </TabsContent>
    </Tabs>
  );
};

export default BpsDynamicDataTabs;
