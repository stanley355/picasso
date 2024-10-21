"use client";
import { Tooltip } from "react-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

const TtsVoiceSelect = () => {
  return (
    <div>
      <Select name="voice" defaultValue="Alloy">
        <SelectTrigger id="voice" className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Alloy">Voice: Alloy</SelectItem>
          <SelectItem value="Echo">Voice: Echo</SelectItem>
          <SelectItem value="Fable">Voice Fable</SelectItem>
          <SelectItem value="Nova">Voice: Nova</SelectItem>
          <SelectItem value="Onyx">Voice: Onyx</SelectItem>
          <SelectItem value="Shimmer">Voice: Shimmer</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#voice" className="hidden md:block">
        The voice to use when generating the audio
      </Tooltip>
    </div>
  );
};

export default TtsVoiceSelect;
