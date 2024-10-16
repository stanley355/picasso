import { cn } from "@/lib/utils";
import React from "react";

type TModal = {
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ children, className }: TModal) => {
  return (
    <div
      className={cn(
        "bg-popover-foreground fixed top-0 left-0 w-full h-full flex items-center justify-center z-50",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
