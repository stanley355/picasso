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

type TDynamicDataAreaChart = {
  data: Record<string, string | number>[];
};

const DynamicDataAreaChart = ({ data }: TDynamicDataAreaChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);

  return (
    <ResponsiveContainer className="aspect-square">
      <AreaChart data={data} className="w-full h-60">
        <XAxis dataKey={datacontentKeys.labelKey} />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        {datacontentKeys.valueKeys.map((valKey, index) => (
          <Area
            type="monotone"
            dataKey={valKey}
            key={valKey}
            stroke="#8884d8"
            fillOpacity={1}
            fill={index % 2 === 0 ? "#000000" : "#7366738"}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataAreaChart;
