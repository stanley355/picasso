import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Link from "next/link";
import HeaderLeft from "./HeaderLeft";

const MainHeader = () => {
  const token = cookies().get("token");

  return (
    <div className="flex justify-between items-center mb-2">
      <HeaderLeft />
      <div
        className={cn("flex items-center gap-1 text-sm md:gap-2", {
          hidden: token?.value,
        })}
      >
        <Link
          href="/accounts/login"
          className={cn(buttonVariants({ variant: "secondary" }), 'h-8')}
        >
          Login
        </Link>
        <Link
          href="/accounts/register"
          className={cn(buttonVariants({ variant: "secondary" }), "hidden md:inline h-8")}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
