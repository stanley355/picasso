import {
  fetchBpsDomainList,
  TBpsDomain,
} from "@/lib/api/bps/fetchBpsDomainList";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";

type TBpsDynamicDataSearchDomainFilter = {
  domainParam: string | undefined;
};

const BpsDynamicDataSearchDomainFilter = async ({
  domainParam,
}: TBpsDynamicDataSearchDomainFilter) => {
  const domains = (await fetchBpsDomainList("all")) as TBpsResponse<
    TBpsDomain[]
  >;
  if (domains["data-availability"] === "list-not-available") {
    return null;
  }

  return (
    <div>
      <Label id="domains">Domain</Label>
      <Select
        defaultValue={domainParam ? domainParam : domains.data[1][0].domain_id}
        name="domains"
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {domains.data[1].map((domainItem: TBpsDomain) => (
            <SelectItem value={domainItem.domain_id} key={domainItem.domain_id}>
              {domainItem.domain_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BpsDynamicDataSearchDomainFilter;
