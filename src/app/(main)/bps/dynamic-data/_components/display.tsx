import {fetchBpsDynamicData, TBpsDynamicDataRequestParam} from "@/lib/api/bps/dynamicData/fetchBpsDynamicData";
import {processBpsDynamicDataContent} from "@/lib/api/bps/dynamicData/processBpsDynamicDataContent";
import DynamicDataTable from "@/app/(main)/bps/dynamic-data/_components/chart/DynamicDataTable";

type TDynamicDataDisplay = {
    searchParams: TBpsDynamicDataRequestParam & {
        isDefaultRowCol: "0" | "1" | undefined
    }
}

const DynamicDataDisplay = async ({searchParams}: TDynamicDataDisplay) => {
    const dynamicData = await fetchBpsDynamicData(searchParams);
    const dataIsAvailable = dynamicData["data-availability"] === "available";
    const datacontent = dataIsAvailable
        ? processBpsDynamicDataContent(dynamicData, searchParams?.isDefaultRowCol === "1")
        : [];

   return (
       <div>
           <div className="w-full h-full max-h-60 md:max-h-[80vh] mb-4 overflow-auto">
               <DynamicDataTable data={datacontent} />
           </div>
           <div>
              Unit: {dynamicData.var[0].unit}
           </div>
       </div>
   )
};

export default DynamicDataDisplay;