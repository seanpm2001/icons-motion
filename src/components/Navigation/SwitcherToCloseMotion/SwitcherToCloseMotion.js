import React, { useRef, useState, useEffect } from 'react'
import styles from './switcher-to-close--motion.module.scss'

const SwitcherToCloseMotion = (props) => {
	const iconRef = useRef(null)
	const [isAnimating, setIsAnimating] = useState(props.isAnimating)

	let iconStyles = {
<<<<<<< HEAD
		width: props.width,
		height: props.height
=======
		width: props.size,
		height: props.size
>>>>>>> 81ca42f41dfaacb1012bb58322dd8455e72d91db
	}

	React.useEffect(() => {
		setIsAnimating(props.isAnimating)
	}, [props.isAnimating])

	const shouldAnimate = isAnimating ? styles.isAnimating : ''
	return (
		<div ref={iconRef} className={`${shouldAnimate}`}>
			<svg
				style={iconStyles}
				className={styles.IconSwitcherToClose}
				x='0px'
				y='0px'
				viewBox='0 0 32 32'
			>
				<g>
					<rect className={styles.FillNone} width='32' height='32' />
				</g>
				<g className={styles.Box9}>
					<rect x='24' y='24' width='4' height='4' />
				</g>
				<g className={styles.Box8}>
					<rect x='14' y='24' width='4' height='4' />
				</g>
				<g className={styles.Box7}>
					<rect x='4' y='24' width='4' height='4' />
				</g>
				<g className={styles.Box6}>
					<rect x='24' y='14' width='4' height='4' />
				</g>
				<g className={styles.Box5}>
					<rect x='14' y='14' width='4' height='4' />
				</g>
				<g className={styles.Box4}>
					<rect x='4' y='14' width='4' height='4' />
				</g>
				<g className={styles.Box3}>
					<rect x='24' y='4' width='4' height='4' />
				</g>
				<g className={styles.Box2}>
					<rect x='14' y='4' width='4' height='4' />
				</g>
				<g className={styles.Box1}>
					<rect x='4' y='4' width='4' height='4' />
				</g>
				<g className={styles.X2}>
					<line className={styles.Stroke} x1='16' y1='5.7' x2='16' y2='26.3' />
				</g>
				<g className={styles.X1}>
					<line className={styles.Stroke} x1='26.3' y1='16' x2='5.7' y2='16' />
				</g>
			</svg>
		</div>
	)
}

export default SwitcherToCloseMotion
