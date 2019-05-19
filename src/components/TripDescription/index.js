import React from "react";
import styles from "./styles.module.css";

export default ({ children }) => (
  <div className={styles.TripDescription}>
   <p>{children}</p> 
   </div>
);