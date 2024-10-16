import { create } from "zustand";

type TUseCheckbotStore = {
  isLoading: boolean;
  completions: string[];
  updateStore: (key: keyof TUseCheckbotStore, value: any) => void;
};

export const useCheckbotStore = create<TUseCheckbotStore>((set) => ({
  isLoading: false,
  completions: [],
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
