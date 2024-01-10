import { ReactElement } from 'react';
import Product from './Product';
import useProduct from '../hook/useProduct';
import useCart from '../hook/useCart';

export default function ProductList() {

    const { products } = useProduct();

    const { dispatch, REDUCER_ACTIONS } = useCart();

    let content: ReactElement | ReactElement[] = <p>loading...</p>;

    if (products?.length) {
        content = products.map(product => {
            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                // inCart={inCart}
                />
            )
        })
    }

    return content;
}
