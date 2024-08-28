import { Card } from "./Card";

export type LearningProcess = {
  cards: Card[];
  complitedCount: number;
  isComplited: boolean;
};

const CreateLearningProcess = (cards: Card[]): LearningProcess => {
  return {
    cards: [...cards],
    complitedCount: 0,
    isComplited: cards.length === 0,
  };
};

const PutCardToComplited = (lp: LearningProcess) => {
  if (lp.cards.length === 0) {
    return lp;
  }

  const isComplited = lp.cards.length === 1;
  const newComplitedCount = lp.complitedCount + 1;
  const newCards = [...lp.cards];
  newCards.splice(0, 1);

  return {
    ...lp,
    cards: newCards,
    complitedCount: newComplitedCount,
    isComplited: isComplited,
  };
};

const PutCardToDownTheDesk = (lp: LearningProcess) => {
  if (lp.cards.length == 0) {
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

export const LearningProcess = { CreateLearningProcess, PutCardToComplited, PutCardToDownTheDesk };
