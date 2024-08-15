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

const PutCardToCompited = (lp: LearningProcess): LearningProcess => {
  if (lp.cards.length == 0) {
    return lp;
  }

  const newCards = [...lp.cards];
  const card = newCards[0];
  newCards.splice(0, 1);

  return {
    cards: [...newCards],
    complited: [...lp.complited, card],
  };
};

const PutCardToDownTheDesk = (lp: LearningProcess): LearningProcess => {
  if (lp.cards.length === 0) {
    return lp;
  }
  const newCards = [...lp.cards];
  const card = newCards[0];
  newCards.splice(0, 1);

  return {
    ...lp,
    cards: [...newCards, card],
  };
};

export const LearningProcess = { CreateLearningProcess, PutCardToCompited, PutCardToDownTheDesk };
