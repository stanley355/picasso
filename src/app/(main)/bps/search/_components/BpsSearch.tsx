"use client";
import { useShallow } from "zustand/shallow";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import BpsSearchResult from "@/app/(main)/bps/search/result/_components/BpsSearchResult";
import BpsSearchHero from "@/app/(main)/bps/search/_components/BpsSearchHero";

export const BpsSearch = () => {
  const { showDynamicData } = useBpsSearchStore(
    useShallow((state) => ({
      showDynamicData: state.showDynamicData,
    })),
  );

  if (showDynamicData) {
    return <BpsSearchResult />;
  }

  return <BpsSearchHero />;
};

export default BpsSearch;
