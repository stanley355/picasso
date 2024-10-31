import Link from "next/link";
import BpsSearchResultPagination from "@/app/(main)/bps/search/result/_components/BpsSearchResultPagination";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import { TBpsDynamicDataVar } from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";

type TBpsSearchResult = {
  pageAndCount: TBpsPageAndCount;
  dynamicData: TBpsDynamicDataVar[];
};

const BpsSearchResult = ({ pageAndCount, dynamicData }: TBpsSearchResult) => {
  return (
    <div className="h-full flex-1 p-2">
      <BpsSearchResultPagination pageAndCount={pageAndCount} />
      <div className="overflow-auto flex flex-col gap-2 max-h-[70vh] md:max-h-full">
        {dynamicData.map((dynData) => (
          <Link
            key={dynData.var_id}
            href={`/bps/var/${dynData.var_id}`}
            className="hover:bg-blue-100 p-2 rounded-md"
          >
            <div className="text-sm text-blue-500">{dynData.title}</div>
            <div className="text-xs">
              <span>{dynData.sub_name}</span>
              <span>{dynData.subcsa_name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BpsSearchResult;
