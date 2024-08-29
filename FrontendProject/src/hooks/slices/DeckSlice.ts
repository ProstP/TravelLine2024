import { StateCreator } from "zustand";
import { Application } from "../../Entities/Application";

export type DeckSlice = {
  addDeck: (name: string) => void;
  deleteDeck: (id: string) => void;
};

export const createDeckSlice: StateCreator<DeckSlice & { app: Application }, [], [], DeckSlice> = (set, get) => ({
  addDeck: (name: string) =>
    set({
      ...get(),
      app: Application.AddNewDeck({ id: Math.random() + "Deck", name: name, cards: [] }, get().app),
    }),

  deleteDeck: (id: string) => set({ ...get(), app: Application.DeleteDeck(id, get().app) }),
});
