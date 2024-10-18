"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AccountSidebarMenu = () => {
  const pathname = usePathname();

  const MENU = [
    {
      title: "Profile",
      href: "/accounts",
    },
    {
      title: "Change Password",
      href: "/accounts/change-password",
    },
    {
      title: "Logout",
      href: "/accounts/logout",
    },
  ];

  return (
    <div>
      <div className="font-bold px-4 mb-2">Account</div>
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

export default AccountSidebarMenu;
