import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchHero from "@/app/(main)/bps/search/_components/BpsSearchHero";
import {fetchBpsDomainList, TBpsDomain} from "@/lib/api/bps/fetchBpsDomainList";

const BpsSearchPage = async () => {
    const domains = await  fetchBpsDomainList();
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-semibold border-b p-2">Statistic Search</h1>
      <BpsSearchHero />
      <BpsSearchBox domains={domains?.data[1] as unknown as TBpsDomain[]} />
    </div>
  );
};

export default BpsSearchPage;
