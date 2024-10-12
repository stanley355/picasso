import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mb-2">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default MainHeader;
