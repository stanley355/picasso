import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { parseDatacontentKeys } from "@/app/(main)/bps/dynamic-data/_stores/parseDatacontentKeys";
import DynamicDataTooltip from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTooltip";
import DynamicDataLegend from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLegend";
import {
  CHART_COLORS,
  EChartColor,
} from "@/app/(main)/bps/dynamic-data/_components/setting/constant";
import { useMemo } from "react";

type TDynamicDataBarChart = {
  data: Record<string, string | number>[];
  chartColor: EChartColor;
  showLegend: boolean;
};

const DynamicDataBarStackChart = ({
  data,
  chartColor,
  showLegend,
}: TDynamicDataBarChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);
  const chartColorList = useMemo(
    () =>
      CHART_COLORS.find((colorItem) => colorItem.label === chartColor)
        ?.list as string[],
    [chartColor],
  );

  return (
    <ResponsiveContainer className="aspect-square w-full h-full max-h-96 md:max-h-full overflow-hidden">
      <BarChart data={data}>
        <XAxis
          className="text-xs"
          dataKey={datacontentKeys.labelKey}
          tickFormatter={(value) => value.slice(0, 4)}
        />
        <CartesianGrid vertical={false} />
        <Tooltip content={<DynamicDataTooltip />} />
        {datacontentKeys.valueKeys.map((valKey, index) => (
          <Bar
            key={valKey}
            dataKey={valKey}
            fill={chartColorList[index % 10]}
            stackId={datacontentKeys.labelKey}
          />
        ))}
        {showLegend && <Legend content={<DynamicDataLegend />} />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataBarStackChart;
