"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const AccountHeaderSelect = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select defaultValue={pathname} onValueChange={(value) => router.push(value)}>
      <SelectTrigger
        className={cn(
          "border-none bg-foreground text-background focus:ring-transparent ring-offset-0 ring-offset-transparent h-8 md:hidden px-0",
          { hidden: !pathname.includes("/accounts") },
        )}
      >
        <span className="mr-2">/</span>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border shadow">
        <SelectItem value="/accounts">Profile</SelectItem>
        <SelectItem value="/accounts/change-password">
          Change Password
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AccountHeaderSelect;