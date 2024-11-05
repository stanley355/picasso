import BpsDynamicDataSearchHeader from "@/app/(main)/bps/dynamic-data/search/_components/SearchHeader";
import BpsDynamicDataSearchFilters from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters";

export type TBpsDynamicDataSearchParams = {
    domain: string | undefined;
}

type TDynamicDataSearch  ={
    searchParams:TBpsDynamicDataSearchParams
}

const DynamicDataSearch = ({searchParams}: TDynamicDataSearch) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <BpsDynamicDataSearchHeader />
      <div className="p-4 h-full">
        <BpsDynamicDataSearchFilters domain={searchParams.domain} />
      </div>
    </div>
  );
};

export default DynamicDataSearch;
