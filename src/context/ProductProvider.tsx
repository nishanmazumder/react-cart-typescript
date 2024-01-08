import React, { ReactElement, createContext } from 'react';

export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

const initialProducts: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
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
