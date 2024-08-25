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
  selectDeckToLearnVoid: (id: string) => void;
  selectDeckToEditVoid: (id: string) => void;
};

const List = ({ decks, selectDeckToLearnVoid, selectDeckToEditVoid }: ContentProps) => (
  <ul className={styles.list}>
    {decks.map(deck => (
      <li key={deck.id} className={styles.element}>
        <DisplayDeck
          deck={deck}
          selectDeckToLearnFn={() => selectDeckToLearnVoid(deck.id)}
          selectDeckToEditCards={() => selectDeckToEditVoid(deck.id)}
        />
      </li>
    ))}
  </ul>
);

type DeckListProps = {
  selectDeckToLearnVoid: (id: string) => void;
};

const DisplayDeckList = ({ selectDeckToLearnVoid }: DeckListProps) => {
  const [createDeckVisible, setCreateDeckVisible] = useState(false);
  const [selectedDeckToEdit, setDeckToEdit] = useState("");
  const list = useStore(state => state.app.decks);

  useEffect(() => {
    setCreateDeckVisible(false);
  }, [list]);

  return (
    <div className={styles.container}>
      {createDeckVisible ? <CreateDeckMenu closeMenuVoid={() => setCreateDeckVisible(false)} /> : null}
      {selectedDeckToEdit !== "" ? (
        <EditCardsMenu closeMenuVoid={() => setDeckToEdit("")} idDeck={selectedDeckToEdit} />
      ) : null}
      <DeckListHeader openCreateDeckMenu={() => setCreateDeckVisible(true)} />
      <List
        decks={list}
        selectDeckToLearnVoid={selectDeckToLearnVoid}
        selectDeckToEditVoid={(id: string) => setDeckToEdit(id)}
      />
    </div>
  );
};

export default DisplayDeckList;
