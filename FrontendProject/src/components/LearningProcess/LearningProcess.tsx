import { useState } from "react";
import { Deck } from "../../Entities/Deck";
import { LearningProcess as LearningProcessType } from "../../Entities/LearningProcess";
import styles from "./LearningProcess.module.scss";
import CardToLearn from "./CardToLearn/CardToLearn";
import DeckCompletedMessage from "./DeckCompletedMessage/DeckCompletedMessage";
import Header from "../Header/Header";
import { useStore } from "../../hooks/useStore";

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

type DisplayLearningProcessProps = {
  deck: Deck;
};

const LearningProcess = ({ deck }: DisplayLearningProcessProps) => {
  const [lp, setLp] = useState<LearningProcessType>(LearningProcessType.CreateLearningProcess(deck.cards));
  const selectDeckToLearn = useStore(state => state.selectDeckToLearn);

  return (
    <div className={styles.container}>
      <Header>
        <h3>{deck.name}</h3>
        <button onClick={() => selectDeckToLearn("")} className={styles.btn}>
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
