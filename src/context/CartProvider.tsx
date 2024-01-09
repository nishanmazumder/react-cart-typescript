import { ReactElement, createContext, useReducer } from "react"

type CartItemType = {
    name: string,
    sku: string,
    price: number,
    qty: number,
}

type initCartStateType = { cart: CartItemType[] }

const initCartState: initCartStateType = { cart: [] }

const useCartContext = (initCartState: initCartStateType) => {

    const [state, dispatch] = useReducer(reducer, initCartState)

    return { dispatch }
}

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload: CartItemType
}

const reducer = (state: initCartStateType, action: ReducerAction) => {

    console.log(state);
    console.log(action);

    return {}
}


type initialCartContextType = ReturnType<typeof useCartContext>

const initialCartContext: initialCartContextType = {
    dispatch: () => { }
}

export const CartContext = createContext<initialCartContextType>(initialCartContext)

type ChildrenType = { children: ReactElement }

export default function CartProvider({ children }: ChildrenType) {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}