"use client";
import { usePathname } from "next/navigation";
import AccountHeaderSelect from "./AccountHeaderSelect";
import LanguageaiHeaderSelect from "./LanguageaiHeaderSelect";
import MainHeaderSelect from "./MainHeaderSelect";

const HeaderLeft = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center">
      <MainHeaderSelect />
      {pathname.includes("/accounts") && <AccountHeaderSelect />}
      {pathname.includes("/languageai") && <LanguageaiHeaderSelect />}
    </div>
  );
};

export default HeaderLeft;
