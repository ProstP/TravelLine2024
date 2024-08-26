import styles from "./Header.module.scss";

type HeaderProps = {
  openCreateDeckMenu: () => void;
};

const Header = ({ openCreateDeckMenu }: HeaderProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Learning application</h2>
    <button onClick={() => openCreateDeckMenu()}>Создать новый набор</button>
  </div>
);

export default Header;
