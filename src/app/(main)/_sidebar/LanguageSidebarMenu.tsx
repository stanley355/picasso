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
      <div className="font-bold px-4 mb-2">Languageai</div>
      <div className="flex flex-col gap-2">
        {MENU.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            className={cn(
              buttonVariants({
                variant: pathname === item.href ? "secondary" : "ghost",
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

export default LanguageSidebarMenu;
