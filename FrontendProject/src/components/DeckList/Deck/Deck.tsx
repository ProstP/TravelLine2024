import { Deck as DeckType } from "../../../Entities/Deck";
import { useStore } from "../../../hooks/useStore";
import styles from "./Deck.module.scss";

type DeckProps = {
  deck: DeckType;
  selectDeckToLearn: () => void;
  selectDeckToEditCards: () => void;
};

const Deck = ({ deck, selectDeckToLearn, selectDeckToEditCards }: DeckProps) => {
  const deleteDeck = useStore(state => state.deleteDeck);

  return (
    <div className={styles.deck}>
      <h2 className={styles.title}>{deck.name}</h2>
      <p className={styles.count}>Количество карт: {deck.cards.length}</p>
      <div className={styles.btns}>
        <button className={styles.start} onClick={() => selectDeckToLearn()}>
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

export default Deck;
