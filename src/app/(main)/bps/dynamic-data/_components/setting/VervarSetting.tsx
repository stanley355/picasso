"use client";
import { Label } from "@/components/ui/label";
import { TDynamicDataHashmap } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { useMemo, memo, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// https://github.com/JedWatson/react-select/issues/5459
const Select = dynamic(() => import("react-select"), { ssr: false });

type TVervarSetting = {
  vervars: TDynamicDataHashmap[];
};

const VervarSetting = ({ vervars }: TVervarSetting) => {
  const searchParams = useSearchParams();
  const vervarParams = searchParams.get("vervar") as string
  const router = useRouter();
  const pathname = usePathname();

  const [vervarValues, setVervarValues] = useState(vervarParams);

  const selectOptions = useMemo(() => {
    const options = vervars.map((vervar) => {
      return {
        value: vervar.val,
        label: vervar.label,
      };
    });
    return options;
  }, [vervars]);

  const defaultOptions = useMemo(() => {
    const options = vervars
      .map((vervar) => {
        return {
          value: vervar.val,
          label: vervar.label,
          isDefault: vervarParams?.includes(String(vervar.val)),
        };
      });

    if (vervarParams) {
        return options.filter((vervar) => vervar.isDefault);
    }

    return [options[0]];
  }, [vervars, vervarParams]);
    console.log(defaultOptions)

  const onValueChange = (newValue: unknown) => {
    const selectValues = newValue as { label: string; value: number }[];
    const newVervarValues = selectValues.map((item) => item.value).join(";");
    setVervarValues(newVervarValues);
    return;
  };

  const onBlur = () => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("vervar", vervarValues);
    const newQueryString = urlParams.toString();
    router.replace(`${pathname}?${newQueryString}`);
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <Label id="turvars">Domain</Label>
      <span className="text-xs text-slate-500">
        *Click area outside box to apply changes
      </span>
      <Select
        id="turvars"
        name="turvars"
        isMulti
        defaultValue={defaultOptions}
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

export default memo(VervarSetting);
