"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuAreaChart, LuTable } from "react-icons/lu";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {EDynamicDataChart} from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import {Label} from "@/components/ui/label";

const DynamicDataChartSetting = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname()
  const defaultChart = searchParams.get("chart")

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
      defaultValue={defaultChart ? defaultChart as EDynamicDataChart : EDynamicDataChart.Table}
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
      </SelectContent>
    </Select>
      </div>
  );
};

export default DynamicDataChartSetting;
