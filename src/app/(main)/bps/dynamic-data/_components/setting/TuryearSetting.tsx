"use client";
import { Label } from "@/components/ui/label";
import { TDynamicDataHashmap } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { useMemo, memo, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// https://github.com/JedWatson/react-select/issues/5459
const Select = dynamic(() => import("react-select"), { ssr: false });

type TTuryearSetting = {
  turyears: TDynamicDataHashmap[];
};

const TuryearSetting = ({ turyears }: TTuryearSetting) => {
  const searchParams = useSearchParams();
  const turyearParams = searchParams.get("turth");
  const router = useRouter();
  const pathname = usePathname();

  const [turyearValues, setTuryearValues] = useState(
    turyearParams ? turyearParams : "",
  );

  const selectOptions = useMemo(() => {
    const options = turyears.map((turyear) => {
      return {
        value: turyear.val,
        label: turyear.label,
      };
    });
    return options;
  }, [turyears]);

  const defaultOptions = useMemo(() => {
    const options = turyears
      .map((turyear) => {
        return {
          value: turyear.val,
          label: turyear.label,
          isDefault: turyearParams?.includes(String(turyear.val)),
        };
      })
      .filter((turyear) => turyear.isDefault);
    return options;
  }, [turyears, turyearParams]);

  const onValueChange = (newValue: unknown) => {
    const selectValues = newValue as { label: string; value: number }[];
    const newTuryearValues = selectValues.map((item) => item.value).join(";");
    setTuryearValues(newTuryearValues);
    return;
  };

  const onBlur = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("turth", turyearValues);
    const newQueryString = urlParams.toString();
    router.replace(`${pathname}?${newQueryString}`);
  };

  if (turyears.length === 1 && turyears[0].val === 0) {
    return null;
  }

  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label id="turyears">Period</Label>
      <span className="text-xs text-slate-500">
        *Click area outside box to apply changes
      </span>
      <Select
        id="turyears"
        name="turyears"
        isMulti
        defaultValue={turyearParams ? defaultOptions : selectOptions}
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
            noOptionsMessage: () => "p-2"
        }}
      />
    </div>
  );
};

export default memo(TuryearSetting);
