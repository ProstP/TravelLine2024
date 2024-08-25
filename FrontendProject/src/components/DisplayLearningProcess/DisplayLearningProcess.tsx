import { useState } from "react";
import { Deck } from "../../Entities/Deck";
import { LearningProcess } from "../../Entities/LearningProcess";
import styles from "./DisplayLearningProcess.module.scss";
import LPHeader from "./LPHeader/LPHeader";
import DisplayCardToLearn from "./DisplayCardToLearn/DisplayCardToLearn";
import DeckCompletedMessage from "./DeckCompletedMessage/DeckCompletedMessage";

type DisplayLearningProcessProps = {
  deck: Deck;
  exitVoid: () => void;
};

const DisplayLearningProcess = ({ deck, exitVoid }: DisplayLearningProcessProps) => {
  const [lp, setLp] = useState<LearningProcess>({ cards: deck.cards, complited: [] });

  return (
    <div className={styles.container}>
      {lp.cards.length === 0 ? <DeckCompletedMessage exitVoid={exitVoid} /> : null}
      <LPHeader deckName={deck.name} exitVoid={exitVoid} />
      <div className={styles.decks}>
        <div className={styles.deck}>
          <p className={styles.title}>Осталось карточек: {lp.cards.length}</p>
        </div>
        <div className={styles.deck}>
          <p className={styles.title}>Завершено карточек: {lp.complited.length}</p>
        </div>
      </div>
      <DisplayCardToLearn
        card={lp.cards.length !== 0 ? lp.cards[0] : { id: "", word: "", translation: "" }}
        rightAns={() => setLp(LearningProcess.PutCardToCompited(lp))}
        mistake={() => setLp(LearningProcess.PutCardToDownTheDesk(lp))}
      />
    </div>
  );
};

export default DisplayLearningProcess;
