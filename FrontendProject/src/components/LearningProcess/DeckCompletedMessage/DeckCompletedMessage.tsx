import { useNavigate } from "react-router-dom";
import styles from "./DeckCompletedMessage.module.scss";

const DeckCompletedMessage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.menu}>
        <p className={styles.message}>Поздравляю, вы завершили успешно все карточки из данного набора</p>
        <button className={styles.btn} onClick={() => navigate("/")}>
          Выход
        </button>
      </div>
    </div>
  );
};

export default DeckCompletedMessage;
