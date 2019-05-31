import React from "react";
import styles from "./styles.module.css";

export default ({ children }) => (
  <button className={styles.Button}>{children}</button>
);
