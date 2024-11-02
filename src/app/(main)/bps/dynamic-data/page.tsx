import {
  fetchBpsDynamicData,
  TBpsDynamicDataRequestParam,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import DynamicDataNotFound from "@/app/(main)/bps/dynamic-data/_components/NotFound";
import { processBpsDynamicDataContent } from "@/lib/api/bps/dynamicData/processBpsDynamicDataContent";
import DynamicDataTable from "@/app/(main)/bps/dynamic-data/_components/DynamicDataTable";

type TBpsDynamicDataPage = {
  searchParams: TBpsDynamicDataRequestParam;
};

const BpsDynamicDataPage = async ({ searchParams }: TBpsDynamicDataPage) => {
  const baseDynamicData = await fetchBpsDynamicData({
    domain: searchParams.domain,
    var: searchParams.var,
  });
  const dynamicData = await fetchBpsDynamicData(searchParams);
  const dataIsAvailable =
    baseDynamicData["data-availability"] === "available" ||
    dynamicData["data-availability"] === "available";
  const datacontent = dataIsAvailable
    ? processBpsDynamicDataContent(dynamicData)
    : [];

  if (!dataIsAvailable) {
    return <DynamicDataNotFound />;
  }

  return (
    <div>
      <h1 className="p-2 border-b">{dynamicData.var[0].label}</h1>
      <div className="p-2">
        <DynamicDataTable data={datacontent} />
      </div>
    </div>
  );
};

export default BpsDynamicDataPage;
