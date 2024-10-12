import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const NoTokenHeader = () => {
  return (
    <div className="flex items-center gap-1 text-sm md:gap-2">
      <Link
        href="/accounts/login"
        className={cn(buttonVariants({ variant: "secondary" }), "h-8")}
      >
        Login
      </Link>
      <Link
        href="/accounts/register"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "hidden md:inline h-8",
        )}
      >
        Sign up
      </Link>
    </div>
  )
}

export default NoTokenHeader