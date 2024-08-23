import { Deck } from "../../Entities/Deck";
import { useStore } from "../../hooks/useStore";
import "./DisplayDeck.css";

type DisplayDeckProps = {
  deck: Deck;
  selectDeckToLearnFn: () => void;
  selectDeckToEditCards: () => void;
};

const DisplayDeck = ({ deck, selectDeckToLearnFn, selectDeckToEditCards }: DisplayDeckProps) => {
  const { deleteDeck } = useStore(state => state.actions);

  return (
    <div className="deck">
      <h2>{deck.name}</h2>
      <p>Количество карт: {deck.cards.length}</p>
      <div className="btnsDeck">
        <button className="btnDeck firstBtn" style={{ backgroundColor: "lime" }} onClick={() => selectDeckToLearnFn}>
          Начать
        </button>
        <button className="btnDeck" style={{ backgroundColor: "red" }} onClick={() => deleteDeck(deck.id)}>
          Удалить
        </button>
        <button className="btnDeck lastBtn" style={{ backgroundColor: "grey" }} onClick={() => selectDeckToEditCards()}>
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default DisplayDeck;
