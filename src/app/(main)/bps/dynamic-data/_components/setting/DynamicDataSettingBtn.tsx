
import { buttonVariants } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DynamicDataLinkExport from "@/app/(main)/bps/dynamic-data/_components/export/LinkExport";

const DynamicDataSettingBtn = () => {

  return (
    <div className="flex justify-between mt-8">
      <Link
        href="/bps/dynamic-data/search"
        className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
      >
        <LuArrowLeft />
        <span>To search</span>
      </Link>
      <DynamicDataLinkExport />
    </div>
  );
};

export default DynamicDataSettingBtn;
