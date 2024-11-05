import BpsDynamicDataSearchDomainFilter from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters/DomainFilter";
import { TBpsDynamicDataSearchParams } from "@/app/(main)/bps/dynamic-data/search/page";
import {fetchBpsDomainList, TBpsDomain} from "@/lib/api/bps/fetchBpsDomainList";
import {TBpsResponse} from "@/lib/api/bps/types/TBpsResponse";

const BpsDynamicDataSearchFilters = async ({
  domain,
}: TBpsDynamicDataSearchParams) => {
    const domains = (await fetchBpsDomainList("all")) as TBpsResponse<
        TBpsDomain[]
    >;
  return (
    <div className="mb-4">
      <BpsDynamicDataSearchDomainFilter domainParam={domain} domainResponse={domains} />
    </div>
  );
};

export default BpsDynamicDataSearchFilters;
