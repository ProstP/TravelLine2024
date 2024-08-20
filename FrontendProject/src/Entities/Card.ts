export type Card = {
  id: string;
  word: string;
  translation: string;
};

const EditCard = (word: string, translation: string, id: string) => {
  return {
    id: id,
    word: word,
    translation: translation,
  };
};

export const Card = { EditCard };
