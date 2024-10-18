"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Tooltip } from "react-tooltip";
import { STT_LANGUAGE_LIST } from "../_stores/constant";

const SttLanguageSelect = () => {
  return (
    <div>
      <Select name="language">
        <SelectTrigger id="language" className="h-10">
          <SelectValue placeholder="Audio Language" />
        </SelectTrigger>
        <SelectContent>
          {STT_LANGUAGE_LIST.map((language) => (
            <SelectItem value={language.value} key={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#language">
        <div>*Required: The language of the input audio</div>
        <div>Supplying the language will improve accuracy</div>
      </Tooltip>
    </div>
  );
};

export default SttLanguageSelect;
