import { Card } from "./Card";

export type Deck = {
  id: string;
  name: string;
  cards: Card[];
};

const AddNewCard = (newCard: Card, deck: Deck): Deck => {
  if (deck.cards.some(c => c.id == newCard.id || c.word == newCard.word)) {
    return deck;
  }

  return {
    ...deck,
    cards: [...deck.cards, newCard],
  };
};

const DeleteCard = (idCard: string, deck: Deck): Deck => {
  const newCards = deck.cards.filter(c => c.id !== idCard);

  return {
    ...deck,
    cards: newCards,
  };
};

export const Deck = { AddNewCard, DeleteCard };
