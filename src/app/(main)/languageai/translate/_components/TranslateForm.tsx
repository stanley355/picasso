"use client";

import { toast } from "react-toastify";
import { useShallow } from "zustand/shallow";
import { LuArrowRight } from "react-icons/lu";
import { useTranslateStore } from "../_stores/useTranslateStore";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";

import { Button } from "@/components/ui/button";

import { getUserToken } from "@/lib/getUserToken";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";

import TranslateTextarea from "./TranslateTextarea";
import TranslateContentLanguageSelect from "./TranslateContentLanguageSelect";
import TranslateTargetLanguageSelect from "./TranslateTargetLanguageSelect";
import TranslateDiffSelect from "./TranslateDiffSelect";
import TranslateVariantSelect from "./TranslateVariantSelect";

const TranslateForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateStore, isLoading } = useTranslateStore(
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
    // const instruction = CHECKBOT_INSTRUCTIONS[Number(instructionId)];

    try {
      // const reqBody = {
      //   instruction: instruction.label,
      //   system_content: instruction.value,
      //   user_content: content,
      //   n: Number(variant),
      //   temperature: Number(diff),
      // };
      // const checkbot = await fetchCheckbot(reqBody);
      // const completions = checkbot.map((bot) => bot.completion_content);
      // updateStore("completions", completions);
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
      <h1 className="text-xl font-semibold p-2 border-b">Translate</h1>
      <TranslateTextarea />
      <div className="flex p-2 gap-2 flex-col">
        <div className="flex gap-2 justify-between items-center">
          <TranslateContentLanguageSelect />
          <LuArrowRight className="text-3xl" />
          <TranslateTargetLanguageSelect />
        </div>
        <div className="gap-2 flex justify-end">
          <TranslateVariantSelect />
          <TranslateDiffSelect />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Checking..." : "Check"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TranslateForm;
