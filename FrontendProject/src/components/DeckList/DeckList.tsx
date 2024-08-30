import { Deck as DeckType } from "../../Entities/Deck";
import Deck from "./Deck/Deck";
import styles from "./DeckList.module.scss";
import CreateDeckMenu from "./CreateDeckMenu/CreateDeckMenu";
import { useEffect, useState } from "react";
import EditCardsMenu from "./EditCardsMenu/EditCardsMenu";
import { useStore } from "../../hooks/useStore";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

type ContentProps = {
  decks: DeckType[];
  selectDeckToEdit: (id: string) => void;
};

const List = ({ decks, selectDeckToEdit }: ContentProps) => {
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      {decks.map(deck => (
        <li key={deck.id} className={styles.element}>
          <Deck
            deck={deck}
            selectDeckToLearn={() => {
              navigate(`/learning/${deck.id}`);
            }}
            selectDeckToEditCards={() => selectDeckToEdit(deck.id)}
          />
        </li>
      ))}
    </ul>
  );
};

const DeckList = () => {
  const [createDeckVisible, setCreateDeckVisible] = useState(false);
  const [selectedDeckToEdit, setDeckToEdit] = useState("");
  const list = useStore(state => state.app.decks);

  useEffect(() => {
    setCreateDeckVisible(false);
  }, [list]);

  return (
    <div className={styles.container}>
      {createDeckVisible ? <CreateDeckMenu closeMenu={() => setCreateDeckVisible(false)} /> : null}
      {selectedDeckToEdit !== "" ? (
        <EditCardsMenu closeMenuVoid={() => setDeckToEdit("")} idDeck={selectedDeckToEdit} />
      ) : null}
      <Header>
        <h2>Learning application</h2>
        <button onClick={() => setCreateDeckVisible(true)}>Создать новый набор</button>
      </Header>
      <List decks={list} selectDeckToEdit={(id: string) => setDeckToEdit(id)} />
    </div>
  );
};

export default DeckList;
