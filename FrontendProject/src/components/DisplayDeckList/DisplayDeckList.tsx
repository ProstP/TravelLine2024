import { Deck } from "../../Entities/Deck";
import DeckListHeader from "./DeckListHeader/DeckListHeader";
import DisplayDeck from "./DisplayDeck";
import styles from "./DisplayDeckList.module.scss";
import CreateDeckMenu from "./CreateDeckMenu/CreateDeckMenu";
import { useEffect, useState } from "react";
import EditCardsMenu from "./EditCardsMenu/EditCardsMenu";
import { useStore } from "../../hooks/useStore";

type ContentProps = {
  decks: Deck[];
  selectDeckToLearnFn: (id: string) => void;
  selectDeckToEditFn: (id: string) => void;
};

const Content = ({ decks, selectDeckToLearnFn, selectDeckToEditFn }: ContentProps) => (
  <ul className={styles.list}>
    {decks.map(deck => (
      <li key={deck.id} className={styles.element}>
        <DisplayDeck
          deck={deck}
          selectDeckToLearnFn={() => selectDeckToLearnFn(deck.id)}
          selectDeckToEditCards={() => selectDeckToEditFn(deck.id)}
        />
      </li>
    ))}
  </ul>
);

type DeckListProps = {
  selectDeckToLearnFn: (id: string) => void;
};

const DeckList = ({ selectDeckToLearnFn }: DeckListProps) => {
  const [createDeckVisible, setCreateDeckVisible] = useState(false);
  const [selectedDeckToEdit, setDeckToEdit] = useState("");
  const list = useStore(state => state.app.decks);

  useEffect(() => {
    setCreateDeckVisible(false);
  }, [list]);

  return (
    <div className={styles.container}>
      {createDeckVisible ? <CreateDeckMenu closeMenuFn={() => setCreateDeckVisible(false)} /> : null}
      {selectedDeckToEdit !== "" ? (
        <EditCardsMenu closeMenuFn={() => setDeckToEdit("")} idDeck={selectedDeckToEdit} />
      ) : null}
      <DeckListHeader openCreateDeckMenu={() => setCreateDeckVisible(true)} />
      <Content
        decks={list}
        selectDeckToLearnFn={selectDeckToLearnFn}
        selectDeckToEditFn={(id: string) => setDeckToEdit(id)}
      />
    </div>
  );
};

export default DeckList;
