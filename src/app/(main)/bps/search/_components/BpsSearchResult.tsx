import Link from "next/link";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import { useShallow } from "zustand/shallow";
import BpsSearchEmptyResult from "@/app/(main)/bps/search/_components/BpsSearchEmptyResult";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import BpsSearchResultPagination from "@/app/(main)/bps/search/_components/BpsSearchResultPagination";
import { TBpsDynamicDataVar } from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";

const BpsSearchResult = () => {
  const { dynamicData, pageAndCount } = useBpsSearchStore(
    useShallow((state) => ({
      pageAndCount: state.pageAndCount as TBpsPageAndCount,
      dynamicData: state.dynamicData as TBpsDynamicDataVar[],
    })),
  );

  if (!dynamicData) {
    return <BpsSearchEmptyResult />;
  }

  return (
    <div className="h-full flex-1">
      <div className="text-xs flex items-center justify-between mb-4">
        <BpsSearchResultPagination />
        <div>
          Showing {pageAndCount.per_page} out of {pageAndCount.total}{" "}
        </div>
      </div>
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
