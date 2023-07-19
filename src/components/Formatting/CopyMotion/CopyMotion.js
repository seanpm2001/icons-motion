import React, { useRef, useState, useEffect } from 'react'
import styles from './copy--motion.module.scss'

const CopyMotion = (props) => {
  const iconRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(props.isAnimating)

  useEffect(() => {
    setIsAnimating(props.isAnimating)
  }, [props.isAnimating])

  const shouldAnimate = isAnimating ? styles.isAnimating : ''

  return (
    <svg
      ref={iconRef}
      viewBox='0 0 32 32'
      className={`${shouldAnimate}`}
      aria-label='Copy'
      width={props.size}
      height={props.size}
    >
      <path className={styles.CopyTop} d='M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z' />
      <path
        className={styles.CopyBottom}
        d='M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z'
      />
      <rect id='_Transparent_Rectangle_' fill='none' width='32' height='32' />
    </svg>
  )
}

export default CopyMotion
