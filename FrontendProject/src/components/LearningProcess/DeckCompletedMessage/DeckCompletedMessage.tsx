import styles from "./DeckCompletedMessage.module.scss";

type DeckCompletedMessageProps = {
  exit: () => void;
};

const DeckCompletedMessage = ({ exit }: DeckCompletedMessageProps) => (
  <div className={styles.background}>
    <div className={styles.menu}>
      <p className={styles.message}>Поздравляю, вы завершили успешно все карточки из данного набора</p>
      <button className={styles.btn} onClick={() => exit()}>
        Выход
      </button>
    </div>
  </div>
);

export default DeckCompletedMessage;
