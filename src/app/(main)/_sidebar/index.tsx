import AccountSidebarMenu from "./AccountSidebarMenu";
import LanguageSidebarMenu from "./LanguageSidebarMenu";
import SupportSidebarMenu from "./SupportSidebarMenu";

const Sidebar = () => {
  return (
    <div className="hidden md:flex pr-4 flex-col gap-4">
      <LanguageSidebarMenu />
      <AccountSidebarMenu />
      <SupportSidebarMenu />
    </div>
  );
};

export default Sidebar;
