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
import { fetchTranslation } from "@/lib/api/author/translation/fetchTranslation";
import { createTranslateSystemContent } from "../_lib/createTranslateSystemContent";

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

    const contentLanguage = formData.get("contentLanguage") as string
    const content = formData.get("content") as string;
    const targetLanguage = formData.get("targetLanguage") as string;

    if (!targetLanguage) {
      toast("Please select target language");
      return;
    }
    if (!content) {
      toast("Please enter your text");
      return;
    }

    updateStore("isLoading", true);
    sendFirebaseEvent("translate");

    try {
      const reqBody = {
        content_language: contentLanguage,
        target_language: targetLanguage,
        system_content: createTranslateSystemContent(contentLanguage, targetLanguage),
        user_content: content,
        n: Number(variant),
        temperature: Number(diff),
      };

      const translation = await fetchTranslation(reqBody);
      const completions = translation.map((bot) => bot.completion_content);
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
