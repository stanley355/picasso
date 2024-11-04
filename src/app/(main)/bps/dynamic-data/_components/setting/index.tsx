'use client'
import DynamicDataRowColSetting from "@/app/(main)/bps/dynamic-data/_components/setting/RowColSetting";
import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";
import TurvarSetting from "@/app/(main)/bps/dynamic-data/_components/setting/TurvarSetting";
import {TDynamicDataHashmap} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";

type TDynamicDataSetting = {
    turvars: TDynamicDataHashmap[]
}

const DynamicDataSetting = ({turvars}: TDynamicDataSetting) => {


  return (
    <div className="p-4">
      <DynamicDataRowColSetting />
      <DynamicDataChartSetting />
        <TurvarSetting turvars={turvars} />
      {/*<DynamicDataColorSetting />*/}
      {/*<DynamicDataLegendSetting />*/}
    </div>
  );
};

export default DynamicDataSetting;
