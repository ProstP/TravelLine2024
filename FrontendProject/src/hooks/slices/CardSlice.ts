import { StateCreator } from "zustand";
import { Application } from "../../Entities/Application";
import { Deck } from "../../Entities/Deck";
import { Card } from "../../Entities/Card";

export type CardSlice = {
  addCardToDeck: (word: string, translation: string, idDeck: string) => void;
  deleteCardInDeck: (idCard: string, idDeck: string) => void;
  editCard: (word: string, translation: string, idCard: string, idDeck: string) => void;
};

export const createCardSlice: StateCreator<CardSlice & { app: Application }, [], [], CardSlice> = (set, get) => ({
  addCardToDeck: (word, translation, idDeck) => {
    const addCard = (deck: Deck) => {
      return Deck.AddNewCard(
        {
          id: Math.random() + "Card",
          word: word,
          translation: translation,
        },
        deck,
      );
    };

    set({
      ...get(),
      app: Application.EditDeck(idDeck, addCard, get().app),
    });
  },

  deleteCardInDeck: (idCard, idDeck) => {
    const deleteCard = (deck: Deck) => {
      return Deck.DeleteCard(idCard, deck);
    };

    set({
      ...get(),
      app: Application.EditDeck(idDeck, deleteCard, get().app),
    });
  },

  editCard: (word, translation, idCard, idDeck) => {
    const editCard = (deck: Deck) => {
      const editCardFields = (c: Card) => {
        return Card.EditCard(word, translation, c);
      };

      return Deck.EditCard(idCard, editCardFields, deck);
    };

    set({
      ...get(),
      app: Application.EditDeck(idDeck, editCard, get().app),
    });
  },
});
