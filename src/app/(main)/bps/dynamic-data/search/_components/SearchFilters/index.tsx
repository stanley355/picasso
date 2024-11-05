import BpsDynamicDataSearchDomainFilter from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters/DomainFilter";
import { TBpsDynamicDataSearchParams } from "@/app/(main)/bps/dynamic-data/search/page";
import {
  fetchBpsDomainList,
  TBpsDomain,
} from "@/lib/api/bps/fetchBpsDomainList";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";
import BpsDynamicDataSearchKeywordFilter from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters/KeywordFilter";

const BpsDynamicDataSearchFilters = async ({
  domain,
}: TBpsDynamicDataSearchParams) => {
  const fetchDomainList = (await fetchBpsDomainList("all")) as TBpsResponse<
    TBpsDomain[]
  >;

  return (
    <div className="mb-4 grid grid-cols-2 gap-2 md:w-1/2">
      <BpsDynamicDataSearchDomainFilter
        domainParam={domain}
        domainResponse={fetchDomainList}
      />
      <BpsDynamicDataSearchKeywordFilter />
    </div>
  );
};

export default BpsDynamicDataSearchFilters;
