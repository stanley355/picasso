"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {LuArrowLeft, LuCopy} from "react-icons/lu";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import {cn} from "@/lib/utils";

const DynamicDataShareBtn = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };
  return (
    <div className="flex justify-between">
        <Link href="/bps/dynamic-data/search" className={cn(buttonVariants({variant: "outline"}), 'gap-2')}>
           <LuArrowLeft />
           <span>Back to search</span>
        </Link>
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
