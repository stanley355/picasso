import { create } from "zustand";

type TUseLoginStore = {
  isLoading: boolean;
  showLoginModal: boolean;
  updateStore: (key: keyof TUseLoginStore, value: any) => void;
};

export const useLoginStore = create<TUseLoginStore>((set) => ({
  isLoading: false,
  showLoginModal: false,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
