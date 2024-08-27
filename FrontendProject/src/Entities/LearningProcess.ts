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

const PutCardToComplited = (lp: LearningProcess) => {
  if (lp.cards.length === 0) {
    return lp;
  }

  const isComplited = lp.cards.length === 1;
  const idCard = lp.cards[0].id;
  const newCards = [...lp.cards];
  newCards.splice(0, 1);

  return {
    ...lp,
    cards: newCards,
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
