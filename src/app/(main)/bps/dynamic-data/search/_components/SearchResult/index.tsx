import {TBpsDynamicDataSearchParams} from "@/app/(main)/bps/dynamic-data/search/page";
import {fetchBpsDynamicDataVarList, TBpsDynamicDataVar} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import EmptySearchResult from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult/EmptySearchResult";
import BpsDynamicDataSearchResultList
    from "@/app/(main)/bps/dynamic-data/search/_components/SearchResult/SearchResultList";

type TBpsDynamicDataSearchResult = {
    searchParams: TBpsDynamicDataSearchParams
}

const BpsDynamicDataSearchResult = async ({searchParams}: TBpsDynamicDataSearchResult) => {
    const varList = await fetchBpsDynamicDataVarList({domain: searchParams.domain});

   if (varList["data-availability"] === "list-not-available") {
       return <EmptySearchResult />
   }

    return (
        <div>
            <BpsDynamicDataSearchResultList varList={varList.data[1] as TBpsDynamicDataVar[]} />
        </div>
    )
};

export default BpsDynamicDataSearchResult