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

const EditCard = (idCard: string, edit: (c: Card) => Card, deck: Deck): Deck => {
  const cards = [...deck.cards];
  const cardIndex = cards.findIndex(c => c.id === idCard);
  if (cardIndex === -1) {
    return deck;
  }

  cards[cardIndex] = edit(cards[cardIndex]);

  return {
    ...deck,
    cards: cards,
  };
};

export const Deck = { AddNewCard, DeleteCard, EditCard };
