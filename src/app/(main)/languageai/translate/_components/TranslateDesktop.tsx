"use client";
import { useShallow } from "zustand/shallow";
import { useTranslateStore } from "../_stores/useTranslateStore";

import TranslateForm from "./TranslateForm";
import TranslateCompletions from "./TranslateCompletions";

const TranslateDesktop = () => {
  const { completions } = useTranslateStore(
    useShallow((state) => ({
      completions: state.completions,
    })),
  );

  return (
    <div className="hidden md:flex h-full">
      <div className="flex-1">
        <TranslateForm />
      </div>
      {completions.length > 0 && (
        <div className="flex-1 max-w-[50%] border-l">
          <TranslateCompletions />
        </div>
      )}
    </div>
  );
};

export default TranslateDesktop;
