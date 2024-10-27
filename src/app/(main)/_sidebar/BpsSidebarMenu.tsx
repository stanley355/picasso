"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const BpsSidebarmenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="font-bold px-4 mb-2 flex items-center gap-2">
        <Image src="/images/bps.png" alt="BPS" width={25} height={25} />
        Statistics
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/statistic/census"
          className={cn(
            buttonVariants({
              variant: pathname === "/blame-me" ? "default" : "ghost",
            }),
            "justify-start",
          )}
        >
          Census Data
        </Link>
      </div>
    </div>
  );
};

export default BpsSidebarmenu;
