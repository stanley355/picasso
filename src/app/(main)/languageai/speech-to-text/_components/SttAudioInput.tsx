import { useRef, useState, memo, ChangeEvent } from "react";
import { useShallow } from "zustand/shallow";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { toast } from "react-toastify";
import { IoIosCloudUpload } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { getUserToken } from "@/lib/getUserToken";

const SttAudioInput = () => {
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const token = await getUserToken();
    if (!token) {
      updateLoginStore("showLoginModal", true);
      return;
    }

    const target = e.target as any;
    const file = target.files[0];
    if (file) {
      const maxFileSize = 24 * 1024 * 1024; // 24MB
      if (file?.size > maxFileSize) {
        toast("Max file size is 24MB");
        return;
      }

      setFile(file);
      return;
    }
  };

  return (
    <div className="w-full mb-4 flex-1">
      <input
        type="file"
        id="file"
        name="file"
        ref={inputRef}
        accept="*.mp3, *.mp4, *.wav"
        className="invisible h-0"
        onChange={handleUpload}
      />
      <Button
        type="button"
        className="w-full h-full rounded-none flex-col gap-2"
        variant="ghost"
        onClick={() => inputRef.current.click()}
      >
        <IoIosCloudUpload className="text-3xl" />
        <div className="line-clamp-1 max-w-[75%]">
          {file?.name ? file.name : "Upload your file here"}
        </div>
        <div>{file?.size ? `${file.size % 1024} KB` : "*.mp3,.mp4, .wav"}</div>
      </Button>
    </div>
  );
};

export default memo(SttAudioInput);
