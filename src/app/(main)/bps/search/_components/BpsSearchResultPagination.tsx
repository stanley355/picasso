"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TBpsSearchResultPagination = {
  pageAndCount: TBpsPageAndCount;
};

const BpsSearchResultPagination = ({
  pageAndCount,
}: TBpsSearchResultPagination) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Select
      name="page"
      defaultValue={String(pageAndCount.page)}
      onValueChange={(value) => {
        const q = searchParams.get("q");
        router.push(`${pathname}?page=${value}&q=${q}`);
      }}
    >
      <SelectTrigger id="page" className="w-fit gap-2 mb-2">
        <SelectValue className="text-sm" />
      </SelectTrigger>
      <SelectContent>
        {[...Array(pageAndCount.pages)].map((_, index) => (
          <SelectItem key={`page_${index}`} value={String(index + 1)}>
            Page: {index + 1}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BpsSearchResultPagination;
