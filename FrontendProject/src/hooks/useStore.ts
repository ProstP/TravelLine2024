import { create } from "zustand";
import { Application } from "../Entities/Application";
import { Deck } from "../Entities/Deck";
import { Card } from "../Entities/Card";

type StoreData = {
  app: Application;
  actions: {
    addDeck: (deck: Deck) => void;
    deleteDeck: (id: string) => void;
    addCardToDeck: (card: Card, idDeck: string) => void;
    deleteCardInDeck: (idCard: string, idDeck: string) => void;
    editCard: (word: string, translation: string, idCard: string, idDeck: string) => void;
  };
};

export const useStore = create<StoreData>((set, get) => ({
  app: {
    decks: [],
    deckCounter: 0,
  },
  actions: {
    addDeck: (deck: Deck) => set({ ...get(), app: Application.AddNewDeck(deck, get().app) }),
    deleteDeck: (id: string) => set({ ...get(), app: Application.DeleteDeck(id, get().app) }),

    addCardToDeck(card, idDeck) {
      const app = { ...get().app };
      const decks = app.decks;
      const deckIndex = decks.findIndex(d => d.id === idDeck);
      if (deckIndex === -1) {
        return;
      }

      decks[deckIndex] = Deck.AddNewCard(card, decks[deckIndex]);

      set({
        ...get(),
        app: app,
      });
    },
    deleteCardInDeck(idCard, idDeck) {
      const app = { ...get().app };
      const decks = app.decks;
      const deckIndex = decks.findIndex(d => d.id === idDeck);
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
      const app = { ...get().app };
      const decks = app.decks;
      const deckIndex = decks.findIndex(d => d.id === idDeck);
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
        app: app,
      });
    },
  },
}));
