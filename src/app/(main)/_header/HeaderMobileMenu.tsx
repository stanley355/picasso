"use client";
import { useShallow } from "zustand/shallow";
import { useHeaderStore } from "./_store/useHeaderStore";

import LanguageSidebarMenu from "../_sidebar/LanguageSidebarMenu";
import SupportSidebarMenu from "../_sidebar/SupportSidebarMenu";
import AccountSidebarMenu from "../_sidebar/AccountSidebarMenu";
import BpsSidebarMenu from "@/app/(main)/_sidebar/BpsSidebarMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HeaderMobileMenu = () => {
  const { showMobileMenu, updateStore } = useHeaderStore(
    useShallow((state) => ({
      showMobileMenu: state.showMobileMenu,
      updateStore: state.updateStore,
    })),
  );

  if (!showMobileMenu) return null;

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-foreground p-2">
      <Tabs defaultValue="0">
        <TabsList>
          <TabsTrigger value="0">AI</TabsTrigger>
          <TabsTrigger value="1">Account</TabsTrigger>
        </TabsList>
        <TabsContent
          value="0"
          className="mt-4"
          onClick={() => updateStore("showMobileMenu", false)}
        >
          <div className="flex flex-col gap-2">
            <LanguageSidebarMenu />
            <BpsSidebarMenu />
            <SupportSidebarMenu />
          </div>
        </TabsContent>
        <TabsContent
          value="1"
          className="mt-4"
          onClick={() => updateStore("showMobileMenu", false)}
        >
          <AccountSidebarMenu />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HeaderMobileMenu;
