import { Card } from "./Card";

export type LearningProcess = {
  cards: Card[];
  complited: string[];
  isComplited: boolean;
};

const CreateLearningProcess = (cards: Card[]): LearningProcess => {
  return {
    cards: [...cards],
    complited: [],
    isComplited: cards.length === 0,
  };
};

const GetNextCardToLearn = (lp: LearningProcess): Card | undefined => {
  if (lp.isComplited || lp.cards.length === 0) {
    return undefined;
  }

  return lp.cards.find(c => !lp.complited.includes(c.id));
};

const PutCardToComplited = (idCard: string, lp: LearningProcess) => {
  if (!lp.cards.some(c => c.id === idCard) || lp.complited.some(id => id == idCard)) {
    return lp;
  }

  const isComplited = lp.cards.length - 1 === lp.complited.length;
  return {
    ...lp,
    complited: [...lp.complited, idCard],
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

export const LearningProcess = { CreateLearningProcess, GetNextCardToLearn, PutCardToComplited, PutCardToDownTheDesk };
