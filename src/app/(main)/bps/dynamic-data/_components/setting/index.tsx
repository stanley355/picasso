import DynamicDataRowColSetting from "@/app/(main)/bps/dynamic-data/_components/setting/RowColSetting";
import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";
import DynamicDataColorSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ColorSetting";
import DynamicDataLegendSetting from "@/app/(main)/bps/dynamic-data/_components/setting/LegendSetting";

const DynamicDataSetting = () => {
  return (
    <div className="p-4">
      <DynamicDataRowColSetting />
      <DynamicDataChartSetting />
      <DynamicDataColorSetting />
      <DynamicDataLegendSetting />
    </div>
  );
};

export default DynamicDataSetting;
