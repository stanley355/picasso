import { create } from "zustand";

type TUseSttStore = {
  isLoading: boolean;
  completions: string[];
  updateStore: (key: keyof TUseSttStore, value: any) => void;
};

export const useSttStore = create<TUseSttStore>((set) => ({
  isLoading: false,
  completions: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
