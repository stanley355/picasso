'use client'
import {LuArrowUpCircle} from "react-icons/lu";
import {toast} from "react-toastify";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useLoginStore} from "@/app/accounts/login/_stores/useLoginStore";
import {useShallow} from "zustand/shallow";
import {getUserToken} from "@/lib/getUserToken";
import {fetchBpsDynamicDataVarList} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";

const BpsSearchBox = () => {
    const { updateLoginStore } = useLoginStore(
        useShallow((state) => ({
            updateLoginStore: state.updateStore,
        })),
    );

    const handleAction =async (formData: FormData) => {
        const token = await getUserToken();
        if (!token) {
            updateLoginStore("showLoginModal", true);
            return;
        }

        const keyword= formData.get('keyword') as string;
        if (!keyword) {
            toast("Your search is empty?")
            return;
        }
        const searchResult = await fetchBpsDynamicDataVarList(keyword.replaceAll(" ", "+"));
        console.log(searchResult)
        return;
    }

    return (
        <form className="flex items-center border rounded-full pr-1 bg-background" action={handleAction}>
            <Input
                name="keyword"
                className="rounded-full rounded-r-none border-none bg-background focus:outline-none pl-4 text-xs"
                placeholder="Search anything"
            />
            <Button size="icon" className="rounded-full text-2xl" variant="ghost">
                <LuArrowUpCircle/>
            </Button>
        </form>
    )
};

export default BpsSearchBox;