
import { create } from "zustand";

type TUseRegisterStore = {
  isLoading: boolean;
  updateStore: (key: keyof TUseRegisterStore, value: any) => void
}

export const useRegisterStore = create<TUseRegisterStore>((set) => ({
  isLoading: false,
  updateStore: (key, value) => set((state) => ({
    ...state,
    [key]: value
  })),
}))