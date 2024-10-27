import AccountSidebarMenu from "./AccountSidebarMenu";
import LanguageSidebarMenu from "./LanguageSidebarMenu";
import SupportSidebarMenu from "./SupportSidebarMenu";
// import BpsSidebarmenu from "./BpsSidebarMenu";

const Sidebar = () => {
  return (
    <div className="hidden md:flex pr-4 flex-col gap-4">
      <LanguageSidebarMenu />
      {/*<BpsSidebarmenu />*/}
      <AccountSidebarMenu />
      <SupportSidebarMenu />
    </div>
  );
};

export default Sidebar;
