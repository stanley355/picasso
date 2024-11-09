"use client";
import { Button } from "@/components/ui/button";
import { LuFileJson } from "react-icons/lu";

type TDynamicDataJsonExport = {
  title: string;
  datacontent: Record<string, string | number>[];
};

const DynamicDataJsonExport = ({
  datacontent,
  title,
}: TDynamicDataJsonExport) => {
  const onClick = () => {
    const jsonBlob = new Blob([JSON.stringify(datacontent)], {
      type: "application/json",
    });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(jsonBlob);
    downloadLink.setAttribute("download", `${title}.json`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Button
      className="gap-2 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600"
      variant="outline"
      onClick={onClick}
    >
      <LuFileJson className="text-xl" />
      Json
    </Button>
  );
};

export default DynamicDataJsonExport;
