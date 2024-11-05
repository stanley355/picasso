"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const BpsSidebarMenu = () => {
  const pathname = usePathname();

  const MENU = [
    {
      title: "Dynamic Data",
      href: "/bps/dynamic-data/search",
    },
  ];

  return (
    <div>
      <div className="font-bold px-4 mb-2 flex gap-2 items-center">
        <Image
          src="/images/indonesia.svg"
          alt="Indonesia Statistic"
          width={25}
          height={25}
        />
        <span>Statistics</span>
      </div>
      <div className="flex flex-col gap-2">
        {MENU.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              buttonVariants({
                variant: item.href.includes(pathname) ? "default" : "ghost",
              }),
              "justify-start",
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BpsSidebarMenu;
