import { Deck } from "../../Entities/Deck";
import TopPanel from "./TopPanel/TopPanel";
import DisplayDeck from "./DisplayDeck";
import "./DisplayDeckList.css";
import CreateDeckMenu from "./CreateDeckMenu/CreateDeckMenu";
import { useEffect, useState } from "react";
import EditCardsMenu from "./EditCardsMenu/EditCardsMenu";
import { useStore } from "../../hooks/useStore";

type ContentProps = {
  decks: Deck[];
  selectDeckToLearnFn: (id: string) => void;
  selectDeckToEditFn: (id: string) => void;
};

const Content = ({ decks, selectDeckToEditFn }: ContentProps) => {
  return (
    <ul className="listOfDecks">
      {decks.map(deck => (
        <li key={deck.id} className="elementOfList">
          <DisplayDeck
            deck={deck}
            selectDeckToLearnFn={() => selectDeckToEditFn(deck.id)}
            selectDeckToEditCards={() => selectDeckToEditFn(deck.id)}
          />
        </li>
      ))}
    </ul>
  );
};

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
    <div className="deckList">
      {createDeckVisible ? <CreateDeckMenu closeMenuFn={() => setCreateDeckVisible(false)} /> : null}
      {selectedDeckToEdit !== "" ? (
        <EditCardsMenu closeMenuFn={() => setDeckToEdit("")} idDeck={selectedDeckToEdit} />
      ) : null}
      <TopPanel openCreateDeckMenu={() => setCreateDeckVisible(true)} />
      <Content
        decks={list}
        selectDeckToLearnFn={selectDeckToLearnFn}
        selectDeckToEditFn={(id: string) => setDeckToEdit(id)}
      />
    </div>
  );
};

export default DeckList;
