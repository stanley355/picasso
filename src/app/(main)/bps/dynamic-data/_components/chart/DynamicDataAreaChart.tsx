import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
} from "recharts";
import { parseDatacontentKeys } from "@/app/(main)/bps/dynamic-data/_stores/parseDatacontentKeys";
import { stringToColor } from "@/lib/stringToColor";
import DynamicDataTooltip from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTooltip";
import DynamicDataLegend from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLegend";

type TDynamicDataAreaChart = {
  data: Record<string, string | number>[];
};

const DynamicDataAreaChart = ({ data }: TDynamicDataAreaChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);

  return (
    <ResponsiveContainer className="aspect-square w-full h-full max-h-96 md:max-h-full overflow-hidden">
      <AreaChart
        data={data}
        margin={{ left: 25, right: 25 }}
      >
        <XAxis
          className="text-xs"
          dataKey={datacontentKeys.labelKey}
          tickFormatter={(value) => value.slice(0, 4)}
        />
        <CartesianGrid vertical={false} />
        <Tooltip content={<DynamicDataTooltip />} />
        {datacontentKeys.valueKeys.map((valKey) => (
          <Area
            dataKey={valKey}
            key={valKey}
            stroke={stringToColor(valKey)}
            fill={stringToColor(valKey)}
            stackId={datacontentKeys.labelKey}
          />
        ))}
        <Legend content={<DynamicDataLegend />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataAreaChart;
