import { create } from "zustand";

type TUseLoginStore = {
  errorMsg: string;
  isLoading: boolean;
  updateStore: (key: keyof TUseLoginStore, value: any) => void
}

export const useLoginStore = create<TUseLoginStore>((set) => ({
  errorMsg: "",
  isLoading: false,
  updateStore: (key, value) => set((state) => ({
    ...state,
    [key]: value
  })),
}))