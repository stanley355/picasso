"use client";
import { useSearchParams } from "next/navigation";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import DynamicDataTable from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTable";
import DynamicDataAreaChart from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataAreaChart";

type TDynamicDataChart = {
  data: Record<string, string | number>[];
};

const DynamicDataChart = ({ data }: TDynamicDataChart) => {
  const searchParams = useSearchParams();
  const chartType = searchParams.get("chart")
    ? (searchParams.get("chart") as EDynamicDataChart)
    : EDynamicDataChart.Table;

  switch (chartType) {
    case EDynamicDataChart.Area:
      return <DynamicDataAreaChart data={data} />;
    default:
      return <DynamicDataTable data={data} />;
  }
};

export default DynamicDataChart;
