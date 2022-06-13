import { ProductImage, ProductTitle, ProductButtons, ProducCard } from "../components"
import { Product } from '../interfaces/insterfaces';
import '../styles/custom-styles.css'
import { useState } from 'react';
import { products } from "../data/products";

interface ProducInCard extends Product {
    count: number;   // count of products in cart
}

export const ShoppingPage = () => {

    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProducInCard }>({})

    const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
        setShoppingCard(oldShoppingCard => {

            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCard  // delete product from shopping card
                // delete oldShoppingCard[product.id]   // delete product from shoppingCard

                return rest // return rest of the shopping card
            }
            return {
                ...oldShoppingCard, // copy all old products
                [product.id]: { ...product, count } // add new product with new count
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {products.map(product => (
                    <ProducCard product={product}
                        key={product.id}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        // value={product.id in shoppingCard ? shoppingCard[product.id].count : 0}  // set value of product in cart
                        // value={shoppingCard[product.id] ? shoppingCard[product.id].count : 0}  // set value of product in cart
                        value={shoppingCard[product.id]?.count || 0}  // set value of product in cart
                    >
                        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductTitle className='text-bold' />
                        <ProductButtons className='custom-buttons' />
                    </ProducCard>
                ))}
            </div>
            <div className="shopping-cart">
                {/* {Object.keys(shoppingCard).map((item, index)=> (
                    <ProducCard product={shoppingCard[item]}
                         key={index}
                        className="bg-dark text-white"
                        style={{ width: '100px' }}
                    >
                        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductButtons
                            className='custom-buttons'
                            style={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </ProducCard>
                ))} */}
                {Object.entries(shoppingCard).map(([id, product]) => (
                    <ProducCard product={product}
                        className="bg-dark text-white"
                        style={{ width: '100px' }}
                        key={id}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductButtons
                            className='custom-buttons'
                            style={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </ProducCard>
                ))}
            </div>
        </div>
    )
}

