import { LuLoader2 } from "react-icons/lu";

const DynamicDataLoading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-h-96 md:max-h-[80vh]">
      <LuLoader2 className="animate-spin text-5xl mb-4" />
      <div className="text-lg">Loading...</div>
    </div>
  );
};

export default DynamicDataLoading;
