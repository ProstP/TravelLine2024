export type Card = {
  id: string;
  word: string;
  translation: string;
};

const EditCard = (word: string, translation: string, card: Card) => {
  if (word === "" || translation === "") {
    return card;
  }
  return {
    ...card,
    word: word,
    translation: translation,
  };
};

export const Card = { EditCard };
