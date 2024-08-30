import { useState } from "react";
import { LearningProcess as LearningProcessType } from "../../Entities/LearningProcess";
import styles from "./LearningProcess.module.scss";
import CardToLearn from "./CardToLearn/CardToLearn";
import DeckCompletedMessage from "./DeckCompletedMessage/DeckCompletedMessage";
import Header from "../Header/Header";
import { useStore } from "../../hooks/useStore";
import { useNavigate, useParams } from "react-router-dom";

type DecksProps = {
  unCompitedCount: number;
  complitedCount: number;
};

const Decks = ({ unCompitedCount, complitedCount }: DecksProps) => (
  <div className={styles.decks}>
    <div className={styles.deck}>
      <p className={styles.title}>Осталось карточек: {unCompitedCount}</p>
    </div>
    <div className={styles.deck}>
      <p className={styles.title}>Завершено карточек: {complitedCount}</p>
    </div>
  </div>
);

const LearningProcess = () => {
  const navigate = useNavigate();
  const params = useParams();
  const idDeck = params.id;
  const deck = useStore(state => state.app.decks.find(d => d.id === idDeck));
  if (deck === undefined) {
    navigate("/");
  }
  const [lp, setLp] = useState<LearningProcessType>(LearningProcessType.CreateLearningProcess(deck!.cards));

  return (
    <div className={styles.container}>
      <Header>
        <h3>{deck!.name}</h3>
        <button onClick={() => navigate("/")} className={styles.btn}>
          Выйти
        </button>
      </Header>
      <Decks unCompitedCount={lp.cards.length} complitedCount={lp.complitedCount} />
      {!lp.isComplited ? (
        <CardToLearn
          card={lp.cards[0]}
          rightAns={() => setLp(LearningProcessType.PutCardToComplited(lp))}
          mistake={() => setLp(LearningProcessType.PutCardToDownTheDesk(lp))}
        />
      ) : null}
      {lp.isComplited ? <DeckCompletedMessage /> : null}
    </div>
  );
};

export default LearningProcess;
