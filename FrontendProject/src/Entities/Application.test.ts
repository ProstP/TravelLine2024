import { Application } from "./Application";
import { Deck } from "./Deck";

describe("AddNewDeck", () => {
  const app: Application = {
    decks: [],
  };
  const deck: Deck = { id: "1", name: "Some", cards: [] };

  it("return new application", () => {
    expect(Application.AddNewDeck(deck, app)).not.toBe(app);
  });

  it("success add new deck to empty deck collection", () => {
    expect(Application.AddNewDeck(deck, app)).toEqual({
      decks: [
        {
          id: "1",
          name: "Some",
          cards: [],
        },
      ],
    });
  });

  it("success add new deck to down the collection", () => {
    const newApp = Application.AddNewDeck(deck, app);
    expect(Application.AddNewDeck({ id: "2", name: "Not some", cards: [] }, newApp)).toEqual({
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
    });
  });

  it("doesn't add new deck with existing id", () => {
    const newApp = Application.AddNewDeck(deck, app);

    expect(Application.AddNewDeck({ id: "1", name: "Another", cards: [] }, newApp)).toEqual(newApp);
  });

  it("doesn't add new deck with existing id", () => {
    const newApp = Application.AddNewDeck(deck, app);

    expect(Application.AddNewDeck({ id: "2", name: "Some", cards: [] }, newApp)).toEqual(newApp);
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
    ],
  };

  it("return new Application", () => {
    expect(Application.DeleteDeck("1", app)).not.toBe(app);
  });

  it("doesn't delete wiith unknown id", () => {
    expect(Application.DeleteDeck("3", app)).toEqual(app);
  });

  it("success deleting", () => {
    expect(Application.DeleteDeck("1", app)).toEqual({
      decks: [
        {
          id: "2",
          name: "Not some",
          cards: [],
        },
      ],
    });
  });
});
