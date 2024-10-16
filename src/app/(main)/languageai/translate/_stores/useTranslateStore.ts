import { create } from "zustand";

type TUseTranslateStore = {
  isLoading: boolean;
  completions: string[];
  updateStore: (key: keyof TUseTranslateStore, value: any) => void;
};

export const useTranslateStore = create<TUseTranslateStore>((set) => ({
  isLoading: false,
  completions: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
