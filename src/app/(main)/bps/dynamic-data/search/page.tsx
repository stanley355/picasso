import BpsDynamicDataSearchHeader from "@/app/(main)/bps/dynamic-data/search/_components/SearchHeader";
import BpsDynamicDataSearchFilters from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters";
import BpsDynamicDataSearchResult from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult";
import {Suspense} from "react";
import DynamicDataLoading from "@/app/(main)/bps/dynamic-data/_components/loading";

export type TBpsDynamicDataSearchParams = {
    domain: string | undefined;
    page?: number | undefined
};

type TDynamicDataSearch = {
    searchParams: TBpsDynamicDataSearchParams;
};

const DynamicDataSearch = ({searchParams}: TDynamicDataSearch) => {
    return (
        <div className="w-full h-full overflow-hidden">
            <BpsDynamicDataSearchHeader/>
            <Suspense fallback={<DynamicDataLoading/>}>
                <div className="p-4">
                    <BpsDynamicDataSearchFilters domain={searchParams.domain}/>
                    <BpsDynamicDataSearchResult searchParams={searchParams}/>
                </div>
            </Suspense>
        </div>
    );
};

export default DynamicDataSearch;
