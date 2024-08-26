import { useState } from "react";
import { Card } from "../../../Entities/Card";
import styles from "./CardToLearn.module.scss";

type CardToLearnProps = {
  card: Card;
  rightAns: () => void;
  mistake: () => void;
};

const CardToLearn = ({ card, rightAns, mistake }: CardToLearnProps) => {
  const [isTranslationHide, setTranslationHide] = useState(true);

  return (
    <div className={styles.container}>
      <button className={styles.card} onClick={() => setTranslationHide(!isTranslationHide)}>
        {isTranslationHide ? card.word : card.translation}
      </button>
      <p className={styles.message}>
        Нажмите на слово и сравните: совпадает ли перевод, который вы записали с переводом на карточке
      </p>
      <div className={styles.btns}>
        <button className={styles.rightAnsBtn} onClick={() => rightAns()}>
          Да
        </button>
        <button className={styles.mistakeBtn} onClick={() => mistake()}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default CardToLearn;
