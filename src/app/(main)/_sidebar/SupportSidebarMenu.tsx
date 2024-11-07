"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const SupportSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="font-semibold px-4 mb-2 text-sm">ERROR?</div>
      <div className="flex flex-col gap-1">
        <Link
          href="/blame-me"
          className={cn(
            buttonVariants({
              variant: pathname === "/blame-me" ? "default" : "ghost",
            }),
            "justify-start h-8",
          )}
        >
          Blame me!
        </Link>
      </div>
    </div>
  );
};

export default SupportSidebarMenu;
