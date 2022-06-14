import { ProductImage, ProductTitle, ProductButtons, ProducCard } from "../components"
import { products } from '../data/products';
import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProducCard product={product}
                key={product.id}
                className="bg-dark text-white"
                initialValue={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, increaseBy, isMaxReached, maxCount }) => (
                        <>
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />

                            <button className='btn btn-danger' onClick={reset}>Reset</button>
                            {!isMaxReached && <button className='btn btn-success' onClick={() => increaseBy(2)}>+2</button>}
                            {count !== 0 && <button className='btn btn-success' onClick={() => increaseBy(-2)}>-2</button>}
                            <div className='text-bold'>{count}</div>
                        </>
                    )
                }

            </ProducCard>
        </div>
    )
}

