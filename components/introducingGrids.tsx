import React, {CSSProperties} from "react";
import styles from "../styles/introducingGrids.module.scss"

export const GridTextImage = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <div className={styles.block_text_image}>
        {props.children}
      </div>
    </div>
  )
}

export const GridImageText = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <div className={styles.block_image_text}>
        {props.children}
      </div>
    </div>
  )
}

export const DefaultBlock = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <div className={styles.default_block}>
        {props.children}
      </div>
    </div>
  )
}

export const TextPart = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
}) => {
  return (
    <div className={styles.text_part} style={props.style}>
      {props.children}
    </div>
  )
}

export const ImagePart = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
}) => {
  return (
    <div className={styles.image_part} style={props.style}>
      {props.children}
    </div>
  )
}
