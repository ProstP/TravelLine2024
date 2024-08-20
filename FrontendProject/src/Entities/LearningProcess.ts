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

const GetTopCardOfDeckAndPut = (lp: LearningProcess, eraseAfterDrafting: boolean | undefined = undefined) => {
  if (lp.cards.length == 0) {
    return lp;
  }

  const newCards = [...lp.cards];
  const card = newCards[0];
  newCards.splice(0, 1);

  if (eraseAfterDrafting) {
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
  return GetTopCardOfDeckAndPut(lp, true);
};

const PutCardToDownTheDesk = (lp: LearningProcess) => {
  return GetTopCardOfDeckAndPut(lp);
};

export const LearningProcess = { CreateLearningProcess, PutCardToCompited, PutCardToDownTheDesk };
