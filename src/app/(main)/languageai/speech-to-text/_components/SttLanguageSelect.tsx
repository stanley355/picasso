"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { TRANSLATE_LANGUAGES } from "../../translate/_lib/constant";
import { Tooltip } from "react-tooltip";

const SttLanguageSelect = () => {
  return (
    <div>

      <Select name="language">
        <SelectTrigger id="language" className="h-10">
          <SelectValue placeholder="Audio Language" />
        </SelectTrigger>
        <SelectContent>
          {TRANSLATE_LANGUAGES.map((language: string) => (
            <SelectItem value={language} key={`target_language_${language}`}>
              {language}
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
