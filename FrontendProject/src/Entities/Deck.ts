import { Card } from "./Card";

export type Deck = {
  id: string;
  name: string;
  cards: Card[];
  cardCounter: number;
};

const AddNewCard = (newCard: Card, deck: Deck): Deck => {
  if (deck.cards.some(c => c.id == newCard.id || c.word == newCard.word)) {
    return deck;
  }

  const newCounter = deck.cardCounter + 1;

  return {
    ...deck,
    cardCounter: newCounter,
    cards: [...deck.cards, newCard],
  };
};

const DeleteCard = (id: string, deck: Deck): Deck => {
  const newCards = deck.cards.filter(c => c.id !== id);

  return {
    ...deck,
    cards: newCards,
  };
};

export const Deck = { AddNewCard, DeleteCard };
