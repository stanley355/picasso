import { Suspense } from "react";
import {
  fetchBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import DynamicDataNotFound from "@/app/(main)/bps/dynamic-data/_components/NotFound";
import DynamicDataDisplay from "@/app/(main)/bps/dynamic-data/_components/display";
import DynamicDataLoading from "@/app/(main)/bps/dynamic-data/_components/loading";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import BpsDynamicDataHeader from "@/app/(main)/bps/dynamic-data/_components/header";
import { createDefaultVervarVal } from "@/app/(main)/bps/dynamic-data/_stores/createDefaultVervarVal";
import BpsDynamicDataTabs from "@/app/(main)/bps/dynamic-data/_components/Tabs";

type TBpsDynamicDataPage = {
  searchParams: TBpsDynamicDataRequestParam & {
    isDefaultRowCol: "0" | "1" | undefined;
    chart: EDynamicDataChart | undefined;
  };
};

const BpsDynamicDataPage = async ({ searchParams }: TBpsDynamicDataPage) => {
  const baseDynamicData = await fetchBpsDynamicData(
    {
      domain: searchParams.domain,
      var: searchParams.var,
    },
    true,
  );
  const defaultVervar = createDefaultVervarVal(baseDynamicData.vervar);

  if (baseDynamicData["data-availability"] === "list-not-available") {
    return <DynamicDataNotFound />;
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <BpsDynamicDataHeader title={baseDynamicData.var[0].label} />
      <div className="flex flex-col md:grid grid-cols-2 h-full max-h-[80vh] md:max-h-none overflow-auto">
        <Suspense fallback={<DynamicDataLoading />}>
          <DynamicDataDisplay
            searchParams={searchParams}
            defaultVervar={defaultVervar}
          />
        </Suspense>
        <div className="p-4">
          <BpsDynamicDataTabs
            baseDynamicData={baseDynamicData}
            defaultVervar={defaultVervar}
            searchParams={searchParams}
          />
        </div>
      </div>
    </div>
  );
};

export default BpsDynamicDataPage;
