import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import DynamicDataSetting from "@/app/(main)/bps/dynamic-data/_components/setting";
import DynamicDataDisplaySetting from "@/app/(main)/bps/dynamic-data/_components/setting/DisplaySetting";
import DynamicDataExport from "@/app/(main)/bps/dynamic-data/_components/export";
import DynamicDataLoading from "@/app/(main)/bps/dynamic-data/_components/loading";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";

type TBpsDynamicDataTable = {
  searchParams: TBpsDynamicDataRequestParam & {
    isDefaultRowCol: "0" | "1" | undefined;
    chart: EDynamicDataChart | undefined;
  };
  defaultVervar: string;
  baseDynamicData: TBpsDynamicData;
};

const BpsDynamicDataTabs = ({
  baseDynamicData,
  searchParams,
  defaultVervar,
}: TBpsDynamicDataTable) => {
  return (
    <Tabs defaultValue="data">
      <TabsList>
        <TabsTrigger value="data">Data</TabsTrigger>
        <TabsTrigger value="display">Display</TabsTrigger>
        <TabsTrigger value="export">Export</TabsTrigger>
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
      <TabsContent value="export">
        <Suspense fallback={<DynamicDataLoading />}>
          <DynamicDataExport
            defaultVervar={defaultVervar}
            searchParams={searchParams}
          />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

export default BpsDynamicDataTabs;
