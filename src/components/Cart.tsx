import useCart from "../hook/useCart"
import CartItem from "./CartItem";

export default function Cart() {

    const { cart } = useCart();

    if (!cart.length) {
        return "No Product!";
    }

    return (
        <>
            <table style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {
                        return <CartItem key={item.name} item={item} />
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Footer</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
