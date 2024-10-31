import {
  fetchBpsDynamicDataVarList,
  TBpsDynamicDataVar,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import BpsSearchResultNotFound from "@/app/(main)/bps/search/result/_components/BpsSearchResultNotFound";
import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchResult from "@/app/(main)/bps/search/result/_components/BpsSearchResult";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";

type TBpsSearchResultPage = {
  searchParams: {
    q: string;
    page: string;
  };
};

const BpsSearchResultPage = async ({ searchParams }: TBpsSearchResultPage) => {
  const dynamicData = await fetchBpsDynamicDataVarList(
    searchParams.q,
    searchParams?.page ? Number(searchParams.page) : 1,
  );

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-semibold border-b p-2">Statistic Search</h1>
      {typeof dynamicData?.data === "string" ? (
        <BpsSearchResultNotFound />
      ) : (
        <BpsSearchResult
          pageAndCount={dynamicData.data[0] as unknown as TBpsPageAndCount}
          dynamicData={dynamicData.data[1] as unknown as TBpsDynamicDataVar[]}
        />
      )}
      <BpsSearchBox />
    </div>
  );
};

export default BpsSearchResultPage;
