import { create } from "zustand";

export enum EDynamicDataChart {
  Table = "Table",
  Area = "Area",
  Bar = "Bar",
  BarStack = "Bar - Stack",
}

type TUseDynamicDataStore = {
  updateStore: (key: keyof TUseDynamicDataStore, value: any) => void;
};

export const useDynamicDataStore = create<TUseDynamicDataStore>((set) => ({
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
