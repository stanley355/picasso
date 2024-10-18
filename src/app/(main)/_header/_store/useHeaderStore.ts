import { create } from "zustand";

type TUseHeaderStore = {
  showMobileMenu: boolean;
  updateStore: (key: keyof TUseHeaderStore, value: any) => void;
};

export const useHeaderStore = create<TUseHeaderStore>((set) => ({
  showMobileMenu: false,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
