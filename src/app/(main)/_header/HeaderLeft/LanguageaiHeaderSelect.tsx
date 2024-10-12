"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LanguageaiHeaderSelect = () => {
  const pathname = usePathname();

  return (
    <Select defaultValue={pathname}>
      <SelectTrigger
        className={cn(
          "border-none bg-foreground text-background focus:ring-transparent ring-offset-0 ring-offset-transparent h-8 md:hidden",
          { hidden: !pathname.includes("/languageai/") },
        )}
      >
        <span className="mr-4">/</span>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border shadow">
        <SelectItem value="/languageai/checkbot">Checkbot</SelectItem>
        <SelectItem value="/languageai/translate">Translate</SelectItem>
        <SelectItem value="/languageai/translate/audio">
          Translate Audio
        </SelectItem>
        <SelectItem value="/languageai/text-to-speech">
          Text to Speech
        </SelectItem>
        <SelectItem value="/languageai/speech-to-text">
          Speech to Text
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageaiHeaderSelect;
