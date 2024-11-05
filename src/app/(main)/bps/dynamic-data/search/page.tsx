import BpsDynamicDataSearchHeader from "@/app/(main)/bps/dynamic-data/search/_components/SearchHeader";
import BpsDynamicDataSearchFilters from "@/app/(main)/bps/dynamic-data/search/_components/SearchFilters";

const DynamicDataSearch = () => {
    return <div className="w-full h-full overflow-hidden">
        <BpsDynamicDataSearchHeader />
        <div className="p-4 h-full">

        <BpsDynamicDataSearchFilters />
        </div>
    </div>;
};

export default DynamicDataSearch;
