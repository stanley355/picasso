"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsTranslate } from "react-icons/bs";
import { LuTerminalSquare } from "react-icons/lu";
import { PiFileAudioDuotone } from "react-icons/pi";

const LanguageaiSidebar = () => {
  const pathname = usePathname();
  const buttonClassname =
    "text-background flex items-center justify-start px-2 py-1 rounded hover:text-foreground hover:bg-background gap-2 text-sm ";

  const MENU = [
    {
      icon: <LuTerminalSquare />,
      title: "Checkbot",
      href: "/languageai/checkbot",
    },
    {
      icon: <BsTranslate />,
      title: "Translate",
      href: "/languageai/translate",
    },
    {
      icon: <PiFileAudioDuotone />,
      title: "Speech to Text",
      href: "/languageai/speech-to-text",
    },
    {
      icon: <PiFileAudioDuotone />,
      title: "Text to Speech",
      href: "/languageai/text-to-speech",
    },
  ];

  return (
    <div className="flex flex-col pr-4 bg-foreground rounded-l-md h-full gap-2">
      {MENU.map((menu) => (
        <Link
          href={menu.href}
          key={menu.title}
          className={cn(buttonClassname, {
            "bg-background text-foreground": menu.href === pathname,
          })}
        >
          {menu.icon}
          {menu.title}
        </Link>
      ))}
    </div>
  );
};

export default LanguageaiSidebar;
