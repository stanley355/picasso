import LoginModal from "../accounts/login/_components/LoginModal";
import MainHeader from "./_header";
import HeaderMobileMenu from "./_header/HeaderMobileMenu";
import Sidebar from "./_sidebar";

type TMainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <div className="h-screen w-full overflow-hidden p-2 flex flex-col md:p-4 bg-background">
      <MainHeader />
      <div className="rounded-lg flex-1 md:flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto rounded-lg h-full bg-foreground relative">
          {children}
          <LoginModal />
          <HeaderMobileMenu />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
