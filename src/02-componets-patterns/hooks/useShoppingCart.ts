import { useState } from "react";
import { onChangeArgs, ProducInCart, Product } from "../interfaces/insterfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useShoppingCart = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProducInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        setShoppingCard(oldShoppingCard => {

            const productIncart: ProducInCart = oldShoppingCard[product.id] || { ...product, count: 0 }

            if (Math.max(productIncart.count + count, 0) > 0) {
                productIncart.count += count
                return { ...oldShoppingCard, [product.id]: productIncart }
            }
            // delete product from cart
            const { [product.id]: toDelete, ...rest } = oldShoppingCard  // delete product from shopping card
            return rest // return rest of the shopping card

            //     if (count === 0) {
            //         const { [product.id]: toDelete, ...rest } = oldShoppingCard  // delete product from shopping card
            //         // delete oldShoppingCard[product.id]   // delete product from shoppingCard
            //         return rest // return rest of the shopping card
            //     }
            //     return {
            //         ...oldShoppingCard, // copy all old products
            //         [product.id]: { ...product, count } // add new product with new count
            //     }
            // })
        })
    }
    return {
        shoppingCard,
        onProductCountChange
    }
}

