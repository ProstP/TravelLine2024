import { Deck } from "./Deck";

export type Application = {
  decks: Deck[];
};

const AddNewDeck = (newDeck: Deck, app: Application): Application => {
  if (app.decks.some(d => d.id === newDeck.id || d.name === newDeck.name)) {
    return { ...app };
  }

  return {
    decks: [...app.decks, newDeck],
  };
};

const DeleteDeck = (id: string, app: Application): Application => {
  const index = app.decks.findIndex(d => d.id === id);

  if (index === -1) {
    return { ...app };
  }

  const newDecks = [...app.decks];
  newDecks.splice(index, 1);

  return {
    decks: [...newDecks],
  };
};

export const Application = { AddNewDeck, DeleteDeck };
