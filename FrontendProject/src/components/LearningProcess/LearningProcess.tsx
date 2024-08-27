import { useState } from "react";
import { Deck } from "../../Entities/Deck";
import { LearningProcess as LearningProcessType } from "../../Entities/LearningProcess";
import styles from "./LearningProcess.module.scss";
import Header from "./Header/Header";
import CardToLearn from "./CardToLearn/CardToLearn";
import DeckCompletedMessage from "./DeckCompletedMessage/DeckCompletedMessage";

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
  exit: () => void;
};

const LearningProcess = ({ deck, exit }: DisplayLearningProcessProps) => {
  const [lp, setLp] = useState<LearningProcessType>(LearningProcessType.CreateLearningProcess(deck.cards));

  return (
    <div className={styles.container}>
      <Header deckName={deck.name} exit={exit} />
      <Decks unCompitedCount={lp.cards.length} complitedCount={lp.complited.length} />
      <CardToLearn
        card={lp.cards.length !== 0 ? lp.cards[0] : { id: "", word: "", translation: "" }}
        rightAns={() => setLp(LearningProcessType.PutCardToComplited(lp))}
        mistake={() => setLp(LearningProcessType.PutCardToDownTheDesk(lp))}
      />
      {lp.isComplited ? <DeckCompletedMessage exit={exit} /> : null}
    </div>
  );
};

export default LearningProcess;
