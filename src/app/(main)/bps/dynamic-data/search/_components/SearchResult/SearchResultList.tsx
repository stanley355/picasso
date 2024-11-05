"use client";
import { TBpsDynamicDataVar } from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import Link from "next/link";
import { useEffect, useRef } from "react";

type TBpsDynamicDataSearchResultList = {
  domain: string | undefined;
  varList: TBpsDynamicDataVar[];
};

const BpsDynamicDataSearchResultList = ({
  domain,
  varList,
}: TBpsDynamicDataSearchResultList) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (varList.length > 0) {
      const container = containerRef.current as any;
      container.scrollTop = 0;
    }
  }, [varList]);

  return (
    <div
      className="flex flex-col gap-2  mb-4 max-h-96 overflow-auto w-full"
      ref={containerRef}
    >
      {varList.map((varItem) => (
        <Link
          href={`/bps/dynamic-data?var=${varItem.var_id}&domain=${domain ? domain : "0000"}`}
          key={varItem.title}
          className="p-2 rounded-md hover:bg-blue-300 dark:hover:bg-blue-800"
        >
          <div className="underline text-sm">{varItem.title}</div>
          <div className="inline-flex gap-2 text-xs">
            <span>{varItem.subcsa_name}</span>
            {varItem.subcsa_name && <span>|</span>}
            <span>{varItem.sub_name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BpsDynamicDataSearchResultList;
