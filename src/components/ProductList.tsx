import { ReactElement } from 'react'
import useProduct from '../hook/useProduct'
import Product from './Product';

export default function ProductList() {

    const { products } = useProduct();

    let content: ReactElement | ReactElement[] = <p>loading...</p>;

    if (products?.length) {
        content = products.map(product => {
            return (
                <Product
                    key={product.sku}
                    product={product}
                // dispatch={dispatch}
                // REDUCER_ACTIONS={REDUCER_ACTIONS}
                // inCart={inCart}
                />
            )
        })
    }

    return content;
}
