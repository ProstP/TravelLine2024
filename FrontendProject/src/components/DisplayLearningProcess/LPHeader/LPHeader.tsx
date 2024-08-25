import styles from "./LPHeader.module.scss";

type LPHeaderProps = {
  deckName: string;
  exitVoid: () => void;
};

const LPHeader = ({ deckName, exitVoid }: LPHeaderProps) => {
  return (
    <div className={styles.header}>
      <h3>{deckName}</h3>
      <button onClick={() => exitVoid()} className={styles.btn}>
        Выйти
      </button>
    </div>
  );
};

export default LPHeader;
