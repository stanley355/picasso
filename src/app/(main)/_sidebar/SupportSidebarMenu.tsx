"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const SupportSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="font-bold px-4 mb-2">Error?</div>
      <div className="flex flex-col gap-2">
        <Link
          href="/blame-me"
          className={cn(
            buttonVariants({
              variant: pathname === "/blame-me" ? "default" : "ghost",
            }),
            "justify-start",
          )}
        >
          Blame me!
        </Link>
      </div>
    </div>
  );
};

export default SupportSidebarMenu;
