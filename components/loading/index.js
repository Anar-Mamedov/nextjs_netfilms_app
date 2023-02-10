import React from "react";
import style from "./styles.module.css";

function Loading() {
  return (
    <div className={style.loadingWrapper}>
      <div className={style.loading}></div>
    </div>
  );
}

export default Loading;
