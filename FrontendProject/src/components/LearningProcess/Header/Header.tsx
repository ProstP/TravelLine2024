import styles from "./Header.module.scss";

type HeaderProps = {
  deckName: string;
  exit: () => void;
};

const Header = ({ deckName, exit }: HeaderProps) => (
  <div className={styles.header}>
    <h3>{deckName}</h3>
    <button onClick={() => exit()} className={styles.btn}>
      Выйти
    </button>
  </div>
);

export default Header;
