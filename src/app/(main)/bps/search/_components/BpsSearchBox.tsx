"use client";
import { LuArrowUpCircle, LuLoader2 } from "react-icons/lu";
import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/app/accounts/login/_stores/useLoginStore";
import { useShallow } from "zustand/shallow";
import { getUserToken } from "@/lib/getUserToken";
import { fetchBpsDynamicDataVarList } from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import { useBpsSearchStore } from "@/app/(main)/bps/search/_stores/useBpsSearchStore";
import { router } from "next/client";
import { useRouter } from "next/navigation";

const BpsSearchBox = () => {
  const router = useRouter();
  const { updateLoginStore } = useLoginStore(
    useShallow((state) => ({
      updateLoginStore: state.updateStore,
    })),
  );

  const { isLoading, updateStore } = useBpsSearchStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      updateStore: state.updateStore,
    })),
  );

  const handleAction = async (formData: FormData) => {
    const token = await getUserToken();
    if (!token) {
      updateLoginStore("showLoginModal", true);
      return;
    }

    const keyword = formData.get("keyword") as string;
    if (!keyword) {
      toast("Your search is empty?");
      return;
    }

    updateStore("isLoading", true);
    const cleanKeyword = keyword.replaceAll(" ", "+");
    router.push(`/bps/search/result?q=${cleanKeyword}`);
    updateStore("isLoading", false);
    return;
  };

  return (
    <form
      className="flex items-center border rounded-full pr-1 bg-background"
      action={handleAction}
    >
      <Input
        name="keyword"
        className="rounded-full rounded-r-none border-none bg-background focus:outline-none pl-4 text-xs disabled:bg-background"
        placeholder="Search anything"
        disabled={isLoading}
      />
      <Button
        size="icon"
        className="rounded-full text-2xl"
        variant="ghost"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <LuLoader2 className="animate-spin" />
        ) : (
          <LuArrowUpCircle />
        )}
      </Button>
    </form>
  );
};

export default BpsSearchBox;
