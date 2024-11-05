import BpsDynamicDataSearchDomainFilter from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters/DomainFilter";
import { TBpsDynamicDataSearchParams } from "@/app/(main)/bps/dynamic-data/search/page";

const BpsDynamicDataSearchFilters = ({
  domain,
}: TBpsDynamicDataSearchParams) => {
  return (
    <div>
      <BpsDynamicDataSearchDomainFilter domainParam={domain} />
    </div>
  );
};

export default BpsDynamicDataSearchFilters;
