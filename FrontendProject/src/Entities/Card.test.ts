import { Card } from "./Card";

describe("EditCard", () => {
  const card: Card = { id: "1", word: "tree", translation: "дерво" };

  it("edit with right words", () => {
    const expected = {
      id: "1",
      word: "tree",
      translation: "дерево",
    };

    expect(Card.EditCard("tree", "дерево", card)).toEqual(expected);
  });

  it("return new card in success editing", () => {
    expect(Card.EditCard(card.word, card.translation, card)).not.toBe(card);
  });

  it("editing with empty word return object with empty word", () => {
    expect(Card.EditCard("", "дерево", card).word).toEqual("");
  });

  it("editing with empty translation return object with empty translate", () => {
    expect(Card.EditCard("tree", "", card).translation).toEqual("");
  });
});
