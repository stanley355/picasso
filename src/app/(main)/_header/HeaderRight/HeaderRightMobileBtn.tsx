"use client";
import { useShallow } from "zustand/shallow";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useHeaderStore } from "../_store/useHeaderStore";

const HeaderRightMobileBtn = () => {
  const { showMobileMenu, updateStore } = useHeaderStore(
    useShallow((state) => ({
      showMobileMenu: state.showMobileMenu,
      updateStore: state.updateStore,
    })),
  );

  return (
    <Button
      size="icon"
      variant="ghost"
      className="md:hidden"
      onClick={() => updateStore("showMobileMenu", !showMobileMenu)}
    >
      {showMobileMenu ? (
        <IoIosClose className="text-3xl" />
      ) : (
        <IoIosMenu className="text-3xl" />
      )}
    </Button>
  );
};

export default HeaderRightMobileBtn;
