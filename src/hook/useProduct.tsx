import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';

export default function useProduct() {
    return useContext(ProductContext);
}
