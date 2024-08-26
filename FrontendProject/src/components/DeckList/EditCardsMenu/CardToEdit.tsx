import { Card } from "../../../Entities/Card";
import { useStore } from "../../../hooks/useStore";
import styles from "./CardToEdit.module.scss";

type CardToEditProps = {
  card: Card;
  idDeck: string;
};

const CardToEdit = ({ card, idDeck }: CardToEditProps) => {
  const { editCard, deleteCardInDeck } = useStore(state => state.actions);

  return (
    <div className={styles.card}>
      <p className={styles.fieldName}>Слово:</p>
      <input
        value={card.word}
        className={styles.field}
        onChange={e => editCard(e.target.value, card.translation, card.id, idDeck)}
      ></input>
      <p className={styles.fieldName}>Перевод:</p>
      <input
        value={card.translation}
        className={styles.field}
        onChange={e => editCard(card.word, e.target.value, card.id, idDeck)}
      ></input>
      <button className={styles.delete} onClick={() => deleteCardInDeck(card.id, idDeck)}>
        Удалить
      </button>
    </div>
  );
};

export default CardToEdit;
