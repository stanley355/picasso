import React from "react";
import CheckbotVariantSelect from "./CheckbotVariantSelect";
import CheckbotDiffSelect from "./CheckbotDiffSelect";

const CheckbotHead = () => {
  return (
    <div className="border-b p-2 flex items-center justify-between md:justify-start">
      <h1 className="text-xl font-semibold">Checkbot</h1>
      <div className="gap-1 flex md:hidden">
        <CheckbotVariantSelect />
        <CheckbotDiffSelect />
      </div>
    </div>
  );
};

export default CheckbotHead;
