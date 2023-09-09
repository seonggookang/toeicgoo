import React from "react";
import styles from "./Hello.module.css";

const Hello = () => {
  return (
    <>
      <div
        style={{
          color: "red",
          borderRight: "12px solid #000",
          marginBottom: "50px",
          opacity: 1,
        }}
      >
        Hello
      </div>
      <div className={styles.box}>Hello</div>
    </>
  );
};

export default Hello;
