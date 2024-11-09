"use client";
import { Button } from "@/components/ui/button";
import { FaFileCsv } from "react-icons/fa";

type TDynamicDataCsvExport = {
  title: string;
  datacontent: Record<string, string | number>[];
};

const DynamicDataCsvExport = ({
  datacontent,
  title,
}: TDynamicDataCsvExport) => {
  const onClick = () => {
    const head = Object.keys(datacontent[0]).join(",") + "\n";
    const rows = datacontent
      .map((obj) => Object.values(obj).join(","))
      .join("\n");
    const csvContent = "data:text/csv;charset=utf-8," + head + rows;
    const encodedUri = encodeURI(csvContent);
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", encodedUri);
    downloadLink.setAttribute("download", `${title}.csv`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Button
      className="gap-2 bg-blue-500 text-white hover:bg-blue-600 hover:border-blue-600"
      variant="outline"
      onClick={onClick}
    >
      <FaFileCsv className="text-xl" />
      CSV
    </Button>
  );
};

export default DynamicDataCsvExport;
