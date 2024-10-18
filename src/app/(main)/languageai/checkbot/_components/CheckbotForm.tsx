"use client";

import { toast } from "react-toastify";
import { useShallow } from "zustand/shallow";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { useCheckbotStore } from "../_stores/useCheckbotStore";

import { Button } from "@/components/ui/button";
import DiffSelect from "../../_components/DiffSelect";
import VariantSelect from "../../_components/VariantSelect";

import CheckbotInstructionSelect from "./CheckbotInstructionSelect";
import CheckbotTextarea from "./CheckbotTextarea";

import { getUserToken } from "@/lib/getUserToken";
import { fetchCheckbot } from "@/lib/api/author/checkbots/fetchCheckbot";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";
import { CHECKBOT_INSTRUCTIONS } from "../_lib/constant";

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
    sendFirebaseEvent("checkbot");
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
    <form className="flex flex-col h-full rounded-lg" action={handleAction}>
      <CheckbotTextarea />
      <div className="flex p-2 py-4 flex-col gap-4 md:p-4 md:gap-2">
        <CheckbotInstructionSelect />
        <div className="flex items-center justify-end  gap-2">
          <DiffSelect />
          <VariantSelect />
          <Button type="submit" disabled={isLoading} className="h-10">
            {isLoading ? "Checking..." : "Check"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CheckbotForm;
