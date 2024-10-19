import { create } from "zustand";

type TUseSttStore = {
  isLoading: boolean;
  text: string;
  updateStore: (key: keyof TUseSttStore, value: any) => void;
};

export const useSttStore = create<TUseSttStore>((set) => ({
  isLoading: false,
  text: "",

  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
