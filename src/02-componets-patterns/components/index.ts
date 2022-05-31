import { ProducCard as ProducCardHOC } from './ProducCard';
import { ProductCardHOCProps } from '../interfaces/insterfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProducCard: ProductCardHOCProps = Object.assign(ProducCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons

})