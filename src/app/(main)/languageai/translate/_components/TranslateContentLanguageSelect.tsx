"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { TRANSLATE_LANGUAGES } from "../_lib/constant";

const TranslateContentLanguageSelect = () => {
  return (
    <Select name="contentLanguage">
      <SelectTrigger id="contentLanguage" className="h-10">
        <SelectValue placeholder="Detect Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="detect">Detect Language</SelectItem>
        {TRANSLATE_LANGUAGES.map((language: string) => (
          <SelectItem value={language} key={`content_language_${language}`}>
            {language}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TranslateContentLanguageSelect;
