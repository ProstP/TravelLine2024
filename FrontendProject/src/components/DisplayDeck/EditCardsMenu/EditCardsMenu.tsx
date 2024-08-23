import { Deck } from "../../../Entities/Deck";
import { useStore } from "../../../hooks/useStore";
import DisplayCard from "./DisplayCard";
import "./EditCardsMenu.css";

type DisplayCardsProps = {
  deck: Deck;
};

const DisplayCards = ({ deck }: DisplayCardsProps) => {
  const { addCardToDeck, editCard, deleteCardInDeck } = useStore(state => state.actions);

  return (
    <ul className="listOfCards">
      {deck.cards.map(c => (
        <li
          key={c.id}
          style={{
            width: "30%",
            height: "25vh",
            margin: "20px",
          }}
        >
          <DisplayCard
            card={c}
            editCardFn={(word: string, translation: string) => {
              editCard(word, translation, c.id, deck.id);
            }}
            deleteCardFn={() => deleteCardInDeck(c.id, deck.id)}
          />
        </li>
      ))}
      <li
        style={{
          width: "30%",
          height: "25vh",
          margin: "20px",
        }}
      >
        <button
          className="addCardBtn"
          style={{
            width: "100%",
            height: "100%",
          }}
          onClick={() => addCardToDeck("", "", deck.id)}
        >
          Добавить карточку
        </button>
      </li>
    </ul>
  );
};

type EditCardsMenuProps = {
  closeMenuFn: () => void;
  idDeck: string;
};

const EditCardsMenu = ({ closeMenuFn, idDeck }: EditCardsMenuProps) => {
  const deck = useStore(state => state.app.decks.find(d => d.id === idDeck)!);

  return (
    <div className="editCardsBackground">
      <div className="editCardsMenu">
        <div
          style={{
            width: "100%",
            height: "8%",
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 0",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "black", marginLeft: "70px" }}>{deck.name}</h2>
          <button className="" style={{ marginRight: "30px" }} onClick={() => closeMenuFn()}>
            Закрыть
          </button>
        </div>
        <hr style={{ width: "100%", border: "1px solid grey" }} />
        <div style={{ overflowY: "scroll", width: "100%", height: "92%" }}>
          <DisplayCards deck={deck} />
        </div>
      </div>
    </div>
  );
};

export default EditCardsMenu;
