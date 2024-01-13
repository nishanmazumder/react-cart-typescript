import { ChangeEvent } from "react"
import { CartItemType } from "../context/CartProvider"
import useCart from "../hook/useCart"

type PropType = {
    item: CartItemType
}

export default function CartItem({ item }: PropType) {
    const total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.qty * item.price)
    // const [qty, setQty] = useState<number>(item.qty)
    const { dispatch, REDUCER_ACTIONS } = useCart()

    const onChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: parseInt(e.target.value) }
        })
    }

    const onRemoveItem = () => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item
        })
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><input id={'ID-' + item.sku} type="number" value={item.qty} onChange={e => onChangeQty(e)} /></td>
            <td>
                {total}
            </td>
            <td><button onClick={onRemoveItem}>❌</button></td>
        </tr>
    )
}
