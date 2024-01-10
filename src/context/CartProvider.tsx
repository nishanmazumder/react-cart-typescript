import { ReactElement, createContext, memo, useMemo, useReducer } from "react";

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

type CartItemType = {
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

    return { dispatch, REDUCER_ACTIONS }
}


export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: initCartStateType, action: ReducerAction) => {

    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD:


            console.log(state);
            console.log(action);


            break;

        default:
            throw new Error('Undefined Reducer!')
    }


    return {}
}


export type initialCartContextType = ReturnType<typeof useCartContext>

const initialCartContext: initialCartContextType = {
    dispatch: () => { },
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE
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
