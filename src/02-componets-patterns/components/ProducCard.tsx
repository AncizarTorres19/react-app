import { createContext, CSSProperties } from 'react';

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProducCardHandlers } from '../interfaces/insterfaces';
import { useProduct } from '../hooks/useProduct';


import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export interface Props {
    product: Product;   // Product object
    children?: (args:ProducCardHandlers) => JSX.Element | JSX.Element[];   // children is a ReactNode
    className?: string; // className of the component
    style?: CSSProperties;  // style prop is used to set the style of the component
    onChange?: (args: onChangeArgs) => void;    // callback function to handle changes in the product count
    value?: number; // initial value
    initialValue?: InitialValues;   // initial value for count and maxCount
}

export const ProducCard = ({ children, product, className, style, onChange, value, initialValue }: Props) => {

    const { counter, increaseBy, maxCount, isMaxReached, reset } = useProduct({ onChange, product, value, initialValue })

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children!({
                    count: counter,
                    isMaxReached,
                    maxCount: initialValue?.maxCount,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>

    )
}