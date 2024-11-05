import {TBpsDynamicDataVar} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";

type TBpsDynamicDataSearchResultList = {
    varList: TBpsDynamicDataVar[]
}

const BpsDynamicDataSearchResultList = ({varList}: TBpsDynamicDataSearchResultList) => {
   return (
       <div className="flex flex-col gap-2 max-h-96 overflow-auto w-full">
           {varList.map((varItem) => <Link href="/" key={varItem.title} className="p-2 rounded-md hover:bg-blue-300 dark:hover:bg-blue-800">
               <div className="underline text-sm">{varItem.title}</div>
               <div className="inline-flex gap-2 text-xs">
                   <span>{varItem.subcsa_name}</span>
                   <span>|</span>
                   <span>{varItem.sub_name}</span>
               </div>
           </Link> )}
       </div>
   )
};

export default BpsDynamicDataSearchResultList