import { useState } from "react";
import { Deck } from "../../Entities/Deck";
import { LearningProcess as LearningProcessType } from "../../Entities/LearningProcess";
import styles from "./LearningProcess.module.scss";
import Header from "./Header/Header";
import CardToLearn from "./CardToLearn/CardToLearn";
import DeckCompletedMessage from "./DeckCompletedMessage/DeckCompletedMessage";

type DisplayLearningProcessProps = {
  deck: Deck;
  exit: () => void;
};

const LearningProcess = ({ deck, exit }: DisplayLearningProcessProps) => {
  const [lp, setLp] = useState<LearningProcessType>({ cards: deck.cards, complited: [] });

  return (
    <div className={styles.container}>
      {lp.cards.length === 0 ? <DeckCompletedMessage exit={exit} /> : null}
      <Header deckName={deck.name} exit={exit} />
      <div className={styles.decks}>
        <div className={styles.deck}>
          <p className={styles.title}>Осталось карточек: {lp.cards.length}</p>
        </div>
        <div className={styles.deck}>
          <p className={styles.title}>Завершено карточек: {lp.complited.length}</p>
        </div>
      </div>
      <CardToLearn
        card={lp.cards.length !== 0 ? lp.cards[0] : { id: "", word: "", translation: "" }}
        rightAns={() => setLp(LearningProcessType.PutCardToCompited(lp))}
        mistake={() => setLp(LearningProcessType.PutCardToDownTheDesk(lp))}
      />
    </div>
  );
};

export default LearningProcess;
