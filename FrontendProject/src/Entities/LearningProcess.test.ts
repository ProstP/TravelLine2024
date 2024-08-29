import { LearningProcess } from "./LearningProcess";

describe("CreateLearningProcess", () => {
  it("create with empty", () => {
    const emptyLp = LearningProcess.CreateLearningProcess([]);
    const expected: LearningProcess = {
      cards: [],
      complitedCount: 0,
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
      complitedCount: 0,
      isComplited: false,
    };

    expect(notEmptyLp).toEqual(expected);
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
    complitedCount: 0,
    isComplited: false,
  };

  it("put in empty deck return same object", () => {
    const emptyLp: LearningProcess = {
      cards: [],
      complitedCount: 0,
      isComplited: false,
    };

    expect(LearningProcess.PutCardToComplited(emptyLp)).toBe(emptyLp);
  });

  it("success put id to complited", () => {
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
      ],
      complitedCount: 1,
      isComplited: false,
    };

    expect(LearningProcess.PutCardToComplited(lp)).toEqual(expected);
  });

  it("success put return new object", () => {
    expect(LearningProcess.PutCardToComplited(lp)).not.toBe(lp);
  });

  it("put all cards to compited return is complited true", () => {
    let complitedLp = LearningProcess.PutCardToComplited(lp);
    while (complitedLp.cards.length !== 0) {
      complitedLp = LearningProcess.PutCardToComplited(complitedLp);
    }
    const expected: LearningProcess = {
      cards: [],
      complitedCount: 3,
      isComplited: true,
    };

    expect(complitedLp).toEqual(expected);
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
    complitedCount: 1,
    isComplited: false,
  };

  it("return new Learning Process in success putting", () => {
    expect(LearningProcess.PutCardToDownTheDesk(lp)).not.toBe(lp);
  });

  it("getting in empty deck not return same object", () => {
    const lpWithEmptyDeck: LearningProcess = {
      cards: [],
      complitedCount: 0,
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
      complitedCount: 1,
      isComplited: false,
    };

    expect(LearningProcess.PutCardToDownTheDesk(lp)).toEqual(expected);
  });
});
