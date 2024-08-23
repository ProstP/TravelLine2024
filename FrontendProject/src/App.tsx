import { useState } from "react";
import DeckList from "./components/DisplayDeck/DisplayDeckList";

const Content = () => {
  const [selectedDeckToLearn, setDeckToLearn] = useState("");

  return <div>{selectedDeckToLearn === "" ? <DeckList selectDeckToLearnFn={setDeckToLearn} /> : <div></div>}</div>;
};

function App() {
  return <Content />;
}

export default App;
