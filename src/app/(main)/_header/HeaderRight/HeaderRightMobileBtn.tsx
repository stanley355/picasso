import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosMenu } from "react-icons/io";

const HeaderRightMobileBtn = () => {
  return (
    <Button size="icon" variant="ghost" className="md:hidden">
      <IoIosMenu className="text-3xl" />
    </Button>
  );
};

export default HeaderRightMobileBtn;
