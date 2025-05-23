import React from "react";
import styles from "../styles/Header.module.css";
import SearchFilter from "./searchfilter.component";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__home}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles["header__icon-container"]}>
        <Link href="/">
          <a>
            CRYPTO.SOLOPOOL.PRO
          </a>
        </Link>
      </div>
      <div className={styles.header__search}>
        <SearchFilter />
      </div>
    </div>
  );
};

export default Header;
