import { cn } from "@/lib/utils";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import DynamicDataChart from "@/app/(main)/bps/dynamic-data/_components/chart";
import { TBpsDynamicData } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";

type TDynamicDataChartExport = {
  elementRef: any;
  chart: EDynamicDataChart | undefined;
  dynamicData: TBpsDynamicData;
  datacontent: Record<string, string | number>[];
};

const DynamicDataChartExport = ({
  chart,
  dynamicData,
  datacontent,
  elementRef,
}: TDynamicDataChartExport) => {
  return (
    <div
      className="bg-foreground p-2 w-screen h-screen fixed top-0 right-0 -z-50"
      ref={elementRef}
    >
      <div className="mb-4">{dynamicData.var[0].label}</div>
      <div
        className={cn(
          "w-full mb-4",
          !chart || chart === EDynamicDataChart.Table
            ? "h-fit"
            : "h-full max-h-96 max-w-[800px]",
        )}
      >
        <DynamicDataChart data={datacontent} />
      </div>
      <div>Subject: {dynamicData.var[0].subj}</div>
      <div>Unit: {dynamicData.var[0].unit}</div>
    </div>
  );
};

export default DynamicDataChartExport;
