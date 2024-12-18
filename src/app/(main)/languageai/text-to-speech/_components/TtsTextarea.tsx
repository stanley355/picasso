import { useState, memo } from "react";
import { LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TtsTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-1">
      <Textarea
        name="content"
        placeholder="Enter text"
        className="resize-none w-full h-full rounded-none border-none flex-1"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button
        size="icon"
        variant="ghost"
        type="button"
        onClick={() => setValue("")}
      >
        <LuX className="text-xl" />
      </Button>
    </div>
  );
};

export default memo(TtsTextarea);
