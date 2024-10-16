"use client";
import { Tooltip } from "react-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const TranslateDiffSelect = () => {
  return (
    <div>
      <Select name="diff" defaultValue="1.0">
        <SelectTrigger id="diff">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0.0">Diff: None</SelectItem>
          <SelectItem value="0.5">Diff: Low</SelectItem>
          <SelectItem value="1.0">Diff: Mid</SelectItem>
          <SelectItem value="1.5">Diff: High</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#diff" className="hidden md:block">
        <div>Higher diff will make the output more random,</div>
        <div>Lower diff will make it more focused and deterministic</div>
      </Tooltip>
    </div>
  );
};

export default TranslateDiffSelect;
