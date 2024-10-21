import { TTextToSpeech } from "@/lib/api/author/types/TTextToSpeech";
import { create } from "zustand";

type TUseTtsStore = {
  isLoading: boolean;
  tts: TTextToSpeech | null;
  updateStore: (key: keyof TUseTtsStore, value: any) => void;
};

export const useTtsStore = create<TUseTtsStore>((set) => ({
  isLoading: false,
  tts: null,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
