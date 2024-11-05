import { TBpsDynamicDataSearchParams } from "@/app/(main)/bps/dynamic-data/search/page";
import {
  fetchBpsDynamicDataVarList,
  TBpsDynamicDataVar,
} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import EmptySearchResult from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult/EmptySearchResult";
import BpsDynamicDataSearchResultList from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult/SearchResultList";
import BpsDynamicDataSearchResultPagination from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult/SearchResultPagination";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";

type TBpsDynamicDataSearchResult = {
  searchParams: TBpsDynamicDataSearchParams;
};

const BpsDynamicDataSearchResult = async ({
  searchParams,
}: TBpsDynamicDataSearchResult) => {
  const varList = await fetchBpsDynamicDataVarList({
    domain: searchParams.domain,
    page: searchParams.page,
  });

  if (varList["data-availability"] === "list-not-available") {
    return <EmptySearchResult />;
  }

  return (
    <div>
      <BpsDynamicDataSearchResultList
        domain={searchParams.domain}
        varList={varList.data[1] as TBpsDynamicDataVar[]}
      />
      <BpsDynamicDataSearchResultPagination
        currentPage={searchParams.page}
        pageAndCount={varList.data[0] as TBpsPageAndCount}
      />
    </div>
  );
};

export default BpsDynamicDataSearchResult;
