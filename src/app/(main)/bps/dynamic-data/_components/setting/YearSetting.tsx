"use client";
import { Label } from "@/components/ui/label";
import { TDynamicDataHashmap } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { useMemo, memo, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// https://github.com/JedWatson/react-select/issues/5459
const Select = dynamic(() => import("react-select"), { ssr: false });

type TTimeSetting = {
  years: TDynamicDataHashmap[];
};

const YearSetting = ({ years }: TTimeSetting) => {
  const searchParams = useSearchParams();
  const yearParams = searchParams.get("th");
  const router = useRouter();
  const pathname = usePathname();

  const [yearValues, setTimeValues] = useState(yearParams ? yearParams : "");

  const selectOptions = useMemo(() => {
    const options = years.map((year) => {
      return {
        value: year.val,
        label: year.label,
      };
    });
    return options;
  }, [years]);

  const defaultOptions = useMemo(() => {
    const options = years
      .map((year) => {
        return {
          value: year.val,
          label: year.label,
          isDefault: yearParams?.includes(String(year.val)),
        };
      })
      .filter((year) => year.isDefault);
    return options;
  }, [years, yearParams]);

  const onValueChange = (newValue: unknown) => {
    const selectValues = newValue as { label: string; value: number }[];
    const newTimeValues = selectValues.map((item) => item.value).join(";");
    setTimeValues(newTimeValues);
    return;
  };

  const onBlur = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("th", yearValues);
    const newQueryString = urlParams.toString();
    router.replace(`${pathname}?${newQueryString}`);
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label id="years">Year</Label>
      <span className="text-xs text-slate-500">
        *Click area outside box to apply changes
      </span>
      <Select
        id="years"
        name="years"
        isMulti
        defaultValue={yearParams ? defaultOptions : selectOptions}
        options={selectOptions}
        onChange={onValueChange}
        onBlur={onBlur}
        unstyled
        classNames={{
          container: () => "border rounded-md text-sm",
          control: () => "rounded-lg p-2",
          menu: () => "border rounded-md bg-foreground",
          option: () => "p-2 text-sm rounded-md",
          clearIndicator: () => "mr-2",
          multiValue: () => "mr-2",
        }}
      />
    </div>
  );
};

export default memo(YearSetting);
