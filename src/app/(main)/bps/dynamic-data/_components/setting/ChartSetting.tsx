"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuAreaChart, LuBarChart, LuLineChart, LuTable } from "react-icons/lu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import { Label } from "@/components/ui/label";

const DynamicDataChartSetting = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const defaultChart = searchParams.get("chart")
    ? (searchParams.get("chart") as EDynamicDataChart)
    : EDynamicDataChart.Table;

  const onValueChange = (value: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("chart", value);
    const newQueryString = urlParams.toString();
    router.push(`${pathname}?${newQueryString}`);
  };

  return (
    <div className="mb-4">
      <Label>Chart Type</Label>
      <Select
        name="display"
        defaultValue={defaultChart}
        onValueChange={onValueChange}
      >
        <SelectTrigger id="display" className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={EDynamicDataChart.Table}>
            <div className="flex gap-2 items-center">
              <LuTable />
              {EDynamicDataChart.Table}
            </div>
          </SelectItem>
          <SelectItem value={EDynamicDataChart.Area} className="gap-2">
            <div className="flex gap-2 items-center">
              <LuAreaChart />
              {EDynamicDataChart.Area}
            </div>
          </SelectItem>
          <SelectItem value={EDynamicDataChart.Bar} className="gap-2">
            <div className="flex gap-2 items-center">
              <LuBarChart />
              {EDynamicDataChart.Bar}
            </div>
          </SelectItem>
          <SelectItem value={EDynamicDataChart.BarStack} className="gap-2">
            <div className="flex gap-2 items-center">
              <LuBarChart />
              {EDynamicDataChart.BarStack}
            </div>
          </SelectItem>
          <SelectItem value={EDynamicDataChart.Line} className="gap-2">
            <div className="flex gap-2 items-center">
              <LuLineChart />
              {EDynamicDataChart.Line}
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DynamicDataChartSetting;
