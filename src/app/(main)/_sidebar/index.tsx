"use client";
import AccountPageSidebar from "./AccountPageSidebar";
import { usePathname } from "next/navigation";
import LanguageaiSidebar from "./LanguageaiSidebar";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block py-2">
      {pathname.includes("/accounts") && <AccountPageSidebar />}
      {pathname.includes("/languageai") && <LanguageaiSidebar />}
    </div>
  );
};

export default Sidebar;
