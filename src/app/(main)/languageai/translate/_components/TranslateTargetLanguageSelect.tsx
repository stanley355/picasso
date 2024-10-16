
"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { TRANSLATE_LANGUAGES } from "../_lib/constant";

const TranslateTargetLanguageSelect = () => {
  return (
    <Select name="targetLanguage">
      <SelectTrigger id="targetLanguage">
        <SelectValue placeholder="Target Language" />
      </SelectTrigger>
      <SelectContent>
        {TRANSLATE_LANGUAGES.map((language: string) => (
          <SelectItem
            value={language}
            key={`target_language_${language}`}
          >
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TranslateTargetLanguageSelect;
