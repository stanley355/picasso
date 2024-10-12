"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";

const MainHeaderSelect = () => {
  const pathname = usePathname();
  const router = useRouter();

  const defaulValue = useMemo(() => {
    if (pathname.includes('/accounts')) {
      return "/accounts"
    }

    return ''
  }, [pathname])

  return (
    <Select
      defaultValue={defaulValue}
      onValueChange={(value) => router.push(value)}
    >
      <SelectTrigger className="border-none bg-foreground text-background focus:ring-transparent ring-offset-0 ring-offset-transparent h-8 px-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="/accounts">Account</SelectItem>
        <SelectItem value="/languageai">Languageai</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MainHeaderSelect;
