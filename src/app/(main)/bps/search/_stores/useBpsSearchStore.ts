import { create } from "zustand";

type TUseBpsSearchStore= {
  isLoading: boolean;
  updateStore: (key: keyof TUseBpsSearchStore, value: any) => void;
};

export const useBpsSearchStore= create<TUseBpsSearchStore>((set) => ({
  isLoading: false,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
