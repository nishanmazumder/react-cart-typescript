import { ReducerAction, ReducerActionType } from '../context/CartProvider';
import { ProductType } from '../context/ProductProvider'

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

export default function Product({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType) {

    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

    const addToCart = () => {
        dispatch({
            type: REDUCER_ACTIONS.ADD,
            payload: { ...product, qty: 1 }
        })
    }

    return (
        <article className="product">
            <img src={img} alt={product.name} className="" />
            <h3>{product.name} {inCart && '✔️'}</h3>
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </article>
    )
}
