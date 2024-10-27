"use client";
import { useShallow } from "zustand/shallow";
import {IoIosApps, IoIosClose, IoIosMenu} from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useHeaderStore } from "../_store/useHeaderStore";
import ThemeButton from "@/app/(main)/_header/HeaderRight/ThemeButton";

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
