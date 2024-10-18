"use client";
import { useShallow } from "zustand/shallow";
import { useSttStore } from "../_stores/useSttStore";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";

import DiffSelect from "../../_components/DiffSelect";
import SttAudioInput from "./SttAudioInput";
import SttLanguageSelect from "./SttLanguageSelect";
import SttGranularitySelect from "./SttGranularitySelect";

import { getUserToken } from "@/lib/getUserToken";
import { decode, JwtPayload } from "jsonwebtoken";
import { fetchSpeechToText } from "@/lib/api/author/stt/fetchSpeechToText";

const SttForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );
  const { updateStore, isLoading } = useSttStore(
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

    const file = formData.get("file") as File;
    const language = formData.get("language") as string;
    const diff = formData.get("diff") as string;
    const granularity = formData.get("granularity") as string;

    if (!file) {
      toast("Please upload audio file");
      return;
    }

    if (!language) {
      toast("Please input audio language");
      return;
    }

    updateStore("isLoading", true);

    try {
      const user = decode(token) as JwtPayload;
      const time = new Date().getTime();
      const firebasePath = `audio/transcriptions/${user.id}:${time}`;
      const storage = getStorage();
      const storef = ref(storage, firebasePath);
      const result = await uploadBytes(storef, file);
      const downloadURL = await getDownloadURL(result.ref);

      const reqBody = {
        file_name: file.name,
        file_url: downloadURL,
        temperature: Number(diff),
        language,
        ...granularity && {
          timestamp_granularities: granularity
        }
      }

      const stt = await fetchSpeechToText(reqBody);

      updateStore("isLoading", false);
    } catch (error) {
      updateStore("isLoading", false);
      toast("Conversion failed, please try again");
      console.error(error);
      return;
    }
  };

  return (
    <form className="flex-1 h-full flex flex-col" action={handleAction}>
      <SttAudioInput />
      <div className="p-4 flex flex-col gap-4">
        <SttLanguageSelect />
        <div className="flex gap-4 justify-end">
          <SttGranularitySelect />
          <DiffSelect />
          <Button className="h-10" disabled={isLoading}>
            {isLoading ? "Converting..." : "Convert"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SttForm;
