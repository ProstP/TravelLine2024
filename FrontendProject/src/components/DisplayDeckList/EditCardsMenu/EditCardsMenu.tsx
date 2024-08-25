import { Deck } from "../../../Entities/Deck";
import { useStore } from "../../../hooks/useStore";
import DisplayCardToEdit from "./DisplayCardToEdit";
import styles from "./EditCardsMenu.module.scss";

type DisplayCardsProps = {
  deck: Deck;
};

const List = ({ deck }: DisplayCardsProps) => {
  const { addCardToDeck } = useStore(state => state.actions);

  return (
    <ul className={styles.list}>
      {deck.cards.map(c => (
        <li className={styles.element}>
          <DisplayCardToEdit card={c} idDeck={deck.id} />
        </li>
      ))}
      <li className={styles.element}>
        <button className={styles.add} onClick={() => addCardToDeck("", "", deck.id)}>
          Добавить карточку
        </button>
      </li>
    </ul>
  );
};

type EditCardsMenuProps = {
  closeMenuVoid: () => void;
  idDeck: string;
};

const EditCardsMenu = ({ closeMenuVoid, idDeck }: EditCardsMenuProps) => {
  const deck = useStore(state => state.app.decks.find(d => d.id === idDeck)!);

  return (
    <div className={styles.background}>
      <div className={styles.menu}>
        <div className={styles.header}>
          <h2 className={styles.name}>{deck.name}</h2>
          <button className={styles.close} onClick={() => closeMenuVoid()}>
            Закрыть
          </button>
        </div>
        <hr className={styles.line} />
        <div className={styles.container}>
          <List deck={deck} />
        </div>
      </div>
    </div>
  );
};

export default EditCardsMenu;
