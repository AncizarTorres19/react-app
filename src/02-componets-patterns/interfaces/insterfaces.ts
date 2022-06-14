import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductCardProps } from "../components/ProducCard";

export interface Product {
    id: string;     // id of the product
    img?: string;   // url of the image
    title: string;  // title of the product
}
export interface ProductContextProps {
    counter: number;    // counter of the products
    maxCount?: number;  // max count of products in cart
    product: Product;   // current product
    increaseBy: (value: number) => void;    // increase counter by value
}
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element; // ProductCard with product
    Buttons: (Props: ProductButtonsProps) => JSX.Element;   // ProductButtons
    Image: (Props: ProductImageProps) => JSX.Element;       // ProductImage
    Title: (Props: ProductTitleProps) => JSX.Element;       // ProductTitle
}
export interface onChangeArgs {
    product: Product;   // current product
    count: number;      // counter of the products
}
export interface ProducInCart extends Product {
    count: number;   // count of products in cart
}
export interface InitialValues {
    count?: number;     // count of products in cart
    maxCount?: number;  // max count of products in cart
}

export interface ProducCardHandlers {
    count: number;     // count of products in cart
    isMaxReached: boolean; // is max count of products in cart reached
    maxCount?: number;  // max count of products in cart
    product: Product;   // current product

    increaseBy: (value: number) => void;   // increase counter by value
    reset: () => void;                   // reset counter
}