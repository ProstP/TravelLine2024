import DeckList from "./components/DeckList/DeckList";
import LearningProcess from "./components/LearningProcess/LearningProcess";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeckList />} />
        <Route path="/learning">
          <Route path=":id" element={<LearningProcess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
