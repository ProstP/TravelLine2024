import { Card } from "./Card";
import { Deck } from "./Deck";

describe("AddNewCard", () => {
  const deck: Deck = { id: "1", name: "Some", cards: [], cardCounter: 0 };
  const card: Card = { id: "1", word: "tree", translation: "дерево" };

  it("return new deck in success adding", () => {
    expect(Deck.AddNewCard(card, deck)).not.toBe(deck);
  });

  it("add new card to empty deck", () => {
    const expected: Deck = {
      id: "1",
      name: "Some",
      cards: [card],
      cardCounter: 1,
    };

    expect(Deck.AddNewCard(card, deck)).toEqual(expected);
  });

  it("add new card to down of deck", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const newCard: Card = { id: "2", word: "new", translation: "новый" };
    const expected: Deck = {
      id: "1",
      name: "Some",
      cards: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
        {
          id: "2",
          word: "new",
          translation: "новый",
        },
      ],
      cardCounter: 2,
    };

    expect(Deck.AddNewCard(newCard, newDeck)).toEqual(expected);
  });

  it("return same object if add card with existing id", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const cardWithExistingId: Card = { id: "1", word: "new", translation: "новый" };

    expect(Deck.AddNewCard(cardWithExistingId, newDeck)).toBe(newDeck);
  });

  it("return same object if add card with existing name", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const cardWithExistingName: Card = { id: "2", word: "tree", translation: "другое дерево" };

    expect(Deck.AddNewCard(cardWithExistingName, newDeck)).toBe(newDeck);
  });
});

describe("DeleteCard", () => {
  const deck: Deck = {
    id: "1",
    name: "Some",
    cards: [
      {
        id: "1",
        word: "tree",
        translation: "дерево",
      },
      {
        id: "2",
        word: "mouse",
        translation: "мышь",
      },
      {
        id: "6",
        word: "pen",
        translation: "ручка",
      },
    ],
    cardCounter: 3,
  };

  it("return same object if nothing to delete", () => {
    expect(Deck.DeleteCard("3", deck)).toBe(deck);
  });

  it("success deleting", () => {
    const expected: Deck = {
      id: "1",
      name: "Some",
      cards: [
        {
          id: "2",
          word: "mouse",
          translation: "мышь",
        },
        {
          id: "6",
          word: "pen",
          translation: "ручка",
        },
      ],
      cardCounter: 3,
    };

    expect(Deck.DeleteCard("1", deck)).toEqual(expected);
  });

  it("return new deck in success completed", () => {
    expect(Deck.DeleteCard("1", deck)).not.toBe(deck);
  });
});
