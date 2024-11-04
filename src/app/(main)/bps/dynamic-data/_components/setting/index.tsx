"use client";
import DynamicDataRowColSetting from "@/app/(main)/bps/dynamic-data/_components/setting/RowColSetting";
import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";
import TurvarSetting from "@/app/(main)/bps/dynamic-data/_components/setting/TurvarSetting";
import { TDynamicDataHashmap } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import VervarSetting from "@/app/(main)/bps/dynamic-data/_components/setting/VervarSetting";

type TDynamicDataSetting = {
    vervars: TDynamicDataHashmap[];
  turvars: TDynamicDataHashmap[];
};

const DynamicDataSetting = ({ turvars, vervars }: TDynamicDataSetting) => {
  return (
    <div className="p-4">
      <DynamicDataRowColSetting />
      <DynamicDataChartSetting />
        <VervarSetting vervars={vervars} />
      <TurvarSetting turvars={turvars} />
      {/*<DynamicDataColorSetting />*/}
      {/*<DynamicDataLegendSetting />*/}
    </div>
  );
};

export default DynamicDataSetting;
