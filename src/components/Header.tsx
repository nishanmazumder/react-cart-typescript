import { SetStateAction } from "react";
import useCart from "../hook/useCart"

type propType = {
    cartState: boolean,
    setCart: React.Dispatch<SetStateAction<boolean>>
}

export default function Header({ cartState, setCart }: propType) {
    const { totalCartItem, totalCartPrice } = useCart();

    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalCartPrice)

    const wrapperStyle = {
        backgroundColor: '#F1CAC9',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    return (
        <div style={wrapperStyle}>
            <div style={{ textAlign: 'left' }}>
                <h3><strong>Total Cart Item</strong> {totalCartItem}</h3>
                <h3><strong>Total Cart Price</strong> {price}</h3>
            </div>
            <div>
                <button onClick={() => setCart(!cartState)}>{cartState ? 'Product' : 'View Cart'}</button>
            </div>
        </div>
    )
}
