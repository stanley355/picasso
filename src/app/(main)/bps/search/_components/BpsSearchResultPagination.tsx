"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import { useShallow } from "zustand/shallow";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";

const BpsSearchResultPagination = () => {
  const { pageAndCount } = useBpsSearchStore(
    useShallow((state) => ({
      pageAndCount: state.pageAndCount as TBpsPageAndCount,
    })),
  );

  return (
    <Select name="page" defaultValue={String(pageAndCount.page)}>
      <SelectTrigger id="page" className="w-fit gap-2">
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
