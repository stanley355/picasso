"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DynamicDataLabelSetting = () => {
  const searchParams = useSearchParams();
  const defaultChecked = searchParams.get("showLabel")
    ? searchParams.get("showLabel") === "1"
    : false;
  const router = useRouter();
  const pathname = usePathname();

  const onCheckedChange = (value: boolean) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("showLabel", value ? "1" : "0");
    const newQueryString = urlParams.toString();
    router.push(`${pathname}?${newQueryString}`);
  };

  return (
    <div className="flex items-center gap-4">
      <Label id="showLabel">Show Label:</Label>
      <Switch
        id="showLabel"
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export default DynamicDataLabelSetting;
