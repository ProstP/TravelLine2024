import { Card } from "./Card";
import { Deck } from "./Deck";

describe("AddNewCard", () => {
  const deck: Deck = { id: "1", name: "Some", cards: [] };
  const card: Card = { id: "1", word: "tree", translation: "дерево" };

  it("return new deck", () => {
    expect(Deck.AddNewCard(card, deck)).not.toBe(deck);
  });

  it("add new card to empty deck", () => {
    const expected = {
      id: "1",
      name: "Some",
      cards: [card],
    };

    expect(Deck.AddNewCard(card, deck)).toEqual(expected);
  });

  it("add new card to down of deck", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const newCard = { id: "2", word: "new", translation: "новый" };
    const expected = {
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
    };

    expect(Deck.AddNewCard(newCard, newDeck)).toEqual(expected);
  });

  it("doesn't add card with existing id", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const cardWithExistingId = { id: "1", word: "new", translation: "новый" };

    expect(Deck.AddNewCard(cardWithExistingId, newDeck)).toEqual(newDeck);
  });

  it("doesn't add card with existing name", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    const cardWithExistingName = { id: "2", word: "tree", translation: "другое дерево" };

    expect(Deck.AddNewCard(cardWithExistingName, newDeck)).toEqual(newDeck);
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
  };

  it("return new deck", () => {
    expect(Deck.DeleteCard("some id", deck)).not.toBe(deck);
  });

  it("doesn't delete with unknown id", () => {
    expect(Deck.DeleteCard("3", deck)).toEqual(deck);
  });

  it("success deleting", () => {
    const expected = {
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
    };

    expect(Deck.DeleteCard("1", deck)).toEqual(expected);
  });
});
