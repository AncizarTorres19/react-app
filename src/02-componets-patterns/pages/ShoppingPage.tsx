import { ProductImage, ProductTitle, ProductButtons, ProducCard } from "../components"


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
                <ProducCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProducCard>

                <ProducCard product={product}>
                    <ProducCard.Image  />
                    <ProducCard.Title title={'Coffee Ment - Card'}/>
                    <ProducCard.Buttons  />
                </ProducCard>
            </div>
        </div>
    )
}
