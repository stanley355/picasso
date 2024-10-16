"use client";

import { useShallow } from "zustand/shallow";
import { Button } from "@/components/ui/button";

import CheckbotInstructionSelect from "./CheckbotInstructionSelect";
import CheckbotVariantSelect from "./CheckbotVariantSelect";
import CheckbotDiffSelect from "./CheckbotDiffSelect";
import { getUserToken } from "@/lib/getUserToken";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import CheckbotTextarea from "./CheckbotTextarea";
import { useCheckbotStore } from "../_stores/useCheckbotStore";
import { toast } from "react-toastify";
import { CHECKBOT_INSTRUCTIONS } from "../_lib/constant";
import { fetchCheckbot } from "@/lib/api/author/checkbots/fetchCheckbot";

const CheckbotForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateStore, isLoading } = useCheckbotStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const token = await getUserToken();
    if (!token) {
      updateLoginStore("showLoginModal", true);
      return;
    }

    const variant = formData.get("variant") as string;
    const diff = formData.get("diff") as string;

    const instructionId = formData.get("instructionId") as string;
    const content = formData.get("content") as string;

    if (!instructionId) {
      toast("Please select instruction");
      return;
    }
    if (!content) {
      toast("Please enter your text");
      return;
    }

    updateStore("isLoading", true);
    const instruction = CHECKBOT_INSTRUCTIONS[Number(instructionId)];

    try {
      const reqBody = {
        instruction: instruction.label,
        system_content: instruction.value,
        user_content: content,
        n: Number(variant),
        temperature: Number(diff),
      };
      const checkbot = await fetchCheckbot(reqBody);
      const completions = checkbot.map((bot) => bot.completion_content);
      updateStore("completions", completions);
      updateStore("isLoading", false);
      return;
    } catch (error: any) {
      updateStore("isLoading", false);
      toast(error.message);
      return;
    }
  };

  return (
    <form className="flex flex-col h-full" action={handleAction}>
      <h1 className="text-xl font-semibold p-2 border-b">Checkbot</h1>
      <CheckbotTextarea />
      <div className="flex p-2 gap-2 flex-col">
        <CheckbotInstructionSelect />
        <div className="gap-2 flex justify-end">
          <div className="flex gap-2">
            <CheckbotVariantSelect />
            <CheckbotDiffSelect />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Checking..." : "Check"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CheckbotForm;
