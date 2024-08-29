import { useStore } from "../../../hooks/useStore";
import styles from "./DeckCompletedMessage.module.scss";

const DeckCompletedMessage = () => {
  const selectDeckToLearn = useStore(state => state.selectDeckToLearn);

  return (
    <div className={styles.background}>
      <div className={styles.menu}>
        <p className={styles.message}>Поздравляю, вы завершили успешно все карточки из данного набора</p>
        <button className={styles.btn} onClick={() => selectDeckToLearn("")}>
          Выход
        </button>
      </div>
    </div>
  );
};

export default DeckCompletedMessage;
