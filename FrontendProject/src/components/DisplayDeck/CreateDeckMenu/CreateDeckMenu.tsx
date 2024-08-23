import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import "./CreateDeckMenu.css";

type CreateDeckMenuProps = {
  closeMenuFn: () => void;
};

const CreateDeckMenu = ({ closeMenuFn }: CreateDeckMenuProps) => {
  const [name, setName] = useState("");
  const { addDeck } = useStore(state => state.actions);

  return (
    <div className="menuBackground">
      <div className="createDeckMenu">
        <h2 style={{ color: "darkturquoise" }}>Введите название для нового набора</h2>
        <input className="nameField" onChange={e => setName(e.target.value)}></input>
        <div className="btnsCreateDeck">
          <button className="btnCreateDeck" style={{ backgroundColor: "red" }} onClick={() => closeMenuFn()}>
            Отмена
          </button>
          <button className="btnCreateDeck" style={{ backgroundColor: "lime" }} onClick={() => addDeck(name)}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeckMenu;
