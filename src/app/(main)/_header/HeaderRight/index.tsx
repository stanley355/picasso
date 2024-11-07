import { cookies } from "next/headers";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LuUser } from "react-icons/lu";

import HeaderRightMobileBtn from "./HeaderRightMobileBtn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const HeaderRight = () => {
  const token = cookies().get("token");

  return (
    <div className="flex items-center justify-center">
      <HeaderRightMobileBtn />
      {token?.value ? (
        <div className="hidden md:flex items-center gap-2">
          <ThemeButton />
          <Link

            href="/accounts"
            className={cn(buttonVariants({ variant: "default", size: "icon", }))}
          >
            <LuUser />
          </Link>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/accounts/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href="/accounts/register"
            className={buttonVariants({ variant: "default" })}
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderRight;
