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
import { stringToColor } from "@/lib/stringToColor";
import DynamicDataTooltip from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTooltip";
import DynamicDataLegend from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataLegend";

type TDynamicDataBarChart = {
  data: Record<string, string | number>[];
};

const DynamicDataBarChart = ({ data }: TDynamicDataBarChart) => {
  const datacontentKeys = parseDatacontentKeys(data[0]);

  return (
    <ResponsiveContainer className="aspect-square w-full h-full max-h-96 md:max-h-full overflow-hidden">
      <BarChart data={data} >
        <XAxis
          className="text-xs"
          dataKey={datacontentKeys.labelKey}
          tickFormatter={(value) => value.slice(0, 4)}
        />
        <CartesianGrid vertical={false} />
        <Tooltip content={<DynamicDataTooltip />} />
        {datacontentKeys.valueKeys.map((valKey) => (
          <Bar key={valKey} dataKey={valKey} fill={stringToColor(valKey)} />
        ))}
        <Legend content={<DynamicDataLegend />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DynamicDataBarChart;
