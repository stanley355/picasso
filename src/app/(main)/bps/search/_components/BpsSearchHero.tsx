import Image from "next/image";

const BpsSearchHero = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <Image src="/images/bps.png" alt="BPS" width={100} height={100}/>
            <h2 className="text-sm">Search any information about Indonesia</h2>
            <h3 className="text-xs">*BPS Web API Collaboration</h3>
        </div>
    )
};

export default BpsSearchHero;