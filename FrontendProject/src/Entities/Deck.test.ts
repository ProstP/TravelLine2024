import { Card } from "./Card";
import { Deck } from "./Deck";

describe("AddNewCard", () => {
  const deck: Deck = { id: "1", name: "Some", cards: [] };
  const card: Card = { id: "1", word: "tree", translation: "дерево" };

  it("return new deck", () => {
    expect(Deck.AddNewCard(card, deck)).not.toBe(deck);
  });

  it("add new card to empty deck", () => {
    expect(Deck.AddNewCard(card, deck)).toEqual({
      id: "1",
      name: "Some",
      cards: [card],
    });
  });

  it("add new card to down of deck", () => {
    const newDeck = Deck.AddNewCard(card, deck);
    expect(Deck.AddNewCard({ id: "2", word: "new", translation: "новый" }, newDeck)).toEqual({
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
    });
  });

  it("doesn't add card with existing id", () => {
    const newDeck = Deck.AddNewCard(card, deck);

    expect(Deck.AddNewCard({ id: "1", word: "new", translation: "новый" }, newDeck)).toEqual(newDeck);
  });

  it("doesn't add card with existing name", () => {
    const newDeck = Deck.AddNewCard(card, deck);

    expect(Deck.AddNewCard({ id: "2", word: "tree", translation: "другое дерево" }, newDeck)).toEqual(newDeck);
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
    expect(Deck.DeleteCard("1", deck)).toEqual({
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
    });
  });
});
