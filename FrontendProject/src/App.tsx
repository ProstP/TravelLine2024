import { useState } from "react";
import DisplayDeckList from "./components/DisplayDeckList/DisplayDeckList";
import { useStore } from "./hooks/useStore";
import DisplayLearningProcess from "./components/DisplayLearningProcess/DisplayLearningProcess";

const Content = () => {
  const [selectedDeckToLearn, setDeckToLearn] = useState("");
  const deck = useStore(state => state.app.decks.find(d => d.id === selectedDeckToLearn));

  return (
    <>
      {deck === undefined ? (
        <DisplayDeckList selectDeckToLearnVoid={setDeckToLearn} />
      ) : (
        <DisplayLearningProcess deck={deck} exitVoid={() => setDeckToLearn("")} />
      )}
    </>
  );
};

function App() {
  return <Content />;
}

export default App;
