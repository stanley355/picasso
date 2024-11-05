"use client";
import { TBpsPageAndCount } from "@/lib/api/bps/types/TBpsPageAndCount";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TBpsDynamicDataSearchResultPagination = {
  currentPage: number | undefined;
  pageAndCount: TBpsPageAndCount;
};

const BpsDynamicDataSearchResultPagination = ({
  pageAndCount,
  currentPage = 1,
}: TBpsDynamicDataSearchResultPagination) => {
  const pathname = usePathname();

  const createPageUrl = (pageNumber: number) => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", String(pageNumber));
      const newQueryString = urlParams.toString();
      return pathname + "?" + newQueryString;
    }
    return pathname;
  };

  return (
    <div className="flex flex-row items-center gap-2 w-full overflow-hidden py-2">
      <span className="text-sm hidden md:block">Page:</span>
      {...Array.from({ length: pageAndCount.pages }).map((arVal, index) => (
        <Link
          href={createPageUrl(index + 1)}
          key={`${arVal}_${index}`}
          className={cn(
            buttonVariants({
              variant: Number(currentPage) === index + 1 ? "default" : "ghost",
              size: "icon",
            }),
            "p-2 rounded-full px-3",
          )}
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default BpsDynamicDataSearchResultPagination;
