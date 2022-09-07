import React from "react";
import styles from "../styles/FeatureTitle.module.scss"

type Props = {
  enTitle: string,
  jaTitle: string,
  children: React.ReactNode | string
}

const FeatureTitle = (props: Props) => (
  <>
    <h2 className={styles.title}>
      <span className={styles.ja_title}>
        {props.jaTitle}
      </span>
      <span className={styles.en_title}>
        {props.enTitle}
      </span>
    </h2>
    <p className={styles.description}>
      {props.children}
    </p>
  </>
)

export default FeatureTitle
