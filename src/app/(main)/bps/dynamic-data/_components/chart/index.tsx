"use client";
import { memo } from "react";
import { useSearchParams } from "next/navigation";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import DynamicDataTable from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTable";
import DynamicDataAreaChart from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataAreaChart";
import DynamicDataBarChart from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataBarChart";
import DynamicDataBarStackChart from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataBarStackChart";
import DynamicDataLineChart from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLineChart";
import { EChartColor } from "@/app/(main)/bps/dynamic-data/_components/setting/constant";

type TDynamicDataChart = {
  data: Record<string, string | number>[];
};

const DynamicDataChart = ({ data }: TDynamicDataChart) => {
  const searchParams = useSearchParams();
  const chartType = searchParams.get("chart")
    ? (searchParams.get("chart") as EDynamicDataChart)
    : EDynamicDataChart.Table;
  const chartColor = searchParams.get("chartColor")
    ? (searchParams.get("chartColor") as EChartColor)
    : EChartColor.Combination;
  const showLegend = searchParams.get("showLegend")
    ? searchParams.get("showLegend") === "1"
    : false;
  const showLabel = searchParams.get("showLabel")
    ? searchParams.get("showLabel") === "1"
    : false;

  switch (chartType) {
    case EDynamicDataChart.Area:
      return (
        <DynamicDataAreaChart
          data={data}
          chartColor={chartColor}
          showLegend={showLegend}
        />
      );
    case EDynamicDataChart.Bar:
      return (
        <DynamicDataBarChart
          data={data}
          chartColor={chartColor}
          showLegend={showLegend}
          showLabel={showLabel}
        />
      );
    case EDynamicDataChart.BarStack:
      return (
        <DynamicDataBarStackChart
          data={data}
          chartColor={chartColor}
          showLegend={showLegend}
          showLabel={showLabel}
        />
      );
    case EDynamicDataChart.Line:
      return (
        <DynamicDataLineChart
          data={data}
          chartColor={chartColor}
          showLegend={showLegend}
          showLabel={showLabel}
        />
      );
    default:
      return <DynamicDataTable data={data} />;
  }
};

export default memo(DynamicDataChart);
