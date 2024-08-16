import { LearningProcess } from "./LearningProcess";

describe("CreateLearningProcess", () => {
  it("create with empty", () => {
    const emptyLp = LearningProcess.CreateLearningProcess([]);
    const expected = {
      cards: [],
      complited: [],
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
    const expected = {
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
    };

    expect(notEmptyLp).toEqual(expected);
  });
});

describe("PutCardToCompited", () => {
  const lp = {
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
  };

  it("return new Learning Process", () => {
    expect(LearningProcess.PutCardToCompited(lp)).not.toBe(lp);
  });

  it("getting from empty deck return same object", () => {
    const lpWithEmptyDeck = {
      cards: [],
      complited: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
    };

    expect(LearningProcess.PutCardToCompited(lpWithEmptyDeck)).toBe(lpWithEmptyDeck);
  });

  it("success put card to complited", () => {
    const expected = {
      cards: [
        {
          id: "2",
          word: "new",
          translation: "новый",
        },
      ],
      complited: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
    };

    expect(LearningProcess.PutCardToCompited(lp)).toEqual(expected);
  });
});

describe("PutCardToDownTheDesk", () => {
  const lp = {
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
    complited: [
      {
        id: "3",
        word: "pen",
        translation: "ручка",
      },
    ],
  };

  it("return new Learning Process in success putting", () => {
    expect(LearningProcess.PutCardToDownTheDesk(lp)).not.toBe(lp);
  });

  it("getting in empty deck not return same object", () => {
    const lpWithEmptyDeck = {
      cards: [],
      complited: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
    };

    expect(LearningProcess.PutCardToDownTheDesk(lpWithEmptyDeck)).toBe(lpWithEmptyDeck);
  });

  it("success put card to down the deck", () => {
    const expected = {
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
      complited: [
        {
          id: "3",
          word: "pen",
          translation: "ручка",
        },
      ],
    };

    expect(LearningProcess.PutCardToDownTheDesk(lp)).toEqual(expected);
  });
});
