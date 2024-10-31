"use client";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import { useShallow } from "zustand/shallow";
import { LuLoader2 } from "react-icons/lu";

const BpsSearchEmptyResult = () => {
  const { isLoading } = useBpsSearchStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
    })),
  );
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2">
      {isLoading ? (
        <LuLoader2 className="text-5xl animate-spin" />
      ) : (
        <AiTwotoneQuestionCircle className="text-5xl" />
      )}
      <h2 className="text-sm">No data found</h2>
      <h3 className="text-xs">*Try again or rephrase your search</h3>
    </div>
  );
};

export default BpsSearchEmptyResult;
