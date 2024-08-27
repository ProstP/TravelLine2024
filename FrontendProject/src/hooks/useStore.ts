import { create } from "zustand";
import { Application } from "../Entities/Application";
import { Deck } from "../Entities/Deck";
import { Card } from "../Entities/Card";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreData = {
  app: Application;
  actions: {
    addDeck: (name: string) => void;
    deleteDeck: (id: string) => void;
    addCardToDeck: (word: string, translation: string, idDeck: string) => void;
    deleteCardInDeck: (idCard: string, idDeck: string) => void;
    editCard: (word: string, translation: string, idCard: string, idDeck: string) => void;
  };
};

const GetAppAndDeckIndexById = (id: string, oldApp: Application) => {
  const app = { ...oldApp };
  const decks = app.decks;
  const deckIndex = decks.findIndex(d => d.id === id);

  return { app, decks, deckIndex };
};

export const useStore = create<StoreData>()(
  persist(
    (set, get) => ({
      app: {
        decks: [],
        deckCounter: 0,
      },
      actions: {
        addDeck: (name: string) =>
          set({
            ...get(),
            app: Application.AddNewDeck({ id: Math.random() + "Deck", name: name, cards: [] }, get().app),
          }),

        deleteDeck: (id: string) => set({ ...get(), app: Application.DeleteDeck(id, get().app) }),

        addCardToDeck(word, translation, idDeck) {
          const { app, decks, deckIndex } = GetAppAndDeckIndexById(idDeck, get().app);
          if (deckIndex === -1) {
            return;
          }

          decks[deckIndex] = Deck.AddNewCard(
            { id: Math.random() + "Card", word: word, translation: translation },
            decks[deckIndex],
          );

          set({
            ...get(),
            app: app,
          });
        },
        deleteCardInDeck(idCard, idDeck) {
          const { app, decks, deckIndex } = GetAppAndDeckIndexById(idDeck, get().app);
          if (deckIndex === -1) {
            return;
          }

          decks[deckIndex] = Deck.DeleteCard(idCard, decks[deckIndex]);

          set({
            ...get(),
            app: app,
          });
        },

        editCard(word, translation, idCard, idDeck) {
          const { app, decks, deckIndex } = GetAppAndDeckIndexById(idDeck, get().app);
          if (deckIndex === -1) {
            return;
          }

          const deck = decks[deckIndex];
          const cardIndex = deck.cards.findIndex(c => c.id === idCard);
          if (cardIndex === -1) {
            return;
          }

          deck.cards[cardIndex] = Card.EditCard(word, translation, deck.cards[cardIndex]);

          set({
            ...get(),
            app: {
              ...app,
              decks: [...decks],
            },
          });
        },
      },
    }),
    {
      name: "tanya-zustand-example",
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ ...state, actions: undefined }),
    },
  ),
);
