import React, { ReactElement, createContext } from 'react';

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initialProducts: ProductType[] = [
    {
        "name": "Widget",
        "sku": "item0001",
        "price": 9.99
    },
    {
        "name": "Premium Widget",
        "sku": "item0002",
        "price": 19.99
    },
    {
        "name": "Deluxe Widget",
        "sku": "item0003",
        "price": 29.99
    }
]

type ProductContextType = {
    products: ProductType[]
}

const contextProducts: ProductContextType = {
    products: []
}

export const ProductContext = createContext<ProductContextType>(contextProducts);

type ChildrenType = {
    children: ReactElement
}

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
    const products: ProductType[] = initialProducts;

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
