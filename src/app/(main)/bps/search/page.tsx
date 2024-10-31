import BpsSearchHead from "@/app/(main)/bps/search/_components/BpsSearchHead";
import BpsSearchBox from "@/app/(main)/bps/search/_components/BpsSearchBox";
import BpsSearchHero from "@/app/(main)/bps/search/_components/BpsSearchHero";

const BpsSearchPage = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <BpsSearchHead/>
            <div className="p-2 flex flex-col flex-1">
                <BpsSearchHero />
                <BpsSearchBox/>
            </div>
        </div>
    )
};

export default BpsSearchPage