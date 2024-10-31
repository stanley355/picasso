"use client";
import Image from "next/image";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import { useShallow } from "zustand/shallow";

const BpsSearchHero = () => {
  const { isLoading } = useBpsSearchStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
    })),
  );

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 flex-1">
      <Image
        src="/images/bps.png"
        alt="BPS"
        width={100}
        height={100}
        className={isLoading ? "animate-bounce" : ""}
      />
      <h2 className="text-sm">Search any statistic about Indonesia</h2>
      <h3 className="text-xs">*BPS Web API Collaboration</h3>
    </div>
  );
};

export default BpsSearchHero;
