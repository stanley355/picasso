import { AiTwotoneQuestionCircle } from "react-icons/ai";

const BpsDynamicDataEmptySearchResult = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <AiTwotoneQuestionCircle className="text-5xl" />
      <div className="text-sm font-semibold">Data not found</div>
      <div className="text-xs">Change your filter or keyword</div>
    </div>
  );
};

export default BpsDynamicDataEmptySearchResult;
