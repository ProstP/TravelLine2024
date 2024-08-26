import { Deck as DeckType } from "../../Entities/Deck";
import Header from "./Header/Header";
import Deck from "./Deck";
import styles from "./DeckList.module.scss";
import CreateDeckMenu from "./CreateDeckMenu/CreateDeckMenu";
import { useEffect, useState } from "react";
import EditCardsMenu from "./EditCardsMenu/EditCardsMenu";
import { useStore } from "../../hooks/useStore";

type ContentProps = {
  decks: DeckType[];
  selectDeckToLearn: (id: string) => void;
  selectDeckToEdit: (id: string) => void;
};

const List = ({ decks, selectDeckToLearn, selectDeckToEdit }: ContentProps) => (
  <ul className={styles.list}>
    {decks.map(deck => (
      <li key={deck.id} className={styles.element}>
        <Deck
          deck={deck}
          selectDeckToLearn={() => selectDeckToLearn(deck.id)}
          selectDeckToEditCards={() => selectDeckToEdit(deck.id)}
        />
      </li>
    ))}
  </ul>
);

type DeckListProps = {
  selectDeckToLearn: (id: string) => void;
};

const DeckList = ({ selectDeckToLearn }: DeckListProps) => {
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
      <Header openCreateDeckMenu={() => setCreateDeckVisible(true)} />
      <List decks={list} selectDeckToLearn={selectDeckToLearn} selectDeckToEdit={(id: string) => setDeckToEdit(id)} />
    </div>
  );
};

export default DeckList;
