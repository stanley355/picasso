"use client";
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import { useHeaderStore } from "./_store/useHeaderStore";

import { Button } from "@/components/ui/button";

import LanguageSidebarMenu from "../_sidebar/LanguageSidebarMenu";
import SupportSidebarMenu from "../_sidebar/SupportSidebarMenu";
import AccountSidebarMenu from "../_sidebar/AccountSidebarMenu";
// import BpsSidebarmenu from "../_sidebar/BpsSidebarMenu";
import { cn } from "@/lib/utils";

const HeaderMobileMenu = () => {
  const [isAccountTab, setIsAccountTab] = useState(false);
  const { showMobileMenu, updateStore } = useHeaderStore(
    useShallow((state) => ({
      showMobileMenu: state.showMobileMenu,
      updateStore: state.updateStore,
    })),
  );

  if (!showMobileMenu) return null;

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-foreground p-2">
      <div className="flex gap-2 mb-4">
        <Button
          className="flex-1"
          variant={isAccountTab ? "ghost" : "default"}
          onClick={() => setIsAccountTab(false)}
        >
          AI
        </Button>
        <Button
          className="flex-1"
          variant={isAccountTab ? "default" : "ghost"}
          onClick={() => setIsAccountTab(true)}
        >
          Account
        </Button>
      </div>

      <div
        className={cn("flex-col gap-4", isAccountTab ? "hidden" : "flex")}
        onClick={() => updateStore("showMobileMenu", false)}
      >
        <LanguageSidebarMenu />
        {/*<BpsSidebarmenu />*/}
        <SupportSidebarMenu />
      </div>
      <div
        className={cn(isAccountTab ? "block" : "hidden")}
        onClick={() => updateStore("showMobileMenu", false)}
      >
        <AccountSidebarMenu />
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
