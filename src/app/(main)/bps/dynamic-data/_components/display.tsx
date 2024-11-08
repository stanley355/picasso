import {
  fetchBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { processBpsDynamicDataContent } from "@/lib/api/bps/dynamicData/processBpsDynamicDataContent";
import DynamicDataChart from "@/app/(main)/bps/dynamic-data/_components/chart";
import DynamicDataNotFound from "@/app/(main)/bps/dynamic-data/_components/NotFound";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import { cn } from "@/lib/utils";

type TDynamicDataDisplay = {
  searchParams: TBpsDynamicDataRequestParam & {
    isDefaultRowCol: "0" | "1" | undefined;
    chart: EDynamicDataChart | undefined;
  };
  defaultVervar: string;
};

const DynamicDataDisplay = async ({
  searchParams,
  defaultVervar,
}: TDynamicDataDisplay) => {
  const dynamicData = await fetchBpsDynamicData(
    {
      ...searchParams,
      vervar: searchParams.vervar ? searchParams.vervar : defaultVervar,
    },
    false,
  );
  const datacontent = processBpsDynamicDataContent(dynamicData, searchParams?.isDefaultRowCol === "1",);

  if (dynamicData["data-availability"] === "list-not-available") {
    return <DynamicDataNotFound />;
  }
  return (
    <div
      className={cn(
        "p-4 md:mb-0",
        !searchParams.chart || searchParams.chart === EDynamicDataChart.Table
          ? "mb-0"
          : "mb-12",
      )}
    >
      <div className="w-full h-full max-h-96 md:max-h-[75vh] mb-2 overflow-auto border rounded-lg p-2">
        <DynamicDataChart data={datacontent} />
      </div>
      <div className="text-sm mb-2 md:px-2">
        Subject: {dynamicData?.var?.length > 0 && dynamicData.var[0].subj}
      </div>
      <div className="text-sm md:px-2">
        Unit:{" "}
        {dynamicData?.var?.length > 0 && dynamicData?.var[0].unit
          ? dynamicData.var[0].unit
          : "Tidak ada"}
      </div>
    </div>
  );
};

export default DynamicDataDisplay;
