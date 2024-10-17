"use client";

import { useState, memo } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type TTabs = {
  titles: string[];
  contents: React.ReactNode[];
};

const Tabs = ({ titles, contents }: TTabs) => {
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <div>
      <div className="p-1 w-full flex">
        {titles.map((title, index) => (
          <Button
            type="button"
            className="flex-1 w-full"
            variant={activeTabs === index ? "default" : "ghost"}
            onClick={() => setActiveTabs(index)}
            key={title}
          >
            {title}
          </Button>
        ))}
      </div>
      {contents.map((content, index) => (
        <div
          key={`tabs_content_${index}`}
          className={cn(
            "w-full h-full overflow-x-hidden",
            activeTabs === index ? "block" : "hidden",
          )}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default memo(Tabs);
