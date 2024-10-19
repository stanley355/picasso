import {
  TTranscriptionSegment,
  TTranscriptionWord,
} from "@/lib/api/author/types/TTranscription";
import { create } from "zustand";

type TUseSttStore = {
  isLoading: boolean;
  text: string;
  words: TTranscriptionWord[] | null;
  segments: TTranscriptionSegment[] | null;
  updateStore: (key: keyof TUseSttStore, value: any) => void;
};

export const useSttStore = create<TUseSttStore>((set) => ({
  isLoading: false,
  text: "",
  words: null,
  segments: null,
  updateStore: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
