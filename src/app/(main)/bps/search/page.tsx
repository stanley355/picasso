import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchHero from "@/app/(main)/bps/search/_components/BpsSearchHero";

const BpsSearchPage = async () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-semibold border-b p-2">Statistic Search (BETA)</h1>
        <div className="h-full flex flex-col p-2">

      <BpsSearchHero />
      <BpsSearchBox />
        </div>
    </div>
  );
};

export default BpsSearchPage;
