"use client";
import { TBpsDomain } from "@/lib/api/bps/fetchBpsDomainList";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TBpsResponse } from "@/lib/api/bps/types/TBpsResponse";
import { usePathname, useRouter } from "next/navigation";

type TBpsDynamicDataSearchDomainFilter = {
  domainParam: string | undefined;
  domainResponse: TBpsResponse<TBpsDomain[]>;
};

const BpsDynamicDataSearchDomainFilter = ({
  domainParam,
  domainResponse,
}: TBpsDynamicDataSearchDomainFilter) => {
  const pathname = usePathname();
  const router = useRouter();

  if (domainResponse["data-availability"] === "list-not-available") {
    return null;
  }

  const onValueChange = (value: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", "1");
    urlParams.set("domain", value);
    const newQueryString = urlParams.toString();
    const newPath = pathname + "?" + newQueryString;
    router.replace(newPath);
  };

  return (
    <div>
      <Label id="domains" className="text-xs">Domain</Label>
      <Select
        defaultValue={
          domainParam ? domainParam : domainResponse?.data[1][0].domain_id
        }
        onValueChange={onValueChange}
        name="domains"
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {domainResponse.data[1].map((domainItem: TBpsDomain) => (
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
