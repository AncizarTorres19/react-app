import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product, InitialValues } from '../interfaces/insterfaces';

interface useProductArgs {
    product: Product;   // current product
    onChange?: (args: onChangeArgs) => void;    // callback on change
    value?: number;    // count of products in cart
    initialValue?: InitialValues;   // initial value of count of products in cart
}
export const useProduct = ({ onChange, product, value = 0, initialValue }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValue?.count || value);
    const isMounted = useRef(false);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ count: value, product });
        }
        let newValue = Math.max(counter + value, 0)
        if (initialValue?.maxCount) {
            newValue = Math.min(newValue, initialValue.maxCount)
        }
        setCounter(newValue)
        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValue?.count || value)
    }
    useEffect(() => {
        if (!isMounted.current) return;   // skip the first render
        setCounter(value);
    }, [value])
    useEffect(() => {
        isMounted.current = true;         // set the flag to true
    }, [])
    return {
        isMaxReached: !!initialValue?.count && initialValue.maxCount === counter, // is max count of products in cart reached
        counter,                          // current counter
        maxCount: initialValue?.maxCount, // max count of products in cart
        reset,                            // reset counter
        increaseBy,                       // increase counter by value
    }
}
