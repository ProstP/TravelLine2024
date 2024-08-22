import { Application } from "./Application";
import { Deck } from "./Deck";

describe("AddNewDeck", () => {
  const app: Application = {
    decks: [],
    deckCounter: 0,
  };
  const deck: Deck = { id: "1", name: "Some", cards: [], cardCounter: 0 };

  it("return new application in success adding", () => {
    expect(Application.AddNewDeck(deck, app)).not.toBe(app);
  });

  it("success add new deck to empty deck collection", () => {
    const expected: Application = {
      decks: [
        {
          id: "1",
          name: "Some",
          cards: [],
          cardCounter: 0,
        },
      ],
      deckCounter: 1,
    };

    expect(Application.AddNewDeck(deck, app)).toEqual(expected);
  });

  it("success add new deck to down the collection", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const newDeck: Deck = { id: "2", name: "Not some", cards: [], cardCounter: 0 };
    const expected: Application = {
      decks: [
        {
          id: "1",
          name: "Some",
          cards: [],
          cardCounter: 0,
        },
        {
          id: "2",
          name: "Not some",
          cards: [],
          cardCounter: 0,
        },
      ],
      deckCounter: 2,
    };

    expect(Application.AddNewDeck(newDeck, newApp)).toEqual(expected);
  });

  it("adding new deck with existing id return same object", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const deckWithExistingId: Deck = { id: "1", name: "Another", cards: [], cardCounter: 0 };

    expect(Application.AddNewDeck(deckWithExistingId, newApp)).toBe(newApp);
  });

  it("adding new deck with existing name return same object", () => {
    const newApp = Application.AddNewDeck(deck, app);
    const deckWithExistingName: Deck = { id: "2", name: "Some", cards: [], cardCounter: 0 };

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
        cardCounter: 0,
      },
      {
        id: "2",
        name: "Not some",
        cards: [],
        cardCounter: 0,
      },
    ],
    deckCounter: 2,
  };

  it("return new Application in success deleting", () => {
    expect(Application.DeleteDeck("1", app)).not.toBe(app);
  });

  it("deleting with unknown id return same object", () => {
    expect(Application.DeleteDeck("3", app)).toBe(app);
  });

  it("success deleting", () => {
    const expected: Application = {
      decks: [
        {
          id: "2",
          name: "Not some",
          cards: [],
          cardCounter: 0,
        },
      ],
      deckCounter: 2,
    };

    expect(Application.DeleteDeck("1", app)).toEqual(expected);
  });
});
