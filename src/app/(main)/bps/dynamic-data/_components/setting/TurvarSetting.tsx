"use client";
import {Label} from "@/components/ui/label";
import {TDynamicDataHashmap} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import {useMemo, memo, useState} from "react";
import dynamic from "next/dynamic";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

// https://github.com/JedWatson/react-select/issues/5459
const Select = dynamic(() => import("react-select"), {ssr: false});

type TTurvarSetting = {
    turvars: TDynamicDataHashmap[];
};

const TurvarSetting = ({turvars}: TTurvarSetting) => {
    const searchParams = useSearchParams();
    const turvarParams = searchParams.get("turvar");
    const router = useRouter();
    const pathname = usePathname();

    const [turvarValues, setTurvarValues] = useState(turvarParams ? turvarParams : "");

    const selectOptions = useMemo(() => {
        const options = turvars.map((turvar) => {
            return {
                value: turvar.val,
                label: turvar.label,
            };
        });
        return options;
    }, [turvars]);

    const defaultOptions = useMemo(() => {
        const options = turvars
            .map((turvar) => {
                return {
                    value: turvar.val,
                    label: turvar.label,
                    isDefault: turvarParams?.includes(String(turvar.val)),
                };
            })
            .filter((turvar) => turvar.isDefault);
        return options;
    }, [turvars, turvarParams]);

    const onValueChange = (newValue: unknown) => {
        const selectValues = newValue as { label: string; value: number }[];
        const newTurvarValues = selectValues.map((item) => item.value).join(";");
        setTurvarValues(newTurvarValues);
        return;
    };

    const onBlur = () => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("turvar", turvarValues);
        const newQueryString = urlParams.toString();
        router.push(`${pathname}?${newQueryString}`);
    };

    if (turvars.length === 1 && turvars[0].val === 0) {
        return null
    }

    return (
        <div className="mb-4 flex flex-col gap-2">
            <Label id="turvars">Sub wilayah </Label>
            <span className="text-xs text-slate-500">
            *Click area outside box to apply changes
            </span>
            <Select
                id="turvars"
                name="turvars"
                isMulti
                defaultValue={turvarParams ? defaultOptions : selectOptions}
                options={selectOptions}
                onChange={onValueChange}
                onBlur={onBlur}
                unstyled
                classNames={{
                    container: () => "border rounded-md text-sm",
                    control: () => "rounded-lg p-2",
                    menu: () => "border rounded-md",
                    option: () => "p-2 text-sm rounded-md",
                    clearIndicator: () => "mr-2",
                    multiValue: () => "mr-2",
                }}
            />
        </div>
    );
};

export default memo(TurvarSetting);
