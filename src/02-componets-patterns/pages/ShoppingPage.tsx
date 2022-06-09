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
                    <ProductImage className='custom-image' style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}} />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProducCard>
                <ProducCard
                    product={product}
                    style={{ backgroundColor: '#61DAFB' }}
                >
                    <ProductImage style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                    <ProductTitle style={{display: 'flex', justifyContent: 'end', fontWeight: 'bold'}}/>
                    <ProductButtons style={{display: 'flex', justifyContent: 'end'}}/>
                </ProducCard>
            </div>
        </div>
    )
}
