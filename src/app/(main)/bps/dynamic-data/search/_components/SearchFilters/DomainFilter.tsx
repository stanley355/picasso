import {fetchBpsDomainList} from "@/lib/api/bps/fetchBpsDomainList";

const BpsDynamicDataSearchDomainFilter = async () => {
    const domains = await fetchBpsDomainList("all");
    return (
        <div>

        </div>
    )
};

export default BpsDynamicDataSearchDomainFilter;