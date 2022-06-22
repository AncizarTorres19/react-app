import { ProductImage, ProductTitle, ProductButtons, ProducCard } from "../components"
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProducCard product={product}
                key={product.id}
                initialValue={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, increaseBy, isMaxReached, maxCount }) => (
                        <>
                            <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle />
                            <ProductButtons />
                            </>
                    )
                }

            </ProducCard>
        </div>
    )
}

