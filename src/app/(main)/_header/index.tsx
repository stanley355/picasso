import Link from "next/link";
import { LuBinary } from "react-icons/lu";
import HeaderRight from "./HeaderRight";

const MainHeader = () => {
  return (
    <nav className="flex justify-between items-center mb-2 md:mb-4">
      <Link href="/" className="flex items-center">
        <LuBinary className="text-3xl" />
        <span className="text-lg font-semibold">01AI Platform</span>
      </Link>
      <HeaderRight />
    </nav>
  );
};

export default MainHeader;
