'use client'
import {Label} from "@/components/ui/label";
import {CHART_COLORS, EChartColor} from "@/app/(main)/bps/dynamic-data/_components/setting/constant";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/lib/utils";

const DynamicDataColorSetting = () => {
    const searchParams = useSearchParams();
    const defaultChartColor = searchParams.get("chartColor") ? searchParams.get("chartColor") as EChartColor : EChartColor.Combination
    const router = useRouter();
    const pathname = usePathname();

    const onClick = (value: EChartColor) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("chartColor", value);
        const newQueryString = urlParams.toString();
        router.push(`${pathname}?${newQueryString}`);
    };

    return (
        <div>
            <Label>Chart color: </Label>
            <div className="grid grid-cols-4 gap-x-8 gap-y-4 mt-4 w-fit">
                {CHART_COLORS.map((color) =>
                    <button key={color.label}
                            type="button"
                            onClick={()=> onClick(color.label)}
                         className={cn("grid grid-cols-2 w-fit group hover:rotate-45 border hover:rounded-full shadow-lg bg-transparent",
                             {"rotate-45 rounded-full": color.label === defaultChartColor})}>
                        <div style={{backgroundColor: color.list[0]}}
                             className={cn("w-4 h-4 group-hover:rounded-tl-full", {"rounded-tl-full": color.label === defaultChartColor})}/>
                        <div style={{backgroundColor: color.list[1]}}
                             className={cn("w-4 h-4 group-hover:rounded-tr-full", {"rounded-tr-full": color.label === defaultChartColor})}/>
                        <div style={{backgroundColor: color.list[5]}}
                             className={cn("w-4 h-4 group-hover:rounded-bl-full", {"rounded-bl-full": color.label === defaultChartColor})}/>
                        <div style={{backgroundColor: color.list[9]}}
                             className={cn("w-4 h-4 group-hover:rounded-br-full", {"rounded-br-full": color.label === defaultChartColor})}/>
                    </button>)}
            </div>
        </div>
    )
};

export default DynamicDataColorSetting;