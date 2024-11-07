"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AccountSidebarMenu = () => {
  const pathname = usePathname();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = document.cookie.includes("token");
    setHasToken(token);
  }, []);

  const BASE_MENU = [
    {
      title: "Login",
      href: "/accounts/login",
    },
    {
      title: "Sign up",
      href: "/accounts/register",
    },
  ];

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
      <div className="font-semibold px-4 mb-2 text-sm">ACCOUNT</div>
      <div className={cn("flex-col gap-1", hasToken ? "hidden" : "flex")}>
        {BASE_MENU.map((item) => (
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
      <div className={cn("flex-col gap-1", hasToken ? "flex" : "hidden")}>
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

export default AccountSidebarMenu;
