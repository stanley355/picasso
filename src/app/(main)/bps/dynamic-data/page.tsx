import { Suspense } from "react";
import {
  fetchBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import DynamicDataNotFound from "@/app/(main)/bps/dynamic-data/_components/NotFound";
import DynamicDataSetting from "@/app/(main)/bps/dynamic-data/_components/setting";
import DynamicDataDisplay from "@/app/(main)/bps/dynamic-data/_components/display";
import DynamicDataLoading from "@/app/(main)/bps/dynamic-data/_components/loading";
import chart from "@/app/(main)/bps/dynamic-data/_components/chart";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";

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
  const dataIsAvailable = baseDynamicData["data-availability"] === "available";

  if (!dataIsAvailable) {
    return <DynamicDataNotFound />;
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="p-2 border-b">{baseDynamicData.var[0].label}</h1>
      <div className="flex flex-col md:grid grid-cols-2 h-full md:divide-x md:divide-x-border max-h-[75vh] md:max-h-none overflow-auto gap-8 md:gap-0">
        <Suspense fallback={<DynamicDataLoading />}>
          <DynamicDataDisplay searchParams={searchParams} />
        </Suspense>
        <DynamicDataSetting
          chart={searchParams.chart}
          vervars={baseDynamicData.vervar}
          turvars={baseDynamicData.turvar}
          years={baseDynamicData.tahun}
          turyears={baseDynamicData.turtahun}
        />
      </div>
    </div>
  );
};

export default BpsDynamicDataPage;
