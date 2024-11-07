"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const LanguageSidebarMenu = () => {
  const pathname = usePathname();

  const MENU = [
    {
      title: "Checkbot",
      href: "/languageai/checkbot",
    },
    {
      title: "Translate",
      href: "/languageai/translate",
    },
    {
      title: "Text to Speech",
      href: "/languageai/text-to-speech",
    },
    {
      title: "Speech to Text",
      href: "/languageai/speech-to-text",
    },
  ];

  return (
    <div>
      <div className="font-semibold px-4 mb-1 text-sm">LANGUAGEAI</div>
      <div className="flex flex-col gap-1">
        {MENU.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              buttonVariants({
                variant: pathname === item.href ? "default" : "ghost",
              }),
              "justify-start h-8",
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSidebarMenu;
