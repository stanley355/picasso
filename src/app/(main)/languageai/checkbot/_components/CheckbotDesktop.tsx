"use client";
import { useShallow } from "zustand/shallow";
import { useCheckbotStore } from "../_stores/useCheckbotStore";
import CheckbotForm from "./CheckbotForm";
import CheckbotCompletions from "./CheckbotCompletions";

const CheckbotDesktop = () => {
  const { completions } = useCheckbotStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <div className="hidden md:flex h-full">
      <div className="flex-1 border-r">
        <CheckbotForm />
      </div>
      {completions.length > 0 && <div className="flex-1 max-w-[50%] border-l">
        <CheckbotCompletions />
      </div>}
    </div>
  );
};

export default CheckbotDesktop;
