import { Card } from "./Card";

export type LearningProcess = {
  cards: Card[];
  complited: Card[];
};

const CreateLearningProcess = (cards: Card[]): LearningProcess => {
  return {
    cards: [...cards],
    complited: [],
  };
};

const GetTopCardOfDeckAndPut = (lp: LearningProcess, targetToPut: "downToDeck" | "deckOfComplited") => {
  if (lp.cards.length == 0) {
    return lp;
  }

  const newCards = [...lp.cards];
  const card = newCards[0];
  newCards.splice(0, 1);

  if (targetToPut === "deckOfComplited") {
    return {
      cards: [...newCards],
      complited: [...lp.complited, card],
    };
  } else {
    return {
      ...lp,
      cards: [...newCards, card],
    };
  }
};

const PutCardToCompited = (lp: LearningProcess) => {
  return GetTopCardOfDeckAndPut(lp, "deckOfComplited");
};

const PutCardToDownTheDesk = (lp: LearningProcess) => {
  return GetTopCardOfDeckAndPut(lp, "downToDeck");
};

export const LearningProcess = { CreateLearningProcess, PutCardToCompited, PutCardToDownTheDesk };
