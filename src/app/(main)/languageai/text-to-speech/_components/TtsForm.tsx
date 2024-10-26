import { Button } from "@/components/ui/button";
import TtsResponseFormatSelect from "./TtsResponseFormatSelect";
import TtsSpeedSelect from "./TtsSpeedSelect";
import TtsTextarea from "./TtsTextarea";
import TtsVoiceSelect from "./TtsVoiceSelect";
import { toast } from "react-toastify";
import { fetchTextToSpeech } from "@/lib/api/author/tts/fetchTextToSpeech";
import { useShallow } from "zustand/shallow";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { getUserToken } from "@/lib/getUserToken";
import { useTtsStore } from "../_stores/useTtsStore";
import { sendFirebaseEvent } from "@/lib/firebase/sendFirebaseEvent";

const TtsForm = () => {
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { updateStore, isLoading } = useTtsStore(
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

    const content = formData.get("content") as string;
    const voice = formData.get("voice") as string;
    const speed = formData.get("speed") as string;
    const output = formData.get("output") as string;

    if (!content) {
      toast("Please enter your text");
      return;
    }

    updateStore("isLoading", true);
    sendFirebaseEvent("text-to-speech");
    try {
      const reqBody = {
        input: content,
        voice,
        speed: Number(speed),
        response_format: output,
      };

      const tts = await fetchTextToSpeech(reqBody);
      updateStore("isLoading", false);
      updateStore("tts", tts);
      return;
    } catch (error) {
      console.error(error);
      updateStore("isLoading", false);
      toast("Fail to convert, please try again");
      return;
    }
  };

  return (
    <form action={handleAction} className="flex flex-col flex-1 h-full">
      <TtsTextarea />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 justify-end">
          <TtsVoiceSelect />
          <TtsSpeedSelect />
          <TtsResponseFormatSelect />
        </div>
        <div className="flex justify-end">
          <Button className="h-10" type="submit" disabled={isLoading}>
            {isLoading ? "Converting..." : "Convert"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TtsForm;
