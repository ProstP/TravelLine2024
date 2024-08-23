import { useState } from "react";
import { Card } from "../../../Entities/Card";
import "./DisplayCard.css";

type DisplayCardProps = {
  card: Card;
  editCardFn: (word: string, translation: string) => void;
  deleteCardFn: () => void;
};

const DisplayCard = ({ card, editCardFn, deleteCardFn }: DisplayCardProps) => {
  const [word, setWord] = useState(card.word);
  const [translation, setTranslation] = useState(card.translation);

  return (
    <div className="card">
      <p className="cardFieldName">Слово:</p>
      <input value={word} className="cardField" onChange={e => setWord(e.target.value)}></input>
      <p className="cardFieldName">Перевод:</p>
      <input value={translation} className="cardField" onChange={e => setTranslation(e.target.value)}></input>
      <div className="cardBtns">
        <button
          style={{ backgroundColor: "lime", borderBottomLeftRadius: "20px", width: "50%" }}
          onClick={() => editCardFn(word, translation)}
        >
          Сохранить
        </button>
        <button
          style={{ backgroundColor: "red", borderBottomRightRadius: "20px", width: "50%" }}
          onClick={() => deleteCardFn()}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default DisplayCard;
