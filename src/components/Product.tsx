import { ProductType } from '../context/ProductProvider'

type PropsType = {
    product: ProductType
}

export default function Product({ product }: PropsType) {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

    const itemInCart = 'Item in cart.';

    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            {/* <button onClick={onAddToCart}>Add to Cart</button> */}
        </article>
    )
}
