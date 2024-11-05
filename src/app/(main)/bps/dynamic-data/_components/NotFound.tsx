"use client";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const DynamicDataNotFound = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-4">
      <AiTwotoneQuestionCircle className="text-5xl" />
      <div>Data not found</div>
      <div>Check the setting or...</div>
      <Button onClick={() => router.back()}>Back to previous page</Button>
    </div>
  );
};

export default DynamicDataNotFound;
