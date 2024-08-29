import DeckList from "./components/DeckList/DeckList";
import { useStore } from "./hooks/useStore";
import LearningProcess from "./components/LearningProcess/LearningProcess";

const Content = () => {
  const selectedDeck = useStore(state => state.app.selectedDeckToLearn);
  const deck = useStore(state => state.app.decks.find(d => d.id === selectedDeck));

  return <>{deck === undefined ? <DeckList /> : <LearningProcess deck={deck} />}</>;
};

function App() {
  return <Content />;
}

export default App;
