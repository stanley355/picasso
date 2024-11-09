"use client";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

const DynamicDataLinkExport = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };
  return (
    <Button className="h-10 gap-2" id="share" onClick={onClick}>
      <LuCopy />
      <span>Share link</span>
      <Tooltip anchorSelect="#share">
        {isCopied ? "Copied to clipboard" : "Click to copy"}
      </Tooltip>
    </Button>
  );
};

export default DynamicDataLinkExport;
