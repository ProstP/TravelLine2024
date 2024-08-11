import { LearningProcess } from "./LearningProcess";

describe("CreateLearningProcess", () => {
  it("create with empty", () => {
    expect(LearningProcess.CreateLearningProcess([])).toEqual({
      cards: [],
      complited: [],
    });
  });

  it("crate with not empty", () => {
    expect(
      LearningProcess.CreateLearningProcess([
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
      ]),
    ).toEqual({
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
    });
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

  it("getting from empty deck not change", () => {
    const newLp = {
      cards: [],
      complited: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
    };
    expect(LearningProcess.PutCardToCompited(newLp)).toEqual(newLp);
  });

  it("success put card to complited", () => {
    expect(LearningProcess.PutCardToCompited(lp)).toEqual({
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
    });
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

  it("return new Learning Process", () => {
    expect(LearningProcess.PutCardToDownTheDesk(lp)).not.toBe(lp);
  });

  it("empty deck not change", () => {
    const newLp = {
      cards: [],
      complited: [
        {
          id: "1",
          word: "tree",
          translation: "дерево",
        },
      ],
    };
    expect(LearningProcess.PutCardToDownTheDesk(newLp)).toEqual(newLp);
  });

  it("success put card to down the deck", () => {
    expect(LearningProcess.PutCardToDownTheDesk(lp)).toEqual({
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
    });
  });
});
