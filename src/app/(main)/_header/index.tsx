import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Link from "next/link";

const MainHeader = () => {
  const token = cookies().get("token");

  return (
    <div className="flex justify-between items-center mb-2">
      <Link href="/languageai" className="text-background">
        Languageai
      </Link>
      <div
        className={cn("flex items-center gap-1 text-sm md:gap-2", {
          hidden: token?.value,
        })}
      >
        <Link
          href="/accounts/login"
          className="bg-background px-2 py-1 text-foreground rounded-lg"
        >
          Login
        </Link>
        <Link
          href="/accounts/register"
          className="bg-background px-2 py-1 text-foreground rounded-lg"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
