import { useRef, useState, memo, ChangeEvent } from "react";
import { useShallow } from "zustand/shallow";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { toast } from "react-toastify";
import { IoIosAperture, IoIosCloudUpload } from "react-icons/io";

import { Button, buttonVariants } from "@/components/ui/button";
import { getUserToken } from "@/lib/getUserToken";
import { useSttStore } from "../_stores/useSttStore";
import { cn } from "@/lib/utils";

const SttAudioInput = () => {
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { isLoading } = useSttStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
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
    <div className="w-full flex-1 px-4 pt-4">
      <Button
        type="button"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "h-full w-full gap-2 flex-col",
        )}
        variant="ghost"
        onClick={() => inputRef.current.click()}
        disabled={isLoading}
      >
        {isLoading ? (
          <IoIosAperture className="text-3xl animate-spin" />
        ) : (
          <IoIosCloudUpload className="text-3xl" />
        )}
        <div className="line-clamp-1 max-w-[75%]">
          {file?.name ? file.name : "Upload your file here"}
        </div>
        <div>{file?.size ? `${file.size % 1024} KB` : "*.mp3 or *.wav"}</div>
      </Button>
      <input
        type="file"
        id="file"
        name="file"
        ref={inputRef}
        accept="*.mp3, *.wav"
        className="invisible h-0"
        onChange={handleUpload}
      />
    </div>
  );
};

export default memo(SttAudioInput);
