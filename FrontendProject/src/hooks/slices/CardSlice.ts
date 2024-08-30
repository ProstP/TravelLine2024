import { StateCreator } from "zustand";
import { Application } from "../../Entities/Application";
import { Deck } from "../../Entities/Deck";
import { Card } from "../../Entities/Card";

export type CardSlice = {
  addCardToDeck: (word: string, translation: string, idDeck: string) => void;
  deleteCardInDeck: (idCard: string, idDeck: string) => void;
  editCard: (word: string, translation: string, idCard: string, idDeck: string) => void;

  editDecks: (id: string, edit: (d: Deck) => Deck) => void;
};

export const createCardSlice: StateCreator<CardSlice & { app: Application }, [], [], CardSlice> = (set, get) => ({
  addCardToDeck: (word, translation, idDeck) => {
    const edit = (deck: Deck) => {
      return Deck.AddNewCard({ id: Math.random() + "Card", word: word, translation: translation }, deck);
    };

    get().editDecks(idDeck, edit);
  },

  deleteCardInDeck: (idCard, idDeck) => {
    const edit = (deck: Deck) => {
      return Deck.DeleteCard(idCard, deck);
    };

    get().editDecks(idDeck, edit);
  },

  editCard: (word, translation, idCard, idDeck) => {
    const edit = (deck: Deck) => {
      const newCards = deck.cards.map(card => {
        if (card.id !== idCard) {
          return card;
        }
        return Card.EditCard(word, translation, card);
      });
      return {
        ...deck,
        cards: newCards,
      };
    };

    get().editDecks(idDeck, edit);
  },
  editDecks: (id: string, edit: (deck: Deck) => Deck) => {
    const newDecks = get().app.decks.map(deck => {
      if (deck.id !== id) {
        return deck;
      }
      return edit(deck);
    });

    set({
      ...get(),
      app: {
        ...get().app,
        decks: newDecks,
      },
    });
  },
});
