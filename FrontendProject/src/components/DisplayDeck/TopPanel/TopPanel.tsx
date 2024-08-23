import "./TopPanel.css";

type TopPanelProps = {
  openCreateDeckMenu: () => void;
};

const TopPanel = ({ openCreateDeckMenu }: TopPanelProps) => (
  <div className="topPanel">
    <h2 className="white">Learning application</h2>
    <button onClick={() => openCreateDeckMenu()}>Создать новый набор</button>
  </div>
);

export default TopPanel;
