import React from "react";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__links-container"]}>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MiningCryptoLive"
          >
            My GitHub
          </a>
        </div>
        <div>My Email: celldr69@gmail.com</div>
      </div>
      <div className={styles["footer__coingecko-container"]}>
        Data provided by&nbsp;
        <a
          target="_blank"
          href="https://www.coingecko.com/"
          rel="noopener noreferrer"
        >
          CoinGecko
        </a>
      </div>
    </footer>
  );
};

export default Footer;
