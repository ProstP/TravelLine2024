import { Deck } from "./Deck";

export type Application = {
  decks: Deck[];
  deckCounter: number;
};

const AddNewDeck = (newDeck: Deck, app: Application): Application => {
  if (app.decks.some(d => d.id === newDeck.id || d.name === newDeck.name)) {
    return app;
  }

  const newCounter = app.deckCounter + 1;

  return {
    ...app,
    deckCounter: newCounter,
    decks: [...app.decks, newDeck],
  };
};

const DeleteDeck = (id: string, app: Application): Application => {
  const newDecks = app.decks.filter(d => d.id !== id);

  return {
    ...app,
    decks: newDecks,
  };
};

export const Application = { AddNewDeck, DeleteDeck };
