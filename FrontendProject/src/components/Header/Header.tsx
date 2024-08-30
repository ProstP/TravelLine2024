import { ReactNode } from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => <div className={styles.container}>{children}</div>;

export default Header;
