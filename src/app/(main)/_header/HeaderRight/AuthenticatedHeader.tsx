import Link from "next/link";
import { LuUser } from "react-icons/lu";
// import ThemeButton from "./ThemeButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ThemeButton = dynamic(() => import('./ThemeButton'), { ssr: false })

const AuthenticatedHeader = () => {
  return (
    <div className="mr-2 flex items-center gap-2 md:gap-4">
      <ThemeButton />
      <Link href="/accounts" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), 'w-8 h-8')}>
        <LuUser className="text-xl" />
      </Link>
    </div>
  );
};

export default AuthenticatedHeader;
