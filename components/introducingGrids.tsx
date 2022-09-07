import React, {CSSProperties} from "react";
import styles from "../styles/introducingGrids.module.scss"
import { motion } from "framer-motion"

const ShowWhenScrolled = (props: {
  children: string | React.ReactNode
  className?: string
  useScrollAnimation?: boolean
}) => !!props.useScrollAnimation ? (
  <motion.div className={props.className ?? ''}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0 }}>
    {props.children}
  </motion.div>
) : (
  <div className={props.className ?? ''}>
    {props.children}
  </div>
)


export const GridTextImage = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
  useScrollAnimation?: boolean
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <ShowWhenScrolled className={styles.block_text_image}
                        useScrollAnimation={!!props.useScrollAnimation}>
        {props.children}
      </ShowWhenScrolled>
    </div>
  )
}

export const GridImageText = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
  useScrollAnimation?: boolean
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <ShowWhenScrolled className={styles.block_image_text}
                        useScrollAnimation={!!props.useScrollAnimation}>
        {props.children}
      </ShowWhenScrolled>
    </div>
  )
}

export const DefaultBlock = (props: {
  children: string | React.ReactNode
  style?: CSSProperties
  useScrollAnimation?: boolean
}) => {
  return (
    <div className={styles.block_wrapper} style={props.style}>
      <ShowWhenScrolled className={styles.default_block}
                        useScrollAnimation={!!props.useScrollAnimation}>
        {props.children}
      </ShowWhenScrolled>
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
