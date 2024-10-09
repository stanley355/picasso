
import { create } from "zustand";

type TUseRegisterStore = {
  errorMsg: string;
  isLoading: boolean;
  updateStore: (key: keyof TUseRegisterStore, value: any) => void
}

export const useRegisterStore = create<TUseRegisterStore>((set) => ({
  errorMsg: "",
  isLoading: false,
  updateStore: (key, value) => set((state) => ({
    ...state,
    [key]: value
  })),
}))