import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    CartesianGrid,
    Tooltip,
    Line,
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
            <LineChart data={data} >
                <XAxis
                    className="text-xs"
                    dataKey={datacontentKeys.labelKey}
                    tickFormatter={(value) => value.slice(0, 4)}
                />
                <CartesianGrid vertical={false} />
                <Tooltip content={<DynamicDataTooltip />} />
                {datacontentKeys.valueKeys.map((valKey) => (
                    <Line key={valKey} dataKey={valKey} stroke={stringToColor(valKey)} />
                ))}
                <Legend content={<DynamicDataLegend />} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default DynamicDataBarChart;
