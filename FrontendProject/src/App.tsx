import { useState } from "react";
import DeckList from "./components/DeckList/DeckList";
import { useStore } from "./hooks/useStore";
import LearningProcess from "./components/LearningProcess/LearningProcess";

const Content = () => {
  const [selectedDeckToLearn, setDeckToLearn] = useState("");
  const deck = useStore(state => state.app.decks.find(d => d.id === selectedDeckToLearn));

  return (
    <>
      {deck === undefined ? (
        <DeckList selectDeckToLearn={setDeckToLearn} />
      ) : (
        <LearningProcess deck={deck} exit={() => setDeckToLearn("")} />
      )}
    </>
  );
};

function App() {
  return <Content />;
}

export default App;
