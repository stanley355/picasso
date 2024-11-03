import { create } from "zustand";

export enum EDynamicDataChart {
  Table = "Table",
  Area = "Area",
  Bar = "Bar",
}

type TUseDynamicDataStore = {
  chart: EDynamicDataChart;
  updateStore: (key: keyof TUseDynamicDataStore, value: any) => void;
};

export const useDynamicDataStore = create<TUseDynamicDataStore>((set) => ({
    chart: EDynamicDataChart.Table,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
