"use client";
import dynamic from "next/dynamic";
import { useShallow } from "zustand/shallow";
import { IoIosApps, IoIosClose } from "react-icons/io";

import { useHeaderStore } from "../_store/useHeaderStore";
import { Button } from "@/components/ui/button";

const ThemeButton = dynamic(() => import("./ThemeButton"), { ssr: false });

const HeaderRightMobileBtn = () => {
  const { showMobileMenu, updateStore } = useHeaderStore(
    useShallow((state) => ({
      showMobileMenu: state.showMobileMenu,
      updateStore: state.updateStore,
    })),
  );

  return (
    <div className="flex gap-2 items-center md:hidden">
      <ThemeButton />
      <Button
        size="icon"
        onClick={() => updateStore("showMobileMenu", !showMobileMenu)}
      >
        {showMobileMenu ? (
          <IoIosClose className="text-3xl" />
        ) : (
          <IoIosApps className="text-xl" />
        )}
      </Button>
    </div>
  );
};

export default HeaderRightMobileBtn;
