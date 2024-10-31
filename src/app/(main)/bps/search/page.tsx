import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchHero from "@/app/(main)/bps/search/_components/BpsSearchHero";

const BpsSearchPage = () => {
    return (
        <div className="flex flex-col h-full">
            <h1 className="text-lg font-semibold border-b p-2">Statistic Search</h1>
            <BpsSearchHero/>
            <BpsSearchBox/>
        </div>
    );
};

export default BpsSearchPage;
