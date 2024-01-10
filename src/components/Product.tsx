import { ReducerAction } from 'react';
import { ProductType } from '../context/ProductProvider'
import useCart from '../hook/useCart';

type PropsType = {
    product: ProductType,
    // dispatch: React.Dispatch<ReducerAction>
}

type useCartType = {
    dispatch: React.Dispatch<ReducerAction>
}

export default function Product({ product }: PropsType) {

    const { dispatch }: useCartType = useCart();

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

    const itemInCart = 'Item in cart.';

    const addToCart = () => {
        dispatch({
            test: "test",
            action: "action"
        }) as 
    }

    return (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </article>
    )
}
