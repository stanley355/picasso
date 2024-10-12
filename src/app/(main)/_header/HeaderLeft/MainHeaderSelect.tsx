"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MainHeaderSelect = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      defaultValue={pathname}
      onValueChange={(value) => router.push(value)}
    >
      <SelectTrigger className="border-none bg-foreground text-background ring-offset-0 ring-offset-transparent h-8">
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
