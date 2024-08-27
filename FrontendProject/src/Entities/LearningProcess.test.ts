import { Card } from "./Card";
import { LearningProcess } from "./LearningProcess";

describe("CreateLearningProcess", () => {
  it("create with empty", () => {
    const emptyLp = LearningProcess.CreateLearningProcess([]);
    const expected: LearningProcess = {
      cards: [],
      complited: [],
      isComplited: true,
    };

    expect(emptyLp).toEqual(expected);
  });

  it("crate with not empty", () => {
    const notEmptyLp = LearningProcess.CreateLearningProcess([
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
    ]);
    const expected: LearningProcess = {
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
      complited: [],
      isComplited: false,
    };

    expect(notEmptyLp).toEqual(expected);
  });
});

describe("GetNextCardToLearn", () => {
  const lp: LearningProcess = {
    cards: [
      {
        id: "1",
        word: "word",
        translation: "слово",
      },
      {
        id: "2",
        word: "tree",
        translation: "дерево",
      },
    ],
    complited: [],
    isComplited: false,
  };

  it("cards is empty return undefined", () => {
    const emptyLp: LearningProcess = {
      cards: [],
      complited: [],
      isComplited: false,
    };

    expect(LearningProcess.GetNextCardToLearn(emptyLp)).toBe(undefined);
  });

  it("learning is complited return undefined", () => {
    const complitedLp = { ...lp, complited: ["1", "2"], isComplited: true };

    expect(LearningProcess.GetNextCardToLearn(complitedLp)).toBe(undefined);
  });

  it("next card is first return first card", () => {
    const nextIsFirstLp = { ...lp, complited: ["2"] };
    const expected: Card = {
      id: "1",
      word: "word",
      translation: "слово",
    };

    expect(LearningProcess.GetNextCardToLearn(nextIsFirstLp)).toEqual(expected);
  });

  it("next not first, find inside deck and return card", () => {
    const nextNotFirstLp = { ...lp, complited: ["1"] };
    const expected: Card = {
      id: "2",
      word: "tree",
      translation: "дерево",
    };

    expect(LearningProcess.GetNextCardToLearn(nextNotFirstLp)).toEqual(expected);
  });
});

describe("PutCardToComplited", () => {
  const lp: LearningProcess = {
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
      {
        id: "4",
        word: "mouse",
        translation: "мышь",
      },
    ],
    complited: [],
    isComplited: false,
  };

  it("put in empty deck return same object", () => {
    const emptyLp: LearningProcess = {
      cards: [],
      complited: [],
      isComplited: false,
    };

    expect(LearningProcess.PutCardToComplited("1", emptyLp)).toBe(emptyLp);
  });

  it("put unknown id return same object", () => {
    expect(LearningProcess.PutCardToComplited("3", lp)).toBe(lp);
  });

  it("success put id to complited", () => {
    const expected = { ...lp, complited: ["2"] };

    expect(LearningProcess.PutCardToComplited("2", lp)).toEqual(expected);
  });

  it("success put return new object", () => {
    expect(LearningProcess.PutCardToComplited("2", lp)).not.toBe(lp);
  });

  it("put existing id in compited", () => {
    const newLp = LearningProcess.PutCardToComplited("2", lp);

    expect(LearningProcess.PutCardToComplited("2", lp)).toEqual(newLp);
  });
});

describe("PutCardToDownTheDesk", () => {
  const lp: LearningProcess = {
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
      {
        id: "4",
        word: "mouse",
        translation: "мышь",
      },
    ],
    complited: ["3"],
    isComplited: false,
  };

  it("return new Learning Process in success putting", () => {
    expect(LearningProcess.PutCardToDownTheDesk(lp)).not.toBe(lp);
  });

  it("getting in empty deck not return same object", () => {
    const lpWithEmptyDeck: LearningProcess = {
      cards: [],
      complited: [],
      isComplited: false,
    };

    expect(LearningProcess.PutCardToDownTheDesk(lpWithEmptyDeck)).toBe(lpWithEmptyDeck);
  });

  it("success put card to down the deck", () => {
    const expected: LearningProcess = {
      cards: [
        {
          id: "2",
          word: "new",
          translation: "новый",
        },
        {
          id: "4",
          word: "mouse",
          translation: "мышь",
        },
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
      complited: ["3"],
      isComplited: false,
    };

    expect(LearningProcess.PutCardToDownTheDesk(lp)).toEqual(expected);
  });
});
