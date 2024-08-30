import { Card } from "./Card";
import { Deck } from "./Deck";

describe("AddNewCard", () => {
  const deck: Deck = { id: "1", name: "Some", cards: [] };
  const card: Card = { id: "1", word: "tree", translation: "дерево" };

  it("return new deck in success adding", () => {
    expect(Deck.AddNewCard(card, deck)).not.toBe(deck);
  });

  it("add new card to empty deck", () => {
    const expected: Deck = {
      id: "1",
      name: "Some",
      cards: [card],
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
  };

  it("return equal object if nothing to delete", () => {
    expect(Deck.DeleteCard("3", deck)).toEqual(deck);
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
    };

    expect(Deck.DeleteCard("1", deck)).toEqual(expected);
  });

  it("return new deck in success completed", () => {
    expect(Deck.DeleteCard("1", deck)).not.toBe(deck);
  });
});

describe("EditCard", () => {
  const deck: Deck = {
    id: "idDeck",
    name: "Some",
    cards: [
      {
        id: "idCard",
        word: "tree",
        translation: "машина",
      },
    ],
  };
  const edit = (c: Card) => {
    return { ...c, word: "tree", translation: "дерево" };
  };

  it("Unknown idCard return same object", () => {
    expect(Deck.EditCard("card", edit, deck)).toBe(deck);
  });

  it("Succes return same deck with edited card", () => {
    const expected: Deck = {
      id: "idDeck",
      name: "Some",
      cards: [
        {
          id: "idCard",
          word: "tree",
          translation: "дерево",
        },
      ],
    };

    expect(Deck.EditCard("idCard", edit, deck)).toEqual(expected);
  });
});
