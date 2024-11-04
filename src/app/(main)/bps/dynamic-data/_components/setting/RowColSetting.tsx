"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";

const DynamicDataRowColSetting = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isDefaultRowCol = searchParams.get("isDefaultRowCol");

  const onValueChange = (value: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("isDefaultRowCol", value);
    const newQueryString = urlParams.toString();
    router.push(`${pathname}?${newQueryString}`);
  };

  return (
    <div className="mb-4">
      <Label>Row & Col Setting</Label>
      <Select
        name="isDefaultRowCol"
        defaultValue={isDefaultRowCol ? isDefaultRowCol : "0"}
        onValueChange={onValueChange}
      >
        <SelectTrigger id="isDefaultRowCol" className="h-10">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"0"}>Year to Domain</SelectItem>
          <SelectItem value={"1"} className="gap-2">
            Domain to Year
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DynamicDataRowColSetting;
