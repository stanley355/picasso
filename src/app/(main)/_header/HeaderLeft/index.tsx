"use client";
import { usePathname } from "next/navigation";
import AccountHeaderSelect from "./AccountHeaderSelect";
import LanguageaiHeaderSelect from "./LanguageaiHeaderSelect";
import MainHeaderSelect from "./MainHeaderSelect";
import { LuBinary } from "react-icons/lu";
import HeaderLeftLogo from "./HeaderLeftLogo";

const HeaderLeft = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center">
      <HeaderLeftLogo />
      {/* <LuBinary />
      <span>01AI Platform</span> */}
      {/* <MainHeaderSelect />
      {pathname.includes("/accounts") && <AccountHeaderSelect />}
      {pathname.includes("/languageai") && <LanguageaiHeaderSelect />} */}
    </div>
  );
};

export default HeaderLeft;
