import { ReactElement, createContext, useMemo, useReducer } from "react";

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type CartItemType = {
    name: string,
    sku: string,
    price: number,
    qty: number,
}

type initCartStateType = { cart: CartItemType[] }

const initCartState: initCartStateType = { cart: [] }

const useCartContext = (initCartState: initCartStateType) => {

    const [state, dispatch] = useReducer(reducer, initCartState);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, []);

    const totalCartItem = state.cart.reduce((previousVal, cartItem) => {
        return previousVal + cartItem.qty;
    }, 0);

    const totalCartPrice = state.cart.reduce((previousVal, cartItem) => {
        return previousVal + (cartItem.price * cartItem.qty);
    }, 0);

    // const cart = state.cart;

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))
        return itemA - itemB
    })


    return { dispatch, REDUCER_ACTIONS, totalCartItem, totalCartPrice, cart }
}


export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: initCartStateType, action: ReducerAction): initCartStateType => {

    if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
    }

    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            const { name, price, sku } = action.payload;
            const filteredItem: CartItemType[] = state.cart.filter(item => item.sku !== sku)
            const isInCart = state.cart.find(item => item.sku === sku);
            const qty: number = isInCart ? isInCart.qty + 1 : 1;

            return {
                ...state,
                cart: [...filteredItem, { name, price, qty, sku }]
            }
        }

        case REDUCER_ACTION_TYPE.QUANTITY: {

            const { sku, qty } = action.payload;
            const isExist: CartItemType | undefined = state.cart.find(item => item.sku === sku)

            if (!isExist) {
                throw new Error('Item Not Exist!');
            }

            const updateItem = { ...isExist, qty }
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return {
                ...state,
                cart: [...filteredCart, updateItem]
            }
        }

        case REDUCER_ACTION_TYPE.REMOVE: {
            const { sku } = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return {
                ...state,
                cart: [...filteredCart]
            }
        }

        default:
            throw new Error('Undefined Reducer!')
    }
}


export type initialCartContextType = ReturnType<typeof useCartContext>

const initialCartContext: initialCartContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalCartItem: 0,
    totalCartPrice: 0,
    cart: []
}

export const CartContext = createContext<initialCartContextType>(initialCartContext)

type ChildrenType = { children: ReactElement | ReactElement[] }

export default function CartProvider({ children }: ChildrenType) {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}
