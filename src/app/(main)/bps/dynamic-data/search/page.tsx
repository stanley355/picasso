import BpsDynamicDataSearchHeader from "@/app/(main)/bps/dynamic-data/search/_components/SearchHeader";
import BpsDynamicDataSearchFilters from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters";
import BpsDynamicDataSearchResult from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult";

export type TBpsDynamicDataSearchParams = {
  domain: string | undefined;
};

type TDynamicDataSearch = {
  searchParams: TBpsDynamicDataSearchParams;
};

const DynamicDataSearch = ({ searchParams }: TDynamicDataSearch) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <BpsDynamicDataSearchHeader />
      <div className="p-4 md:w-1/2 ">
        <BpsDynamicDataSearchFilters domain={searchParams.domain} />
          <BpsDynamicDataSearchResult searchParams={searchParams} />
      </div>
    </div>
  );
};

export default DynamicDataSearch;
