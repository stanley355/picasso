import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { parseDatacontentKeys } from "@/app/(main)/bps/dynamic-data/_stores/parseDatacontentKeys";
import {stringToColor} from "@/lib/stringToColor";

type TDynamicDataAreaChart = {
  data: Record<string, string | number>[];
};

const DynamicDataAreaChart = ({ data }: TDynamicDataAreaChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);

  return (
    <ResponsiveContainer className="aspect-square w-full h-60">
      <AreaChart data={data}>
        <XAxis dataKey={datacontentKeys.labelKey} />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        {datacontentKeys.valueKeys.map((valKey) => (
          <Area
            type="monotone"
            dataKey={valKey}
            key={valKey}
            stroke={stringToColor(valKey)}
            fill={stringToColor(valKey)}
            stackId={datacontentKeys.labelKey}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataAreaChart;
