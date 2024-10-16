import { useState, memo } from "react";
import { LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TranslateTextarea = () => {
  const [value, setValue] = useState("");

  return (
    <div className="relative flex-1 border-b">
      <Textarea
        name="content"
        placeholder="Enter text"
        className="resize-none w-full h-full rounded-none border-none"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button
        size="icon"
        variant="ghost"
        type="button"
        className="absolute top-0 right-0"
        onClick={() => setValue("")}
      >
        <LuX className="text-xl" />
      </Button>
    </div>
  );
};

export default memo(TranslateTextarea);
