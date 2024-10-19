import Link from "next/link";
import HeaderRight from "./HeaderRight";

const MainHeader = () => {
  return (
    <nav className="flex justify-between items-center mb-2 md:mb-4">
      <Link href="/" className="flex items-center text-lg font-semibold px-2">
        Language AI
      </Link>
      <HeaderRight />
    </nav>
  );
};

export default MainHeader;
