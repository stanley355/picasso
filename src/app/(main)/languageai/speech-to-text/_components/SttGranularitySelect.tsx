"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Tooltip } from "react-tooltip";

const SttGranularitySelect = () => {
  const GRANULARITY_OPTIONS = [
    {
      label: "Timestamp: Word",
      value: "Word",
    },
    {
      label: "Timestamp: Segment",
      value: "Segment",
    },
  ];
  return (
    <div>
      <Select name="granularity" defaultValue="Word">
        <SelectTrigger id="granularity" className="h-10">
          <SelectValue placeholder="Audio Language" />
        </SelectTrigger>
        <SelectContent>
          {GRANULARITY_OPTIONS.map((granulary) => (
            <SelectItem value={granulary.value} key={granulary.label}>
              {granulary.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#granularity" className="hidden md:block">
        <div>The timestamp granularities to populate</div>
        <div>for this transcription. Try it.</div>
      </Tooltip>
    </div>
  );
};

export default SttGranularitySelect;
