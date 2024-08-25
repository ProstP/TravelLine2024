import styles from "./DeckListHeader.module.scss";

type TopPanelProps = {
  openCreateDeckMenu: () => void;
};

const DeckListHeader = ({ openCreateDeckMenu }: TopPanelProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Learning application</h2>
    <button onClick={() => openCreateDeckMenu()}>Создать новый набор</button>
  </div>
);

export default DeckListHeader;
