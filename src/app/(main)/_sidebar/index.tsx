import AccountSidebarMenu from "./AccountSidebarMenu";
import LanguageSidebarMenu from "./LanguageSidebarMenu";
import SupportSidebarMenu from "./SupportSidebarMenu";
import BpsSidebarMenu from "@/app/(main)/_sidebar/BpsSidebarMenu";

const Sidebar = () => {
  return (
    <div className="hidden md:flex pr-4 flex-col gap-4">
      <LanguageSidebarMenu />
        <BpsSidebarMenu />
      <AccountSidebarMenu />
      <SupportSidebarMenu />
    </div>
  );
};

export default Sidebar;
