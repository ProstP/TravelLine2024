import { Deck } from "../../Entities/Deck";
import { useStore } from "../../hooks/useStore";
import styles from "./DisplayDeck.module.scss";

type DisplayDeckProps = {
  deck: Deck;
  selectDeckToLearnFn: () => void;
  selectDeckToEditCards: () => void;
};

const DisplayDeck = ({ deck, selectDeckToLearnFn, selectDeckToEditCards }: DisplayDeckProps) => {
  const { deleteDeck } = useStore(state => state.actions);

  return (
    <div className={styles.deck}>
      <h2 className={styles.title}>{deck.name}</h2>
      <p className={styles.count}>Количество карт: {deck.cards.length}</p>
      <div className={styles.btns}>
        <button className={styles.start} onClick={() => selectDeckToLearnFn()}>
          Начать
        </button>
        <button className={styles.delete} onClick={() => deleteDeck(deck.id)}>
          Удалить
        </button>
        <button className={styles.edit} onClick={() => selectDeckToEditCards()}>
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default DisplayDeck;
