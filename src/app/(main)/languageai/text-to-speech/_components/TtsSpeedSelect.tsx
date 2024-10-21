"use client";
import { Tooltip } from "react-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const TtsSpeedSelect = () => {
  return (
    <div>
      <Select name="speed" defaultValue="1.0">
        <SelectTrigger id="speed" className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0.5">Speed: Slow</SelectItem>
          <SelectItem value="1.0">Speed: Normal</SelectItem>
          <SelectItem value="1.5">Speed: Fast</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#speed" className="hidden md:block">
        The speed of the generated audio
      </Tooltip>
    </div>
  );
};

export default TtsSpeedSelect;
