import { Card } from "./Card";

describe("EditCard", () => {
  const card: Card = { id: "1", word: "tree", translation: "дерво" };

  it("edit with right words", () => {
    expect(Card.EditCard("tree", "дерево", card)).toEqual({
      id: "1",
      word: "tree",
      translation: "дерево",
    });
  });

  it("return new card", () => {
    expect(Card.EditCard(card.word, card.translation, card)).not.toBe(card);
  });

  it("doesn't update to empty word", () => {
    expect(Card.EditCard("", "дерево", card)).toEqual(card);
  });

  it("doesn't update to empty translation", () => {
    expect(Card.EditCard("tree", "", card)).toEqual(card);
  });
});
