import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  YAxis,
} from "recharts";
import { parseDatacontentKeys } from "@/app/(main)/bps/dynamic-data/_stores/parseDatacontentKeys";
import DynamicDataTooltip from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTooltip";
import DynamicDataLegend from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLegend";
import {
  CHART_COLORS,
  EChartColor,
} from "@/app/(main)/bps/dynamic-data/_components/setting/constant";
import { useMemo } from "react";

type TDynamicDataAreaChart = {
  data: Record<string, string | number>[];
  chartColor: EChartColor;
  showLegend: boolean;
};

const DynamicDataAreaChart = ({
  data,
  chartColor,
  showLegend,
}: TDynamicDataAreaChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);
  const chartColorList = useMemo(
    () =>
      CHART_COLORS.find((colorItem) => colorItem.label === chartColor)
        ?.list as string[],
    [chartColor],
  );

  return (
    <ResponsiveContainer className="aspect-square w-full h-full max-h-96 md:max-h-full overflow-hidden">
      <AreaChart data={data}>
        <XAxis
          className="text-xs"
          dataKey={datacontentKeys.labelKey}
          tickFormatter={(value) => value.length > 5 ?  value.slice(0, 5) : value}
          tickLine={false}
        />
        <YAxis
          className="text-xs"
          allowDataOverflow
          width={30}
          tickFormatter={(value) => value.length > 5 ? value.toLocaleString("id-ID").slice(0, 5) : value}
        />
        <CartesianGrid vertical={false} />
        <Tooltip content={<DynamicDataTooltip />} />
        {datacontentKeys.valueKeys.map((valKey, index) => (
          <Area
            dataKey={valKey}
            key={valKey}
            stroke={chartColorList[index % 10]}
            fill={chartColorList[index % 10]}
            stackId={datacontentKeys.labelKey}
          />
        ))}
        {showLegend && <Legend content={<DynamicDataLegend />} />}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataAreaChart;
