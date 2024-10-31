"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {TBpsDomain} from "@/lib/api/bps/fetchBpsDomainList";

type TBpsSearchDomainSelect = {
    domains: TBpsDomain[]
};

const BpsSearchDomainSelect = ({ domains }: TBpsSearchDomainSelect) => {
    return (
        <Select
            name="page"
            defaultValue={String(domains[0].domain_id)}
            onValueChange={(value) => {
                // const q = searchParams.get("q");
                // router.push(`${pathname}?page=${value}&q=${q}`);
            }}
        >
            <SelectTrigger id="page" className="w-fit gap-2 mb-2">
                <SelectValue className="text-sm"/>
            </SelectTrigger>
            <SelectContent>
                {domains.map((domain) => (
                    <SelectItem key={domain.domain_name} value={String(domain.domain_id)}>
                        Domain: {domain.domain_name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default BpsSearchDomainSelect;
