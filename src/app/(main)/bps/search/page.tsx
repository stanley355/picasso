import BpsSearchHead from "@/app/(main)/bps/search/_components/BpsSearchHead";
import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearch from "@/app/(main)/bps/search/_components/BpsSearch";

const BpsSearchPage = () => {
  return (
    <div className="flex flex-col h-full">
      <BpsSearchHead />
      <div className="flex-1 p-2 flex flex-col">
        <BpsSearch />
        <BpsSearchBox />
      </div>
    </div>
  );
};

export default BpsSearchPage;
