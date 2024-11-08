import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";
import DynamicDataColorSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ColorSetting";
import DynamicDataLabelSetting from "@/app/(main)/bps/dynamic-data/_components/setting/LabelSetting";
import DynamicDataLegendSetting from "@/app/(main)/bps/dynamic-data/_components/setting/LegendSetting";
import DynamicDataSettingBtn from "@/app/(main)/bps/dynamic-data/_components/setting/DynamicDataSettingBtn";

const DynamicDataDisplaySetting = () => {
    return (
        <div className="p-2">
           <DynamicDataChartSetting />
            <DynamicDataColorSetting />
            <DynamicDataLegendSetting />
            <DynamicDataLabelSetting />
            <DynamicDataSettingBtn />
        </div>
    )
};

export default DynamicDataDisplaySetting