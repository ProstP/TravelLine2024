import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import styles from "./CreateDeckMenu.module.scss";

type CreateDeckMenuProps = {
  closeMenuFn: () => void;
};

const CreateDeckMenu = ({ closeMenuFn }: CreateDeckMenuProps) => {
  const [name, setName] = useState("");
  const { addDeck } = useStore(state => state.actions);

  return (
    <div className={styles.background}>
      <div className={styles.menu}>
        <h2 className={styles.title}>Введите название для нового набора</h2>
        <input className={styles.field} onChange={e => setName(e.target.value)}></input>
        <div className={styles.btns}>
          <button className={styles.add} onClick={() => addDeck(name)}>
            Добавить
          </button>
          <button className={styles.cancel} onClick={() => closeMenuFn()}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeckMenu;
