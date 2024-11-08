import DynamicDataJsonExport from "@/app/(main)/bps/dynamic-data/_components/export/JsonExport";
import {
  fetchBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import { processBpsDynamicDataContent } from "@/lib/api/bps/dynamicData/processBpsDynamicDataContent";
import { EDynamicDataChart } from "@/app/(main)/bps/dynamic-data/_stores/useDynamicDataStore";
import DynamicDataCsvExport from "@/app/(main)/bps/dynamic-data/_components/export/CsvExport";

type TDynamicDataExport = {
  searchParams: TBpsDynamicDataRequestParam & {
    isDefaultRowCol: "0" | "1" | undefined;
    chart: EDynamicDataChart | undefined;
  };
  defaultVervar: string;
};

const DynamicDataExport = async ({
  searchParams,
  defaultVervar,
}: TDynamicDataExport) => {
  const dynamicData = await fetchBpsDynamicData(
    {
      ...searchParams,
      vervar: searchParams.vervar ? searchParams.vervar : defaultVervar,
    },
    false,
  );
  const datacontent = processBpsDynamicDataContent(
    dynamicData,
    searchParams?.isDefaultRowCol === "1",
  );

  return (
    <div className="p-2 ">
      <div className="mb-2">Export to: </div>
      <div className="inline-flex gap-2">
        <DynamicDataJsonExport
          title={dynamicData.var[0].label}
          datacontent={datacontent}
        />
        <DynamicDataCsvExport
          title={dynamicData.var[0].label}
          datacontent={datacontent}
        />
      </div>
    </div>
  );
};

export default DynamicDataExport;
