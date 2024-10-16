import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import CheckbotHead from "./CheckbotHead";
import CheckbotInstructionSelect from "./CheckbotInstructionSelect";
import CheckbotVariantSelect from "./CheckbotVariantSelect";
import CheckbotDiffSelect from "./CheckbotDiffSelect";

const CheckbotForm = () => {

  const handleAction = (formData: FormData) => {
    const data = Object.fromEntries(formData)
    console.log(data);

  }

  return <form className="flex flex-col h-full" action={handleAction}>
    <CheckbotHead />
    <Textarea placeholder="Enter text" className="resize-none flex-1 rounded-none" />
    <div className="flex p-2 gap-2 md:flex-col">
      <CheckbotInstructionSelect />
      <div className="gap-4 flex justify-end">
        <div className="hidden md:flex gap-2">
          <CheckbotVariantSelect />
          <CheckbotDiffSelect />
        </div>
        <Button type="submit">Check</Button>
      </div>
    </div>
  </form>;
};

export default CheckbotForm;
