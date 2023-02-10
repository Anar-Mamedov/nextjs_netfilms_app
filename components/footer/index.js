import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made With by&nbsp;
      <Link href="https://github.com/Anar-Mamedov?tab=repositories" target="_blank">
        Anar Mamedov
      </Link>
    </footer>
  );
}
export default Footer;
