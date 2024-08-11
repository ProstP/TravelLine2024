import { Card } from "./Card";

describe("UpdateCard", () => {
  const card: Card = { id: "1", word: "tree", translation: "дерво" };

  it("update with right words", () => {
    expect(Card.UpdateCard("tree", "дерево", card)).toEqual({
      id: "1",
      word: "tree",
      translation: "дерево",
    });
  });

  it("return new card", () => {
    expect(Card.UpdateCard(card.word, card.translation, card)).not.toBe(card);
  });

  it("doesn't update to empty word", () => {
    expect(Card.UpdateCard("", "дерево", card)).toEqual(card);
  });

  it("doesn't update to empty translation", () => {
    expect(Card.UpdateCard("tree", "", card)).toEqual(card);
  });
});
