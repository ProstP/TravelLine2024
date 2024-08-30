import { Deck } from "./Deck";

export type Application = {
  decks: Deck[];
};

const AddNewDeck = (newDeck: Deck, app: Application): Application => {
  if (app.decks.some(d => d.id === newDeck.id || d.name === newDeck.name)) {
    return app;
  }
  return {
    ...app,
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

const EditDeck = (idDeck: string, edit: (d: Deck) => Deck, app: Application): Application => {
  const decks = [...app.decks];
  const deckIndex = decks.findIndex(d => d.id === idDeck);
  if (deckIndex === -1) {
    return app;
  }

  decks[deckIndex] = edit(decks[deckIndex]);

  return {
    ...app,
    decks: decks,
  };
};

export const Application = { AddNewDeck, DeleteDeck, EditDeck };
