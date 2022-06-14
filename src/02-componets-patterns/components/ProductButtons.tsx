import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProducCard';

import styles from "../styles/styles.module.css";

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext)

    // TODO isMaxReached = useCallback, [counter, maxCount]
    // TRUE si el contador es igual al maximo
    // FALSE si el contador es menor al maximo
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )
    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    );
}