import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
  LabelList,
} from "recharts";
import { parseDatacontentKeys } from "@/app/(main)/bps/dynamic-data/_stores/parseDatacontentKeys";
import DynamicDataTooltip from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTooltip";
import DynamicDataLegend from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLegend";
import {
  CHART_COLORS,
  EChartColor,
} from "@/app/(main)/bps/dynamic-data/_components/setting/constant";
import { useMemo } from "react";

type TDynamicDataLineChart = {
  data: Record<string, string | number>[];
  chartColor: EChartColor;
  showLegend: boolean;
  showLabel: boolean;
};

const DynamicDataLineChart = ({
  data,
  chartColor,
  showLegend,
  showLabel,
}: TDynamicDataLineChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);
  const chartColorList = useMemo(
    () =>
      CHART_COLORS.find((colorItem) => colorItem.label === chartColor)
        ?.list as string[],
    [chartColor],
  );

  return (
    <ResponsiveContainer className="aspect-square w-full h-full max-h-96 md:max-h-full overflow-hidden">
      <LineChart data={data}>
        <XAxis
          className="text-xs"
          dataKey={datacontentKeys.labelKey}
          tickFormatter={(value) => value.slice(0, 4)}
        />
        <CartesianGrid vertical={false} />
        <Tooltip content={<DynamicDataTooltip />} />
        {datacontentKeys.valueKeys.map((valKey, index) => (
          <Line
            key={valKey}
            dataKey={valKey}
            stroke={chartColorList[index % 10]}
          >
            {showLabel && (
              <LabelList className="fill-text text-xs" position="top" />
            )}
          </Line>
        ))}
        {showLegend && <Legend content={<DynamicDataLegend />} />}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataLineChart;