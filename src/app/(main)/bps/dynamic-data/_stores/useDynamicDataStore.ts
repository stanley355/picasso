import { create } from "zustand";

export enum EDynamicDataDisplay {
    Table = 'Table',
    Area = 'Area',
    Bar = 'Bar'
}

type TUseDynamicDataStore = {
    display: string;
    updateStore: (key: keyof TUseDynamicDataStore, value: any) => void;
};

export const useDynamicDataStore = create<TUseDynamicDataStore>((set) => ({
    display: "",
    updateStore: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value,
        })),
}));
