import { Button } from "@/components/ui/button";
import TtsResponseFormatSelect from "./TtsResponseFormatSelect";
import TtsSpeedSelect from "./TtsSpeedSelect";
import TtsTextarea from "./TtsTextarea";
import TtsVoiceSelect from "./TtsVoiceSelect";

const TtsForm = () => {

  // const handleAction = async (formData: FormData) => {
  //   // console.log(formData);
  //   const data = Object.fromEntries(formData)
  //   console.log(data);

  // }

  return (
    <form action="" className="flex flex-col flex-1 h-full">
      <TtsTextarea />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <TtsVoiceSelect />
          <TtsSpeedSelect />
          <TtsResponseFormatSelect />
        </div>
        <Button className="h-10">Convert</Button>
      </div>
    </form>
  );
};

export default TtsForm;
