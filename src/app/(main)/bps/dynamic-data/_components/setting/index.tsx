"use client";
import DynamicDataRowColSetting from "@/app/(main)/bps/dynamic-data/_components/setting/RowColSetting";
import DynamicDataChartSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ChartSetting";
import TurvarSetting from "@/app/(main)/bps/dynamic-data/_components/setting/TurvarSetting";
import { TDynamicDataHashmap } from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import VervarSetting from "@/app/(main)/bps/dynamic-data/_components/setting/VervarSetting";
import YearSetting from "@/app/(main)/bps/dynamic-data/_components/setting/YearSetting";
import DynamicDataColorSetting from "@/app/(main)/bps/dynamic-data/_components/setting/ColorSetting";
import DynamicDataLegendSetting from "@/app/(main)/bps/dynamic-data/_components/setting/LegendSetting";
import TuryearSetting from "@/app/(main)/bps/dynamic-data/_components/setting/TuryearSetting";
import DynamicDataLabelSetting from "@/app/(main)/bps/dynamic-data/_components/setting/LabelSetting";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import { cn } from "@/lib/utils";
import DynamicDataShareBtn from "@/app/(main)/bps/dynamic-data/_components/setting/DynamicDataSettingBtn";
import DynamicDataSettingBtn from "@/app/(main)/bps/dynamic-data/_components/setting/DynamicDataSettingBtn";

type TDynamicDataSetting = {
  vervars: TDynamicDataHashmap[];
  turvars: TDynamicDataHashmap[];
  years: TDynamicDataHashmap[];
  turyears: TDynamicDataHashmap[];
};

const DynamicDataSetting = ({
  turvars,
  vervars,
  years,
  turyears,
}: TDynamicDataSetting) => {
  return (
    <div className="p-2">
      <DynamicDataRowColSetting />
      <VervarSetting vervars={vervars} />
      <TurvarSetting turvars={turvars} />
      <YearSetting years={years} />
      <TuryearSetting turyears={turyears} />
      <DynamicDataSettingBtn />
    </div>
  );
};

export default DynamicDataSetting;
