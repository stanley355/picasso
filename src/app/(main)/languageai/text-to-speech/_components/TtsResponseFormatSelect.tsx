"use client";
import { Tooltip } from "react-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const TtsResponseFormatSelect = () => {
  return (
    <div>
      <Select name="output" defaultValue="Mp3">
        <SelectTrigger id="output" className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Mp3">Format: Mp3</SelectItem>
          <SelectItem value="Wav">Format: Wav</SelectItem>
          <SelectItem value="Opus">Format: Opus</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#output" className="hidden md:block">
        The output of the generated audio
      </Tooltip>
    </div>
  );
};

export default TtsResponseFormatSelect;
