import {create} from "zustand";
import {TBpsDynamicDataVar} from "@/lib/api/bps/dynamicData/fetchBpsDynamicDataVarList";
import {TBpsPageAndCount} from "@/lib/api/bps/types/TBpsPageAndCount";

type TUseBpsSearchStore = {
    isLoading: boolean;
    showDynamicData: boolean;
    pageAndCount: TBpsPageAndCount | null,
    dynamicData: string | TBpsDynamicDataVar[]
    updateStore: (key: keyof TUseBpsSearchStore, value: any) => void;
};

export const useBpsSearchStore = create<TUseBpsSearchStore>((set) => ({
    isLoading: false,
    showDynamicData: false,
    pageAndCount: null,
    dynamicData: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
