import { create } from "zustand";
import { Application } from "../Entities/Application";
import { createJSONStorage, persist } from "zustand/middleware";
import { CardSlice, createCardSlice } from "./slices/CardSlice";
import { createDeckSlice, DeckSlice } from "./slices/DeckSlice";

type StoreData = CardSlice &
  DeckSlice & {
    app: Application;
    selectDeckToLearn: (id: string) => void;
  };

export const useStore = create<StoreData>()(
  persist(
    (...s) => ({
      app: {
        decks: [],
        selectedDeckToLearn: "",
      },
      selectDeckToLearn: (id: string) => s[0]({ ...s[1](), app: { ...s[1]().app, selectedDeckToLearn: id } }),
      ...createCardSlice(...s),
      ...createDeckSlice(...s),
    }),
    {
      name: "tanya-zustand-example",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ ...state, actions: undefined }),
    },
  ),
);
