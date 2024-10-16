"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { CHECKBOT_INSTRUCTIONS } from "../_lib/constant";

const CheckbotInstructionSelect = () => {
  return (
    <Select name="instructionId">
      <SelectTrigger id="instruction">
        <SelectValue placeholder="Select instruction" />
      </SelectTrigger>
      <SelectContent>
        {CHECKBOT_INSTRUCTIONS.map((instruction, index) => (
          <SelectItem value={String(index)} key={instruction.label}>
            {instruction.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CheckbotInstructionSelect;
