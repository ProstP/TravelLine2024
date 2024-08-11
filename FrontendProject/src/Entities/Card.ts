export type Card = {
  id: string;
  word: string;
  translation: string;
};

const UpdateCard = (word: string, translation: string, card: Card) => {
  if (word === "" || translation === "") {
    return {
      ...card,
    };
  }
  return {
    ...card,
    word: word,
    translation: translation,
  };
};

export const Card = { UpdateCard };
