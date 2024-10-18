import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const MainHeader = () => {
  return (
    <nav className="flex justify-between items-center mb-2">
      <HeaderLeft />
      <HeaderRight />
    </nav>
  );
};

export default MainHeader;
