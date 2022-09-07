import React from "react";
import styles from "../styles/QA.module.scss";

export const Q = (props: {children: string | React.ReactNode}) => {
  return (
    <div className={styles.q}>
      <div className={styles.q_fig}>Q</div>
      <div className={styles.q_content}>
        {props.children}
      </div>
    </div>
  )
}

export const A = (props: {children: string | React.ReactNode}) => {
  return (
    <div className={styles.a}>
      <div className={styles.a_fig}>A</div>
      <div className={styles.a_content}>
        {props.children}
      </div>
    </div>
  )
}
