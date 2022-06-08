import { ProductImage, ProductTitle, ProductButtons, ProducCard } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProducCard
                    product={product}
                    className="bg-dark text-white "
                >
                    <ProducCard.Image />
                    <ProducCard.Title title={'Coffee Ment - Card'} />
                    <ProducCard.Buttons className='custom-buttons' />
                </ProducCard>

                <ProducCard product={product}
                    className="bg-dark text-white "
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProducCard>
            </div>
        </div>
    )
}
