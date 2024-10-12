'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuKey, LuLogOut, LuUserCircle } from 'react-icons/lu'

const AccountPageSidebar = () => {
  const pathname = usePathname();
  const buttonClassname = 'text-background flex items-center justify-start px-2 py-1 rounded hover:text-foreground hover:bg-background gap-2 text-sm '

  const MENU = [
    {
      icon: <LuUserCircle />,
      title: "Profile",
      href: "/accounts"
    },
    {
      icon: <LuKey />,
      title: "Change Password",
      href: "/accounts/change-password"
    },
    {
      icon: <LuLogOut />,
      title: "Logout",
      href: "/accounts/logout"
    },
  ]

  return (
    <div className='flex flex-col pr-4 bg-foreground rounded-l-md h-full gap-2'>
      {MENU.map((menu) =>
        <Link href={menu.href} key={menu.title} className={cn(buttonClassname, { 'bg-background text-foreground': menu.href === pathname })}>
          {menu.icon}
          {menu.title}
        </Link>
      )}
    </div>
  )
}

export default AccountPageSidebar