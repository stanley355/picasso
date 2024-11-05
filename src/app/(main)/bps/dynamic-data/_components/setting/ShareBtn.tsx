"use client";

import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const DynamicDataShareBtn = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };
  return (
    <div className="flex items-center justify-end">
      <Button className="h-10 gap-2" id="share" onClick={onClick}>
        <LuCopy />
        <span>Share link</span>
      </Button>
      <Tooltip anchorSelect="#share">
        {isCopied ? "Copied to clipboard" : "Click to copy"}
      </Tooltip>
    </div>
  );
};

export default DynamicDataShareBtn;
