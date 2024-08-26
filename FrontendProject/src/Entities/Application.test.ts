import { Application } from "./Application";
import { Deck } from "./Deck";

describe("AddNewDeck", () => {
  const app: Application = {
    decks: [],
  };
  const deck: Deck = { id: "1", name: "Some", cards: [] };

  it("return new application in success adding", () => {
    expect(Application.AddNewDeck(deck, app)).not.toBe(app);
  });

  it("success add new deck to empty deck collection", () => {
    const expected = {
      decks: [
        {
          id: "1",
          name: "Some",
          cards: [],
        },
      ],
    };

    expect(Application.AddNewDeck(deck, app)).toEqual(expected);
  });

  it("success add new deck to down the collection", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const newDeck = { id: "2", name: "Not some", cards: [] };
    const expected = {
      decks: [
        {
          id: "1",
          name: "Some",
          cards: [],
        },
        {
          id: "2",
          name: "Not some",
          cards: [],
        },
      ],
    };

    expect(Application.AddNewDeck(newDeck, newApp)).toEqual(expected);
  });

  it("adding new deck with existing id return same object", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const deckWithExistingId = { id: "1", name: "Another", cards: [] };

    expect(Application.AddNewDeck(deckWithExistingId, newApp)).toBe(newApp);
  });

  it("adding new deck with existing name return same object", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const deckWithExistingName = { id: "2", name: "Some", cards: [] };

    expect(Application.AddNewDeck(deckWithExistingName, newApp)).toEqual(newApp);
  });
});

describe("DeleteDeck", () => {
  const app: Application = {
    decks: [
      {
        id: "1",
        name: "Some",
        cards: [],
      },
      {
        id: "2",
        name: "Not some",
        cards: [],
      },
      {
        id: "3",
        name: "Smth",
        cards: [],
      },
    ],
  };

  it("return new Application in success deleting", () => {
    expect(Application.DeleteDeck("1", app)).not.toBe(app);
  });

  it("deleting with unknown id return equal object", () => {
    expect(Application.DeleteDeck("10", app)).toEqual(app);
  });

  it("success deleting", () => {
    const expected = {
      decks: [
        {
          id: "2",
          name: "Not some",
          cards: [],
        },
        {
          id: "3",
          name: "Smth",
          cards: [],
        },
      ],
    };

    expect(Application.DeleteDeck("1", app)).toEqual(expected);
  });
});
