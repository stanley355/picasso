import DynamicDataRowColSetting from "@/app/(main)/bps/dynamic-data/_components/setting/RowColSetting";
import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";

const DynamicDataSetting = () => {
  return (
    <div className="p-4">
      <DynamicDataRowColSetting />
        <DynamicDataChartSetting />
    </div>
  );
};

export default DynamicDataSetting;
