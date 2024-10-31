import {AiTwotoneQuestionCircle} from "react-icons/ai";

const BpsEmptyHero = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <AiTwotoneQuestionCircle className="text-5xl" />
            <h2 className="text-sm">No data found</h2>
            <h3 className="text-xs">*Try again or rephrase your search</h3>
        </div>
    )
};

export default BpsEmptyHero;
