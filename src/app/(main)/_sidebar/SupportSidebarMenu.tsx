"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const SupportSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="font-bold px-4 mb-2">Support</div>
      <div className="flex flex-col gap-2">
        <Link
          href="/help"
          className={cn(
            buttonVariants({
              variant: pathname === "/help" ? "secondary" : "ghost",
            }),
            "justify-start",
          )}
        >
          Help
        </Link>
      </div>
    </div>
  );
};

export default SupportSidebarMenu;
