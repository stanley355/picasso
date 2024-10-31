import BpsSearchHead from "@/app/(main)/bps/search/_components/BpsSearchHead";
import {fetchBpsDynamicDataVarList, TBpsDynamicDataVar} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import BpsSearchEmptyResult from "@/app/(main)/bps/search/_components/BpsSearchEmptyResult";
import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchResult from "@/app/(main)/bps/search/_components/BpsSearchResult";
import {TBpsPageAndCount} from "@/lib/api/bps/types/TBpsPageAndCount";


type TBpsSearchResultPage = {
    searchParams: {
        q: string
        page: string
    }
}

const BpsSearchResultPage = async ({searchParams}: TBpsSearchResultPage) => {
    const dynamicData = await fetchBpsDynamicDataVarList(searchParams.q, searchParams?.page ? Number(searchParams.page) : 1);

    return (
        <div className="flex flex-col h-full">
            <BpsSearchHead/>
            <div className="flex-1 flex flex-col p-2">
                {typeof dynamicData?.data === 'string' ? <BpsSearchEmptyResult/> :
                    <BpsSearchResult
                        pageAndCount={dynamicData.data[0] as unknown as TBpsPageAndCount}
                        dynamicData={dynamicData.data[1] as unknown as TBpsDynamicDataVar[]}
                    />
                }
                <BpsSearchBox/>
            </div>
        </div>
    )
};

export default BpsSearchResultPage